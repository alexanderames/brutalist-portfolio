/**
 * Require request to come from allowed origin (Referer) and have valid session.
 * Session is issued on first request from allowed origin (no login required for view-only).
 */

const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

function normalizeOrigin(ref) {
  if (!ref || typeof ref !== 'string') return null;
  try {
    const u = new URL(ref);
    return u.origin;
  } catch {
    return null;
  }
}

export function requireAppOrigin(req, res, next) {
  const referer = req.get('Referer') || req.get('Referrer');
  const origin = req.get('Origin') || normalizeOrigin(referer);
  const allowed = allowedOrigin.split(',').map((o) => o.trim());
  const ok = allowed.some((o) => origin === o || (referer && referer.startsWith(o)));
  if (!ok) {
    return res.status(403).json({ error: 'Forbidden: invalid or missing origin/referer' });
  }
  next();
}

export function requireSession(req, res, next) {
  if (!req.session?.allowed) {
    req.session = req.session || {};
    req.session.allowed = true;
  }
  next();
}
