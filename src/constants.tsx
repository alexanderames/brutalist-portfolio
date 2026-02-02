import React from 'react';
import type { PageView } from './types';

const StillLifeIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        {/* Recognizable Camera Body */}
        <rect x="14" y="20" width="36" height="28" stroke="currentColor" strokeWidth="4" fill="white"/>
        <rect x="18" y="24" width="28" height="20" fill="#1A1A1A"/>
        {/* Camera Top/Viewfinder */}
        <rect x="22" y="12" width="20" height="8" stroke="currentColor" strokeWidth="4" fill="white"/>
        <rect x="24" y="14" width="16" height="4" fill="#1A1A1A"/>
        {/* Lens */}
        <circle cx="32" cy="34" r="8" stroke="currentColor" strokeWidth="4" fill="white"/>
        <circle cx="32" cy="34" r="5" fill="#1A1A1A"/>
        <circle cx="32" cy="34" r="3" fill="#737373"/>
        {/* Flash */}
        <rect x="40" y="22" width="6" height="4" fill="#F97316"/>
        {/* Shutter Button */}
        <circle cx="32" cy="16" r="2" fill="#1A1A1A"/>
    </svg>
);

const MovingImagesIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
    {/* Clapperboard - Main Board */}
    <rect x="10" y="22" width="44" height="28" stroke="currentColor" strokeWidth="4" fill="white"/>
    <rect x="14" y="26" width="36" height="20" fill="#1A1A1A"/>
    {/* Clapper Arm - Top Section */}
    <rect x="12" y="10" width="40" height="12" stroke="currentColor" strokeWidth="4" fill="#1A1A1A"/>
    {/* Diagonal Stripe Pattern */}
    <rect x="18" y="28" width="4" height="16" fill="white"/>
    <rect x="26" y="28" width="4" height="16" fill="white"/>
    <rect x="34" y="28" width="4" height="16" fill="white"/>
    <rect x="42" y="28" width="4" height="16" fill="white"/>
    {/* ACTION Text - More Prominent */}
    <text x="32" y="38" textAnchor="middle" fill="#F97316" fontSize="10" fontWeight="bold" fontFamily="monospace">ACTION</text>
    {/* Scene/Shot Number */}
    <text x="32" y="44" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">SCENE 1</text>
  </svg>
);

const MusicIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        {/* Clear Musical Note - Staff */}
        <line x1="12" y1="20" x2="52" y2="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="36" x2="52" y2="36" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="44" x2="52" y2="44" stroke="currentColor" strokeWidth="2"/>
        {/* Musical Note - More Recognizable */}
        <path d="M24 16L24 40C24 44 22 46 18 46C14 46 12 44 12 40C12 36 14 34 18 34C19.5 34 20.5 34.5 21 35L21 8L32 4L32 36C32 40 30 42 26 42C22 42 20 40 20 36C20 32 22 30 26 30C27.5 30 28.5 30.5 29 31L29 0L24 1L24 16Z" fill="#1A1A1A" stroke="currentColor" strokeWidth="2"/>
        {/* Note Heads - More Visible */}
        <circle cx="18" cy="40" r="4" fill="#1A1A1A" stroke="currentColor" strokeWidth="2"/>
        <circle cx="26" cy="36" r="4" fill="#1A1A1A" stroke="currentColor" strokeWidth="2"/>
        {/* Sound Waves - More Prominent */}
        <path d="M40 24L44 20M44 20L48 24M48 24L44 28M44 28L40 24" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M40 32L44 28M44 28L48 32M48 32L44 36M44 36L40 32" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M40 40L44 36M44 36L48 40M48 40L44 44M44 44L40 40" stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
);

const AboutIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        <path d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M12 56C12 47.1634 19.1634 40 28 40H36C44.8366 40 52 47.1634 52 56" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
);

const PortfolioIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        {/* Briefcase/Portfolio Icon */}
        <rect x="8" y="20" width="48" height="32" stroke="currentColor" strokeWidth="4" fill="white"/>
        <rect x="12" y="24" width="40" height="24" fill="#1A1A1A"/>
        {/* Handle */}
        <rect x="24" y="12" width="16" height="8" stroke="currentColor" strokeWidth="4" fill="white"/>
        {/* Briefcase Details */}
        <rect x="16" y="28" width="12" height="16" fill="white"/>
        <rect x="36" y="28" width="12" height="16" fill="white"/>
        {/* Lock */}
        <rect x="28" y="32" width="8" height="6" fill="#F97316"/>
        <circle cx="32" cy="35" r="1" fill="#1A1A1A"/>
    </svg>
);

export const PORTALS = [
    { id: 'portfolio' as PageView, title: 'Portfolio', icon: <PortfolioIcon /> },
    { id: 'still-life' as PageView, title: 'Still Life', icon: <StillLifeIcon /> },
    { id: 'moving images' as PageView, title: 'Moving Images', icon: <MovingImagesIcon /> },
    { id: 'music' as PageView, title: 'Music', icon: <MusicIcon /> },
    { id: 'about' as PageView, title: 'About', icon: <AboutIcon /> },
];
