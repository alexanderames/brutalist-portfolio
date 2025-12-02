import React, { useRef, useState } from 'react';
import PixelButton from './PixelButton';

interface FileUploadButtonProps {
  /**
   * Accept attribute for file input (e.g., "image/*", "video/*", "audio/*", "image/*,video/*,audio/*")
   * @default "image/*,video/*,audio/*"
   */
  accept?: string;
  
  /**
   * Callback fired when a file is selected
   */
  onFileSelect: (file: File) => void;
  
  /**
   * Maximum file size in bytes
   * @default 500MB (500 * 1024 * 1024)
   */
  maxSize?: number;
  
  /**
   * Whether to allow multiple file selection
   * @default false
   */
  multiple?: boolean;
  
  /**
   * Button label text
   * @default "Upload File"
   */
  label?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  accept = 'image/*,video/*,audio/*',
  onFileSelect,
  maxSize = 500 * 1024 * 1024, // 500MB default (supports large JPG, TIFF, MP4, WAV, MP3 files)
  multiple = false,
  label = 'Upload File',
  className = '',
  disabled = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    setError(null);

    // Process files (handle single or multiple)
    const fileArray = Array.from(files);
    const fileToProcess = multiple ? fileArray : [fileArray[0]];

    fileToProcess.forEach((file) => {
      // Validate file size
      if (file.size > maxSize) {
        const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(0);
        setError(`File "${file.name}" exceeds maximum size of ${maxSizeMB}MB`);
        return;
      }

      // Validate file type (basic check)
      const isValidType = accept.split(',').some((pattern) => {
        const trimmedPattern = pattern.trim();
        if (trimmedPattern.endsWith('/*')) {
          const typePrefix = trimmedPattern.split('/')[0];
          return file.type.startsWith(typePrefix + '/');
        }
        return file.type === trimmedPattern;
      });

      if (!isValidType) {
        setError(`File "${file.name}" is not an accepted file type`);
        return;
      }

      // File is valid, call callback
      onFileSelect(file);
    });

    // Reset input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleButtonClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
        aria-label={label}
      />
      <PixelButton
        onClick={handleButtonClick}
        disabled={disabled}
      >
        {label}
      </PixelButton>
      {error && (
        <div
          className="mt-2 p-2 bg-red-100 border-2 border-red-500 text-red-700 font-pixel text-sm"
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;

