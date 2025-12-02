# FileUploadButton Usage Examples

The `FileUploadButton` component is a reusable, accessible file upload button that matches your pixel-art design system.

## Basic Usage

```tsx
import FileUploadButton from './components/FileUploadButton';

function MyComponent() {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file.name, file.type, file.size);
    // Handle your file upload logic here
  };

  return (
    <FileUploadButton
      onFileSelect={handleFileSelect}
      label="Upload Media"
    />
  );
}
```

## Upload Images Only

```tsx
<FileUploadButton
  accept="image/*"
  onFileSelect={(file) => {
    // Handle image upload
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result;
      // Use imageUrl for preview or upload
    };
    reader.readAsDataURL(file);
  }}
  label="Upload Image"
/>
```

## Upload Videos Only

```tsx
<FileUploadButton
  accept="video/*"
  onFileSelect={(file) => {
    // Handle video upload
    console.log('Video file:', file);
  }}
  label="Upload Video"
  maxSize={500 * 1024 * 1024} // 500MB (supports large MP4 files)
/>
```

## Upload Audio Files Only

```tsx
<FileUploadButton
  accept="audio/*"
  onFileSelect={(file) => {
    // Handle audio upload (MP3, WAV, etc.)
    console.log('Audio file:', file.name, file.type);
    // Create audio preview or upload
    const audioUrl = URL.createObjectURL(file);
    const audio = new Audio(audioUrl);
    // Use audio element for preview or upload
  }}
  label="Upload Audio"
  maxSize={500 * 1024 * 1024} // 500MB (supports large WAV files)
/>
```

## Upload All Media Types (Images, Videos, Audio)

```tsx
<FileUploadButton
  accept="image/*,video/*,audio/*"
  onFileSelect={(file) => {
    // Handle any media type (JPG, TIFF, MP4, WAV, MP3, etc.)
    console.log('Media file:', file.name, file.type, file.size);
  }}
  label="Upload Media"
  maxSize={500 * 1024 * 1024} // 500MB default
/>
```

## Multiple Files

```tsx
<FileUploadButton
  accept="image/*,video/*,audio/*"
  multiple={true}
  onFileSelect={(file) => {
    // This will be called for each selected file
    console.log('File:', file.name, file.type);
  }}
  label="Upload Multiple Files"
/>
```

## Integration with Backblaze B2 (Recommended - Privacy-Focused)

Backblaze B2 is a privacy-focused storage solution that does not use your content for AI training.

```tsx
import FileUploadButton from './components/FileUploadButton';

function BackblazeB2Upload() {
  const handleFileSelect = async (file: File) => {
    // First, get an upload URL from your backend
    // (You'll need a backend endpoint to generate B2 upload URLs for security)
    
    try {
      // Step 1: Get upload authorization from your backend
      const authResponse = await fetch('/api/b2/get-upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, fileType: file.type }),
      });
      
      const { uploadUrl, authorizationToken } = await authResponse.json();
      
      // Step 2: Upload file directly to B2
      const uploadResponse = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Authorization': authorizationToken,
          'X-Bz-File-Name': encodeURIComponent(file.name),
          'X-Bz-Content-Type': file.type,
          'Content-Length': file.size.toString(),
        },
        body: file,
      });
      
      const uploadData = await uploadResponse.json();
      console.log('File uploaded:', uploadData.fileName);
      console.log('File ID:', uploadData.fileId);
      
      // Step 3: Get public URL (if bucket is public)
      // Or generate a signed URL from your backend
      const publicUrl = `https://f${uploadData.bucketId}.backblazeb2.com/file/${uploadData.bucketName}/${uploadData.fileName}`;
      console.log('Public URL:', publicUrl);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <FileUploadButton
      onFileSelect={handleFileSelect}
      label="Upload to Backblaze B2"
      maxSize={500 * 1024 * 1024} // 500MB
    />
  );
}
```

**Backend Example (Node.js/Express)** for generating B2 upload URLs:

```javascript
// Backend endpoint: /api/b2/get-upload-url
const b2 = require('backblaze-b2');

const b2Client = new b2({
  applicationKeyId: process.env.B2_KEY_ID,
  applicationKey: process.env.B2_KEY,
});

app.post('/api/b2/get-upload-url', async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    
    // Authorize with B2
    await b2Client.authorize();
    
    // Get upload URL for your bucket
    const uploadUrl = await b2Client.getUploadUrl({
      bucketId: process.env.B2_BUCKET_ID,
    });
    
    res.json({
      uploadUrl: uploadUrl.data.uploadUrl,
      authorizationToken: uploadUrl.data.authorizationToken,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Integration with Firebase Storage (Alternative)

```tsx
import FileUploadButton from './components/FileUploadButton';

function CloudinaryUpload() {
  const handleFileSelect = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // From Cloudinary dashboard
    
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );
      
      const data = await response.json();
      console.log('Uploaded URL:', data.secure_url);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <FileUploadButton
      onFileSelect={handleFileSelect}
      label="Upload to Cloudinary"
    />
  );
}
```

## Integration with Firebase Storage (Example)

```tsx
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import FileUploadButton from './components/FileUploadButton';

function FirebaseUpload() {
  const storage = getStorage(); // Initialize Firebase Storage

  const handleFileSelect = async (file: File) => {
    const storageRef = ref(storage, `uploads/${file.name}`);
    
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log('File available at:', downloadURL);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <FileUploadButton
      onFileSelect={handleFileSelect}
      label="Upload to Firebase"
    />
  );
}
```

## Custom Styling

The component uses your existing `PixelButton` component, so it automatically matches your design system. You can add additional classes:

```tsx
<FileUploadButton
  onFileSelect={handleFileSelect}
  label="Custom Upload"
  className="my-4" // Add margin or other spacing
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accept` | `string` | `"image/*,video/*,audio/*"` | File types to accept (HTML accept attribute) |
| `onFileSelect` | `(file: File) => void` | **Required** | Callback when file is selected |
| `maxSize` | `number` | `524288000` (500MB) | Maximum file size in bytes (supports large JPG, TIFF, MP4, WAV, MP3 files) |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `label` | `string` | `"Upload File"` | Button label text |
| `className` | `string` | `""` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable the button |

## Error Handling

The component automatically validates file size and type. Errors are displayed below the button:

```tsx
// Errors are automatically shown if:
// - File exceeds maxSize
// - File type doesn't match accept pattern
// The error message is displayed in a styled alert box
```

## Accessibility

The component includes:
- Proper ARIA labels
- Keyboard navigation support
- Screen reader support
- Error announcements via `aria-live`

