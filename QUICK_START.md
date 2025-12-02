# Quick Start Guide

This is a quick reference for getting your portfolio site deployed and set up.

## 📋 What's Been Done

✅ **FileUploadButton Component** - Reusable upload button for images, videos, and audio files  
✅ **Deployment Guide** - Complete guide for hosting and deployment  
✅ **CI/CD Configuration** - GitHub Actions workflow example  
✅ **Build Configuration** - Vite setup examples  

## 🚀 Quick Deployment Steps

### 1. Set Up Build Configuration (5 minutes)

```bash
# Copy example files
cp package.json.example package.json
cp vite.config.ts.example vite.config.ts

# Install dependencies
npm install

# Test build locally
npm run build
```

### 2. Deploy to Vercel (10 minutes)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click "New Project" → Import your repository
4. Vercel auto-detects React → Click "Deploy"
5. Your site is live at `your-project.vercel.app` 🎉

### 3. Set Up CI/CD (5 minutes)

1. Copy `.github/workflows/deploy.yml.example` to `.github/workflows/deploy.yml`
2. Get Vercel tokens from Vercel Dashboard → Settings → Tokens
3. Add secrets to GitHub: Settings → Secrets → Actions
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. Push to `main` branch → Auto-deploys! 🚀

### 4. Use FileUploadButton (2 minutes)

```tsx
import FileUploadButton from './components/FileUploadButton';

<FileUploadButton
  accept="image/*,video/*,audio/*" // Supports JPG, TIFF, MP4, WAV, MP3, etc.
  onFileSelect={(file) => {
    // Handle your file upload
    console.log('File:', file.name, file.type, file.size);
  }}
  label="Upload Media"
  maxSize={500 * 1024 * 1024} // 500MB (supports large files)
/>
```

See `FILE_UPLOAD_EXAMPLE.md` for more examples including Backblaze B2 integration.

## 📚 Documentation

- **`DEPLOYMENT_GUIDE.md`** - Complete deployment guide with all options
- **`FILE_UPLOAD_EXAMPLE.md`** - FileUploadButton usage examples
- **Example files** - Configuration templates in `.example` files

## 🎯 Next Steps

1. ✅ Deploy your site
2. ✅ Set up CI/CD
3. ✅ Test FileUploadButton component
4. 🔲 (Optional) Add custom domain
5. 🔲 (Optional) Set up file upload backend (Backblaze B2 recommended - privacy-focused, no AI training)

## 💡 Tips

- **Free Domain**: Start with Vercel's free subdomain, upgrade to custom domain later
- **File Uploads**: Use Backblaze B2 (free tier: 10GB storage) - privacy-focused, doesn't use content for AI training
- **Large Files**: Component supports up to 500MB by default (configurable) - perfect for large JPG, TIFF, MP4, WAV, MP3 files
- **CI/CD**: Vercel/Netlify auto-deploy from GitHub - no GitHub Actions needed!

## 🆘 Need Help?

Check `DEPLOYMENT_GUIDE.md` for detailed troubleshooting and alternatives.

