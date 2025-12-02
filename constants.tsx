import React from 'react';
import type { PageView } from './types';

const StillLifeIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        {/* Camera/Photo icon for still-life photography */}
        <path d="M13 27H51V51H13V27Z M19 19H21V23H19V19Z M43 19H45V23H43V19Z" fill="#1A1A1A"/>
        <path d="M19 23H45V27H19V23Z M25 19H39V23H25V19Z" fill="#B3B3B3"/>
        <path d="M19 23H23V25H19V23Z" fill="#F97316"/>
        <path d="M25 31H39V49H25V31Z" fill="#737373"/>
        <path d="M27 33H37V47H27V33Z" fill="#1A1A1A"/>
        <path d="M29 35H31V37H29V35Z" fill="white"/>
    </svg>
);

const MovingImagesIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
    {/* Video camera icon */}
    <rect x="12" y="18" width="40" height="28" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M12 18L12 46L52 46L52 18Z" fill="#1A1A1A"/>
    <circle cx="32" cy="32" r="8" fill="#737373"/>
    <path d="M28 32L32 28L36 32L32 36Z" fill="white"/>
    <rect x="16" y="14" width="8" height="4" fill="#1A1A1A"/>
    <rect x="40" y="14" width="8" height="4" fill="#1A1A1A"/>
    {/* Play button overlay */}
    <path d="M26 30L26 34L30 32Z" fill="#F97316"/>
  </svg>
);

const MusicIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        {/* Musical note icon */}
        <path d="M20 20L20 48C20 52 18 54 14 54C10 54 8 52 8 48C8 44 10 42 14 42C15.5 42 16.5 42.5 17 43L17 12L28 8L28 40C28 44 26 46 22 46C18 46 16 44 16 40C16 36 18 34 22 34C23.5 34 24.5 34.5 25 35L25 4L20 5L20 20Z" fill="#1A1A1A"/>
        <circle cx="14" cy="48" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="22" cy="40" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
        {/* Sound waves */}
        <path d="M36 32L40 28M40 28L44 32M44 32L40 36M40 36L36 32" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M48 24L50 22M50 22L52 24M52 24L50 26M50 26L48 24" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M48 40L50 38M50 38L52 40M52 40L50 42M50 42L48 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
);

const AboutIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        <path d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M12 56C12 47.1634 19.1634 40 28 40H36C44.8366 40 52 47.1634 52 56" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
);

export const PORTALS = [
    { id: 'still-life' as PageView, title: 'Still Life', icon: <StillLifeIcon /> },
    { id: 'moving images' as PageView, title: 'Moving Images', icon: <MovingImagesIcon /> },
    { id: 'music' as PageView, title: 'Music', icon: <MusicIcon /> },
    { id: 'about' as PageView, title: 'About', icon: <AboutIcon /> },
];

// Sample images for still-life gallery (replace with actual uploaded images)
export const STILL_LIFE_IMAGES = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/still${i}/${i % 2 === 0 ? 800 : 600}/${i % 2 === 0 ? 600 : 800}`);

// Sample videos for moving images gallery (replace with actual uploaded videos)
export const MOVING_IMAGES_VIDEOS = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Moving Image ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/video${i}/800/600`,
    videoUrl: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4`, // Placeholder
}));

// Sample music tracks (replace with actual uploaded audio files)
export const MUSIC_TRACKS = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Track ${i + 1}`,
    artist: 'Various Artists',
    duration: '3:45',
    audioUrl: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i + 1}.mp3`, // Placeholder
}));

export const ABOUT_INFO = {
    name: "Media Share",
    bio: "A platform for sharing still-life photography, moving images, and music. Upload your creative work and explore what others have shared. Built with brutalist design principles and a focus on simplicity.",
    socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/adubsqz/' },
        { name: 'GitHub', url: 'https://github.com' },
    ]
};
