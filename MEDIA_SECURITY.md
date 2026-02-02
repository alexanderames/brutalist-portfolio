# Media protection

This app uses several layers to make it harder to save or redistribute media (images, video, audio). Nothing can fully prevent copying once the browser can display content (e.g. screenshots, screen recorders), but these measures deter casual saving and make direct URL reuse harder.

## Frontend (implemented)

- **Right-click disabled** on all media: no “Save image/video/audio as…” from the context menu.
- **Drag disabled**: media cannot be dragged to the desktop or another tab.
- **Selection disabled**: `user-select: none` and no-drag CSS on media so text and elements are not selectable/draggable.
- **Video**: `controlsList="nodownload"` (hides download in supported browsers), `disablePictureInPicture`, `disableRemotePlayback`.
- **Audio**: `controlsList="nodownload"` to hide download where supported.

Implemented in `src/components/ProtectedMedia.tsx` and applied in Still Life, Moving Images, and Music views.

## Backend (implemented)

A Node/Express media API (`server/`) implements the following:

### 1. No direct static URLs

- All gallery and external media are served through the API. The frontend never uses permanent public URLs; it requests a short-lived stream URL from `GET /api/media/url` and uses that for `<img>`, `<video>`, and `<audio>`.
- Local files are read from `MEDIA_ROOT` (default `public/`); external URLs are proxied so the client never sees the original URL.

### 2. Short-lived signed URLs

- `GET /api/media/url?type=image|video|audio&id=...` or `&url=...` returns a single-use path: `/api/media/stream?token=JWT`.
- The JWT is signed with `SESSION_SECRET` and expires in 15 minutes (`MEDIA_TOKEN_EXPIRY`). The frontend uses this path as the media `src`; when the token expires, the client can request a new URL (or fall back in dev).

### 3. Auth/session checks

- `cookie-session` issues a session cookie on first request from the app. Both `/api/media/url` and `/api/media/stream` require a valid session and run after `requireAppOrigin` and `requireSession` middleware.
- Only requests that come from the app (same-origin or allowed referer) and have a session can get URLs or stream media.

### 4. Referrer / CORS

- `requireAppOrigin` checks `Referer` (or `Origin`) against `ALLOWED_ORIGIN` (e.g. `http://localhost:5173`). Requests without an allowed referer get 403.
- CORS is set so only the allowed origin can call the API; credentials (cookies) are sent with `credentials: 'include'` from the frontend.

### 5. Watermarking (images)

- For images, the API supports `?watermark=1` on the URL request. The stream endpoint then serves the image with a visible text watermark (e.g. “Media Share”, configurable via `WATERMARK_TEXT`) using Sharp.
- Still Life gallery uses `SecureImage` with `watermark` enabled. Video watermarking would require server-side transcoding (e.g. ffmpeg) or a third-party service; see “Strong protection for video” below.

### 6. Strong protection for video (optional, not implemented)

- For high-value video, consider integrating a provider that offers:
  - **HLS/DASH** with tokenized segment URLs (short-lived tokens per segment).
  - **DRM** (e.g. Widevine, FairPlay) so decryption happens in the browser/device under license control.
- This is typically done via a managed service (e.g. Mux, Cloudflare Stream, AWS MediaConvert + CloudFront). The current app does not implement DRM; the above measures still apply to the existing video proxy and tokenized URLs.

## Running the stack

- **Backend**: `npm run server` (listens on `PORT`, default 3001).
- **Frontend (dev)**: `npm run dev` (Vite proxies `/api` to the backend).
- **Both**: `npm run dev:all` (runs backend + Vite).

Set `SESSION_SECRET` (or create `.session-secret`) and optionally other vars; see `.env.example`.

## Limitations

- **Screenshots and screen recorders** can still capture whatever is on screen; frontend and backend measures cannot prevent that.
- **DevTools** can still inspect network requests and see media URLs; short-lived signed URLs and auth reduce the usefulness of copying those URLs.
- **`controlsList="nodownload"`** is a hint; not all browsers honor it, and users can still use extensions or DevTools to download.

Treat these measures as **deterrence and best practice**, not as unbreakable protection.
