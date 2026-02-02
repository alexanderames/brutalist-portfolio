import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function getSecret() {
  if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
  const path = join(__dirname, '../../.session-secret');
  if (existsSync(path)) return readFileSync(path, 'utf8').trim();
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Using dev-only SESSION_SECRET. Set SESSION_SECRET or .session-secret for production.');
    return 'dev-secret-change-in-production';
  }
  throw new Error('Set SESSION_SECRET or create .session-secret for production');
}
const secret = getSecret();
const TOKEN_EXPIRY = process.env.MEDIA_TOKEN_EXPIRY || '15m'; // 15 minutes

/**
 * Create a short-lived JWT for media access.
 * @param {{ type: string, id?: string, extUrl?: string }} payload - type: image|video|audio; id: local path; extUrl: external URL to proxy
 */
export function signMediaToken(payload) {
  return jwt.sign(
    { ...payload, iat: Math.floor(Date.now() / 1000) },
    secret,
    { expiresIn: TOKEN_EXPIRY }
  );
}

/**
 * Verify and decode media JWT. Returns payload or throws.
 */
export function verifyMediaToken(token) {
  return jwt.verify(token, secret);
}
