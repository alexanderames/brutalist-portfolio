import React from 'react';

const PROTECT_CLASS = 'media-protect';

const preventContextMenu = (e: React.MouseEvent) => e.preventDefault();
const preventDragStart = (e: React.DragEvent) => e.preventDefault();
const preventCopy = (e: React.ClipboardEvent) => e.preventDefault();

type ProtectedImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ProtectedImage: React.FC<ProtectedImageProps> = ({ className = '', ...props }) => (
  <img
    {...props}
    className={`${PROTECT_CLASS} ${className}`.trim()}
    onContextMenu={preventContextMenu}
    onDragStart={preventDragStart}
    onCopy={preventCopy}
    draggable={false}
  />
);

type ProtectedVideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

export const ProtectedVideo: React.FC<ProtectedVideoProps> = ({ className = '', ...props }) => (
  <video
    {...props}
    className={`${PROTECT_CLASS} ${className}`.trim()}
    onContextMenu={preventContextMenu}
    onDragStart={preventDragStart}
    onCopy={preventCopy}
    controlsList="nodownload"
    disablePictureInPicture
    disableRemotePlayback
  />
);

type ProtectedAudioProps = React.AudioHTMLAttributes<HTMLAudioElement>;

export const ProtectedAudio = React.forwardRef<HTMLAudioElement, ProtectedAudioProps>(
  ({ className = '', ...props }, ref) => (
    <audio
      ref={ref}
      {...props}
      className={`${PROTECT_CLASS} ${className}`.trim()}
      onContextMenu={preventContextMenu}
      onDragStart={preventDragStart}
      onCopy={preventCopy}
      controlsList="nodownload"
    />
  )
);
ProtectedAudio.displayName = 'ProtectedAudio';
