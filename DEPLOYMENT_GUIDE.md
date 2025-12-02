# Deployment & Setup Guide

This guide covers everything you need to deploy your portfolio site, set up a free domain, add file upload functionality, and automate deployments.

---

## 1. Find a Free Domain to Host the Site

### Option A: Free Subdomain (Recommended for Quick Start)
- **Cloudflare Pages**: Offers free subdomains like `your-site.pages.dev`
- **Vercel**: Provides free subdomains like `your-site.vercel.app`
- **Netlify**: Offers free subdomains like `your-site.netlify.app`

### Option B: Custom Domain (Free Options)
- **Freenom** (.tk, .ml, .ga, .cf domains): Free but unreliable, often flagged by browsers
- **Dot TK**: Free .tk domains (limited features)
- **Note**: For professional use, consider purchasing a domain ($10-15/year from Namecheap, Google Domains, etc.)

### Recommended Approach
1. Start with a free subdomain from your hosting provider (e.g., `your-portfolio.vercel.app`)
2. Later, purchase a custom domain and connect it to your hosting

---

## 2. Deploy the Site

### Recommended: Vercel (Easiest for React Apps)

#### Step 1: Prepare Your Project
Your project currently uses ES modules directly. For production deployment, you'll need a build step:

1. **Create `package.json`** (see `package.json.example` for reference):
   ```bash
   npm init -y
   npm install react react-dom
   npm install -D @types/react @types/react-dom typescript vite @vitejs/plugin-react
   ```

2. **Create `vite.config.ts`** (copy from `vite.config.ts.example`):
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: 'dist',
     },
   });
   ```

3. **Update `package.json` scripts**:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

4. **Update `index.html`** to use the built version:
   - Change `<script type="module" src="/index.tsx"></script>` to `<script type="module" src="/src/index.tsx"></script>` (if using src folder)
   - Or ensure Vite can find your entry point (Vite looks for `index.html` in root by default)

#### Step 2: Deploy to Vercel

**Method 1: Via GitHub (Recommended)**
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
3. Click "New Project" → Import your repository
4. Vercel will auto-detect React and configure settings
5. Click "Deploy"
6. Your site will be live at `your-project.vercel.app`

**Method 2: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

### Alternative: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Alternative: Cloudflare Pages

1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select repository
5. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

---

## 3. Add Upload Button Component

A reusable `FileUploadButton` component has been created at `components/FileUploadButton.tsx`.

### Features:
- ✅ Accepts images, videos, and audio files (JPG, TIFF, MP4, WAV, MP3, etc.)
- ✅ Large file support (default 500MB, configurable)
- ✅ File validation (size limits, type checking)
- ✅ Pixel-art styling matching your design system
- ✅ Accessible with proper ARIA labels
- ✅ Error handling with user-friendly messages
- ✅ Supports single or multiple file selection

### Quick Usage:

```tsx
import FileUploadButton from './components/FileUploadButton';

// In your component:
<FileUploadButton
  accept="image/*,video/*,audio/*"
  onFileSelect={(file) => {
    console.log('Selected file:', file);
    // Handle file upload logic here
  }}
  label="Upload Media"
/>
```

### Detailed Examples:
See `FILE_UPLOAD_EXAMPLE.md` for comprehensive usage examples including:
- Image-only uploads
- Video-only uploads
- Audio-only uploads (MP3, WAV, etc.)
- Multiple file selection
- Integration with Backblaze B2
- Integration with other storage services
- Custom styling

### Backend Integration:
To actually upload files, you'll need a backend service. **Privacy-focused options** (no AI training on your content):

- **Backblaze B2** (Recommended): 
  - Free tier: 10GB storage, 1GB download/day
  - S3-compatible API
  - Privacy-focused, does not use content for AI training
  - Pay-as-you-go after free tier ($5/TB storage, $10/TB download)
  - Supports large files (up to 10TB per file)
  
- **Wasabi**:
  - Free tier: 30-day trial, then $5.99/TB/month
  - S3-compatible API
  - Privacy-focused, no egress fees
  - Good for high-volume storage
  
- **AWS S3** (with opt-out):
  - Free tier: 5GB storage, 20,000 GET requests/month
  - Can opt-out of AI training (requires account settings)
  - Industry standard, very reliable

**Note**: Avoid services like Cloudinary that use uploaded content for AI training unless you have an enterprise account with opt-out.

---

## 4. Set Up CI/CD Pipeline

### GitHub Actions Workflow (Automatic)

Create `.github/workflows/deploy.yml` (see `.github/workflows/deploy.yml.example` for reference):

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Setting Up Secrets (for Vercel):

1. Get your Vercel tokens:
   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token
   - Get Org ID and Project ID from your project settings

2. Add secrets to GitHub:
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your organization ID
     - `VERCEL_PROJECT_ID`: Your project ID

### Alternative: Netlify CI/CD

If using Netlify, the GitHub integration handles CI/CD automatically. Just connect your repo and Netlify will:
- Build on every push to `main`
- Deploy automatically
- Provide preview deployments for PRs

### Alternative: Cloudflare Pages CI/CD

Cloudflare Pages also auto-deploys on push to `main` when connected to GitHub. No additional setup needed.

---

## Quick Start Checklist

- [ ] Set up build configuration (Vite)
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/Netlify/Cloudflare Pages
- [ ] Test the deployment
- [ ] Set up GitHub Actions workflow (if using Vercel)
- [ ] Add secrets to GitHub (if using Vercel)
- [ ] Test CI/CD by pushing to `main`
- [ ] (Optional) Purchase and connect custom domain

---

## Next Steps

1. **Custom Domain**: Once deployed, you can add a custom domain in your hosting provider's dashboard
2. **File Upload Backend**: Set up a service like Cloudinary or Firebase Storage for actual file uploads
3. **Analytics**: Add analytics (Vercel Analytics, Google Analytics, etc.)
4. **Performance**: Optimize images and add lazy loading

---

## Troubleshooting

### Build Fails
- Check Node.js version matches your local environment
- Ensure all dependencies are in `package.json`
- Check build logs in your hosting provider's dashboard

### CI/CD Not Triggering
- Verify workflow file is in `.github/workflows/`
- Check that you're pushing to `main` branch
- Verify GitHub Actions are enabled in repository settings

### File Upload Not Working
- Ensure you have a backend service configured
- Check CORS settings if uploading to external service
- Verify file size limits match your backend configuration

