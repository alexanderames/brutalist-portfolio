import { Router } from 'express';
import path from 'path';
import { createReadStream, existsSync } from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { signMediaToken, verifyMediaToken } from '../lib/jwt.js';
import { requireAppOrigin, requireSession } from '../middleware/auth.js';
import { watermarkImage } from '../lib/watermark.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mediaRoot = process.env.MEDIA_ROOT || path.join(process.cwd(), 'public');
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

const router = Router();

function safePath(id) {
  if (!id || typeof id !== 'string') return null;
  const normalized = path.normalize(id).replace(/^(\.\.(\/|\\|$))+/, '');
  return normalized.includes('..') ? null : normalized;
}

router.get('/url', requireAppOrigin, requireSession, (req, res) => {
  const type = req.query.type; // image | video | audio
  const id = req.query.id;     // local path relative to mediaRoot
  const url = req.query.url;  // external URL to proxy (encodeURIComponent)
  const watermark = req.query.watermark === '1' && type === 'image';

  if (!type || (!id && !url)) {
    return res.status(400).json({ error: 'Missing type and (id or url)' });
  }

  let payload;
  if (url) {
    try {
      const decoded = decodeURIComponent(url);
      if (!decoded.startsWith('http://') && !decoded.startsWith('https://')) {
        return res.status(400).json({ error: 'Invalid url' });
      }
      payload = { type, extUrl: decoded };
    } catch {
      return res.status(400).json({ error: 'Invalid url' });
    }
  } else {
    const safe = safePath(id);
    if (!safe) return res.status(400).json({ error: 'Invalid id' });
    payload = { type, id: safe };
  }
  if (watermark) payload.watermark = true;

  const token = signMediaToken(payload);
  const streamPath = `/api/media/stream?token=${token}`;
  res.json({ url: streamPath });
});

router.get('/stream', requireAppOrigin, async (req, res) => {
  const token = req.query.token;
  if (!token) return res.status(401).json({ error: 'Missing token' });

  let payload;
  try {
    payload = verifyMediaToken(token);
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  const referer = req.get('Referer') || req.get('Referrer');
  const allowed = allowedOrigin.split(',').map((o) => o.trim());
  const ok = allowed.some((o) => referer && referer.startsWith(o));
  if (!ok) return res.status(403).json({ error: 'Forbidden: referer required' });

  const { type, id, extUrl, watermark } = payload;

  if (extUrl) {
    return proxyExternal(req, res, extUrl);
  }

  const localPath = path.join(mediaRoot, id);
  if (!existsSync(localPath)) return res.status(404).json({ error: 'Not found' });

  if (type === 'image' && watermark) {
    return streamWatermarked(req, res, localPath);
  }

  const ext = path.extname(id).toLowerCase();
  const mime = {
    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif', '.webp': 'image/webp',
    '.mp4': 'video/mp4', '.webm': 'video/webm', '.ogg': 'video/ogg',
    '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ogg': 'audio/ogg', '.webm': 'audio/webm',
  }[ext] || 'application/octet-stream';

  res.setHeader('Content-Type', mime);
  res.setHeader('Cache-Control', 'private, no-store');
  await pipeline(createReadStream(localPath), res);
});

async function streamWatermarked(req, res, localPath) {
  try {
    const { readFile } = await import('fs/promises');
    const buffer = await readFile(localPath);
    const out = await watermarkImage(buffer);
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'private, no-store');
    res.send(out);
  } catch (err) {
    console.error('Watermark error:', err);
    res.status(500).json({ error: 'Failed to serve image' });
  }
}

async function proxyExternal(req, res, extUrl) {
  try {
    const resp = await fetch(extUrl, { headers: { Accept: req.get('Accept') || '*/*' } });
    if (!resp.ok) return res.status(resp.status).json({ error: 'Upstream error' });
    const contentType = resp.headers.get('Content-Type') || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'private, no-store');
    const nodeStream = Readable.fromWeb(resp.body);
    await pipeline(nodeStream, res);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(502).json({ error: 'Failed to fetch media' });
  }
}

export default router;
