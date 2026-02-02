import express from 'express';
import cookieSession from 'cookie-session';
import mediaRoutes from './routes/media.js';

const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
const origins = allowedOrigin.split(',').map((o) => o.trim());

app.use(
  cookieSession({
    name: 'media_session',
    keys: [process.env.SESSION_SECRET || 'dev-session-key-change-in-production'],
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })
);

app.use(
  (req, res, next) => {
    const origin = req.get('Origin') || req.get('Referer');
    if (origin && origins.some((o) => origin.startsWith(o))) {
      res.setHeader('Access-Control-Allow-Origin', origins[0]);
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  }
);

app.use(express.json());

app.use('/api/media', mediaRoutes);

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Media API listening on http://localhost:${PORT}`);
});
