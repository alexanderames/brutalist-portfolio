# Quick Start Guide

This is a quick reference for getting your media share site deployed and set up.

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

### 2. Deploy for free (no CLI, ~5 minutes)

**Cloudflare Pages (recommended)**  
1. Push your code to GitHub  
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Create → Pages → Connect to Git  
3. Select your repo. Build command: `npm run build`, output directory: `dist`  
4. Deploy. Your site is live at `your-project.pages.dev` 🎉  

**Netlify**  
1. Push to GitHub → [netlify.com](https://netlify.com) → Add new site → Import from Git  
2. Build command: `npm run build`, publish directory: `dist`  
3. Deploy. Site is at `your-project.netlify.app`  

Both auto-deploy on every push to `main` — no tokens or GitHub Actions needed.

### 3. Use FileUploadButton (2 minutes)

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

- **Free hosting**: Cloudflare Pages and Netlify both offer free tiers; connect your repo and they build and deploy.
- **File uploads**: Use Backblaze B2 (free tier: 10GB storage)—privacy-focused, doesn’t use content for AI training.
- **Large files**: Component supports up to 500MB by default (configurable)—good for JPG, TIFF, MP4, WAV, MP3.

## 🆘 Need Help?

Check `DEPLOYMENT_GUIDE.md` for detailed troubleshooting and alternatives.

