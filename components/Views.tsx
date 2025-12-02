import React, { useState } from 'react';
import { STILL_LIFE_IMAGES, MOVING_IMAGES_VIDEOS, MUSIC_TRACKS, ABOUT_INFO } from '../constants';
import FileUploadButton from './FileUploadButton';

export const StillLifeView: React.FC = () => {
  const [images, setImages] = useState(STILL_LIFE_IMAGES);

  const handleImageUpload = (file: File) => {
    // Create a local preview URL
    const imageUrl = URL.createObjectURL(file);
    // In production, upload to Backblaze B2 and get the URL
    setImages([imageUrl, ...images]);
    console.log('Image uploaded:', file.name);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="font-pixel text-4xl uppercase">Still Life</h2>
        <FileUploadButton
          accept="image/*"
          onFileSelect={handleImageUpload}
          label="Upload Photo"
          maxSize={500 * 1024 * 1024}
        />
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Still Life ${index + 1}`}
            className="mb-4 w-full h-auto block border-4 border-brand-fg shadow-hard cursor-pointer hover:opacity-90 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};

export const MovingImagesView: React.FC = () => {
  const [videos, setVideos] = useState(MOVING_IMAGES_VIDEOS);

  const handleVideoUpload = (file: File) => {
    // Create a local preview URL
    const videoUrl = URL.createObjectURL(file);
    // In production, upload to Backblaze B2 and get the URL
    const newVideo = {
      id: videos.length,
      title: file.name.replace(/\.[^/.]+$/, ''),
      thumbnail: videoUrl,
      videoUrl: videoUrl,
    };
    setVideos([newVideo, ...videos]);
    console.log('Video uploaded:', file.name);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="font-pixel text-4xl uppercase">Moving Images</h2>
        <FileUploadButton
          accept="video/*"
          onFileSelect={handleVideoUpload}
          label="Upload Video"
          maxSize={500 * 1024 * 1024}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="border-4 border-brand-fg shadow-hard bg-white">
            <div className="aspect-video bg-black relative">
              <video
                src={video.videoUrl}
                poster={video.thumbnail}
                controls
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="font-pixel text-xl uppercase">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export const MusicView: React.FC = () => {
  const [tracks, setTracks] = useState(MUSIC_TRACKS);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handleAudioUpload = (file: File) => {
    // Create a local preview URL
    const audioUrl = URL.createObjectURL(file);
    // In production, upload to Backblaze B2 and get the URL
    const newTrack = {
      id: tracks.length,
      title: file.name.replace(/\.[^/.]+$/, ''),
      artist: 'You',
      duration: '0:00', // Would calculate from file metadata
      audioUrl: audioUrl,
    };
    setTracks([newTrack, ...tracks]);
    console.log('Audio uploaded:', file.name);
  };

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="font-pixel text-4xl uppercase">Music</h2>
        <FileUploadButton
          accept="audio/*"
          onFileSelect={handleAudioUpload}
          label="Upload Audio"
          maxSize={500 * 1024 * 1024}
        />
      </div>
      <div className="space-y-4">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="border-4 border-brand-fg shadow-hard bg-white p-4 sm:p-6 hover:bg-brand-accent-light transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => handlePlay(track.id)}
                className="font-pixel text-2xl bg-brand-accent-light border-2 border-brand-fg w-12 h-12 flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label={playingId === track.id ? 'Pause' : 'Play'}
              >
                {playingId === track.id ? '⏸' : '▶'}
              </button>
              <div className="flex-1">
                <h3 className="font-pixel text-xl uppercase">{track.title}</h3>
                <p className="font-sans text-sm text-gray-600">{track.artist}</p>
              </div>
              <div className="font-pixel text-lg">{track.duration}</div>
            </div>
            {playingId === track.id && (
              <div className="mt-4">
                <audio controls src={track.audioUrl} className="w-full">
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-pixel text-4xl uppercase mb-6">{ABOUT_INFO.name}</h2>
      <p className="font-sans text-lg leading-relaxed mb-8">{ABOUT_INFO.bio}</p>

      <div className="border-4 border-brand-fg shadow-hard bg-white p-6 mb-8">
        <h3 className="font-pixel text-2xl uppercase mb-4">Features</h3>
        <ul className="font-sans text-left space-y-2">
          <li>• Upload and share still-life photography (JPG, TIFF)</li>
          <li>• Share moving images and videos (MP4)</li>
          <li>• Upload and stream music (MP3, WAV)</li>
          <li>• Large file support (up to 500MB)</li>
          <li>• Privacy-focused storage (no AI training on your content)</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <h3 className="font-pixel text-2xl">Connect:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {ABOUT_INFO.socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-lg bg-brand-accent-light text-brand-fg border-2 border-brand-fg px-4 py-2 shadow-hard-sm hover:bg-brand-accent active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};