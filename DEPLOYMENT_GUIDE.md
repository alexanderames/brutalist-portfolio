# Deployment & Setup Guide

This guide covers everything you need to deploy your media share site, set up a free domain, add file upload functionality, and automate deployments.

---

## 1. Find a Free Domain to Host the Site

### Option A: Free Subdomain (Recommended for Quick Start)
- **Cloudflare Pages**: Free subdomains like `your-project.pages.dev` — no CLI or tokens required
- **Netlify**: Free subdomains like `your-project.netlify.app`

### Option B: Custom Domain (Free Options)
- **Freenom** (.tk, .ml, .ga, .cf domains): Free but unreliable, often flagged by browsers
- **Dot TK**: Free .tk domains (limited features)
- **Note**: For professional use, consider purchasing a domain ($10-15/year from Namecheap, Google Domains, etc.)

### Recommended Approach
1. Start with a free subdomain from your hosting provider (e.g., `your-project.pages.dev`)
2. Later, purchase a custom domain and connect it to your hosting

---

## 2. Deploy the Site

No CLI or extra npm packages are required. Connect your Git repo and the host builds and deploys for you.

### Recommended: Cloudflare Pages (Free, no CLI)

1. Push your code to a GitHub repository.
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your GitHub repo and authorize Cloudflare.
4. Configure the build:
   - **Framework preset**: Vite (or None)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Your site will be live at `your-project.pages.dev`.

Cloudflare Pages auto-deploys on every push to your default branch. No tokens or GitHub Actions needed.

### Alternative: Netlify

1. Push code to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign up with GitHub.
3. **Add new site** → **Import an existing project** → choose your repo.
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**. Your site will be at `your-project.netlify.app`.

Netlify also auto-deploys on push when connected to Git.

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

## 4. CI/CD (Automatic Deploys)

**Cloudflare Pages** and **Netlify** both deploy automatically when you connect your GitHub repo. Every push to your default branch triggers a build and deploy. No GitHub Actions or secrets are required.

---

## Quick Start Checklist

- [ ] Push code to GitHub
- [ ] Deploy to Cloudflare Pages or Netlify (connect repo, set build command and output dir)
- [ ] Test the deployment
- [ ] (Optional) Add a custom domain in the host’s dashboard
- [ ] (Optional) Set up a file upload backend (e.g. Backblaze B2)

---

## Next Steps

1. **Custom domain**: Add and connect a domain in your host’s dashboard.
2. **File upload backend**: Use a service like Backblaze B2 or Firebase Storage for uploads.
3. **Analytics**: Add Google Analytics or your host’s built-in analytics if needed.
4. **Performance**: Optimize images and use lazy loading where useful.

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

