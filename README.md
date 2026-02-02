# port-brutal

Portfolio app with brutalist design: still life, moving images, music, about, and portfolio views. Upload media via the terminal prompt on the home page.

## Scripts

- **`npm run dev`** – Start dev server at http://localhost:5173
- **`npm run build`** – Production build to `dist/`
- **`npm run preview`** – Serve production build
- **`npm run test:e2e`** – Run Playwright E2E tests (starts dev server if needed)
- **`npm run test:e2e:ui`** – Run Playwright tests in UI mode

## E2E tests

Tests cover:

- **Navigation** – Home portal cards, Still Life, Moving Images, Music, About, Portfolio, and Back to Home
- **Upload** – Opening the upload modal from the terminal, choosing a section, and uploading a photo on Still Life
- **Enjoy** – Viewing galleries, playing music, and reading Portfolio/About content

Run all tests:

```bash
npm run test:e2e
```

If port 5173 is already in use, either stop the other process or run the dev server on another port and set `BASE_URL` when running tests. By default, Playwright starts the dev server and reuses it if one is already running on 5173.
