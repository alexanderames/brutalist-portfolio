import type { PageView } from './types';

// Still-life gallery images from directories starting with an integer (public/40860_119374_268264, public/000220490001)
const dir1 = '40860_119374_268264';
const dir2 = '000220490001';
const galleryFromDir1 = Array.from({ length: 37 }, (_, i) => `/${dir1}/kodak_200_c_41_40860_119374_268264_${String(8400001 + i).padStart(12, '0')}.jpg`);
const galleryFromDir2 = Array.from({ length: 38 }, (_, i) => `/${dir2}/kodak_400_c_41_40860_119374_268265_${String(8410001 + i).padStart(12, '0')}.jpg`);
export const STILL_LIFE_IMAGES = [
  ...galleryFromDir1,
  ...galleryFromDir2,
];

// Sample videos for moving images gallery (replace with actual uploaded videos)
export const MOVING_IMAGES_VIDEOS = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Moving Image ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/video${i}/800/600`,
    videoUrl: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4`, // Placeholder
}));

// Music tracks (3, 6, 8 only; 1, 2, 4, 5, 7 removed)
const TRACK_INDICES = [3, 6, 8];
const TRACK_TITLES = ['Glass Horizon', 'Rust', 'Night Drift'];
export const MUSIC_TRACKS = TRACK_INDICES.map((songNum, i) => ({
    id: i,
    title: TRACK_TITLES[i],
    artist: 'Various Artists',
    duration: '3:45',
    audioUrl: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${songNum}.mp3`,
}));

export const ABOUT_INFO = {
    name: "Media Share",
    bio: "A platform for sharing still-life photography, moving images, and music. Upload your creative work and explore what others have shared. Built with brutalist design principles and a focus on simplicity.",
    socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/adubsqz/' },
        { name: 'GitHub', url: 'https://github.com' },
    ]
};



