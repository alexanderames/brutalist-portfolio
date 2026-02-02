import React from 'react';
import { useSecureMediaUrl } from '../hooks/useSecureMediaUrl';
import { ProtectedImage, ProtectedVideo, ProtectedAudio } from './ProtectedMedia';

type SecureImageProps = Omit<React.ComponentProps<typeof ProtectedImage>, 'src'> & {
  src: string;
  watermark?: boolean;
};

export const SecureImage: React.FC<SecureImageProps> = ({ src, watermark, ...props }) => {
  const { url, error } = useSecureMediaUrl('image', src, { watermark });
  if (error && !url) return <div className="bg-gray-200 border-2 border-brand-fg p-4 text-sm">Unable to load image.</div>;
  return <ProtectedImage {...props} src={url || src} />;
};

type SecureVideoProps = Omit<React.ComponentProps<typeof ProtectedVideo>, 'src'> & {
  src: string;
  poster?: string;
};

export const SecureVideo: React.FC<SecureVideoProps> = ({ src, poster, ...props }) => {
  const { url, error } = useSecureMediaUrl('video', src);
  if (error && !url) return <div className="bg-gray-200 border-2 border-brand-fg p-4 text-sm aspect-video flex items-center justify-center">Unable to load video.</div>;
  return <ProtectedVideo {...props} src={url || src} poster={poster} />;
};

type SecureAudioProps = Omit<React.ComponentProps<typeof ProtectedAudio>, 'src'> & {
  src: string;
};

export const SecureAudio = React.forwardRef<HTMLAudioElement, SecureAudioProps>(
  ({ src, ...props }, ref) => {
    const { url, error } = useSecureMediaUrl('audio', src);
    if (error && !url) return <div className="text-sm text-gray-600">Unable to load audio.</div>;
    return <ProtectedAudio ref={ref} {...props} src={url || src} />;
  }
);
SecureAudio.displayName = 'SecureAudio';
