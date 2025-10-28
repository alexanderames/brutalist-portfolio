import React from 'react';
import type { PageView } from './types';

const CameraIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        {/* Black parts */}
        <path d="M13 27H51V51H13V27Z M19 19H21V23H19V19Z M43 19H45V23H43V19Z" fill="#1A1A1A"/>
        {/* Silver/Grey parts */}
        <path d="M19 23H45V27H19V23Z M25 19H39V23H25V19Z" fill="#B3B3B3"/>
        {/* Orange part */}
        <path d="M19 23H23V25H19V23Z" fill="#F97316"/>
        {/* Lens */}
        <path d="M25 31H39V49H25V31Z" fill="#737373"/>
        <path d="M27 33H37V47H27V33Z" fill="#1A1A1A"/>
        <path d="M29 35H31V37H29V35Z" fill="white"/>
    </svg>
);

const ActingIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 60"
    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
    width="100"
    height="60"
  >
    {/* Sad Mask (right) */}
    <g transform="translate(55, 0)">
      <path
        d="M0 5
          Q20 -5 40 5
          L40 45
          Q20 55 0 45
          Z"
        fill="#222"
      />
      <path
        d="M5 10
          Q20 0 35 10
          L35 40
          Q20 50 5 40
          Z"
        fill="white"
      />
      {/* Eyes */}
      <circle cx="14" cy="22" r="2" fill="#222" />
      <circle cx="26" cy="22" r="2" fill="#222" />
      {/* Frown */}
      <path
        d="M14 34 Q20 29 26 34"
        stroke="#222"
        strokeWidth="2"
        fill="none"
      />
    </g>

    {/* Happy Mask (left) */}
    <g transform="translate(5, 0)">
      <path
        d="M0 5
          Q20 -5 40 5
          L40 45
          Q20 55 0 45
          Z"
        fill="#222"
      />
      <path
        d="M5 10
          Q20 0 35 10
          L35 40
          Q20 50 5 40
          Z"
        fill="white"
      />
      {/* Eyes */}
      <circle cx="14" cy="22" r="2" fill="#222" />
      <circle cx="26" cy="22" r="2" fill="#222" />
      {/* Smile */}
      <path
        d="M14 33 Q20 38 26 33"
        stroke="#222"
        strokeWidth="2"
        fill="none"
      />
    </g>
  </svg>
);

const TechNerdIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        <path d="M21 38C27.6274 38 33 32.6274 33 26C33 19.3726 27.6274 14 21 14C14.3726 14 9 19.3726 9 26C9 32.6274 14.3726 38 21 38Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M43 38C49.6274 38 55 32.6274 55 26C55 19.3726 49.6274 14 43 14C36.3726 14 31 19.3726 31 26C31 32.6274 36.3726 38 43 38Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M33 26H31" stroke="currentColor" strokeWidth="4"/>
        <path d="M4 26H9" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M55 26H60" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

const AboutIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto">
        <path d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M12 56C12 47.1634 19.1634 40 28 40H36C44.8366 40 52 47.1634 52 56" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
);

export const PORTALS = [
    { id: 'about' as PageView, title: 'About Me', icon: <AboutIcon /> },
    { id: 'photography' as PageView, title: 'Photography', icon: <CameraIcon /> },
    { id: 'acting' as PageView, title: 'Acting', icon: <ActingIcon /> },
    { id: 'tech' as PageView, title: 'Tech Nerd', icon: <TechNerdIcon /> },
];

export const PHOTOGRAPHY_IMAGES = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/${String.fromCharCode(97 + i)}/${i % 2 === 0 ? 800 : 600}/${i % 2 === 0 ? 600 : 800}`);

export const ACTING_STILLS = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/${String.fromCharCode(107 + i)}/800/600`);

export const TECH_NERD_PROFILE = {
    name: "Alexander Ames",
    contact: "alexanderthomasames@gmail.com",
    stats: "Staff Software Engineer | Data Scientist | AI/ML Enthusiast",
    projects: [
        { name: "Project Chimera", role: "Lead Developer", description: "A generative art installation using real-time weather data." },
        { name: "DataVis Suite", role: "Backend Engineer", description: "An open-source library for interactive data visualizations in React." },
        { name: "Portfolio OS", role: "Creator", description: "This very website, built with brutalist design principles." },
    ],
    skills: [
        "Languages: TypeScript, Python, Go, SQL",
        "Frameworks: React, Next.js, FastAPI, PyTorch",
        "Tools: Docker, Kubernetes, GCP, Git, Figma",
    ],
    experience: [
        "Senior Software Engineer, TechCorp (2020-Present)",
        "Data Scientist, Innovate Inc. (2018-2020)",
    ],
    interests: "Vintage computing, mechanical keyboards, generative AI, brutalist architecture"
};

export const ABOUT_ME = {
    name: "Alex",
    bio: "I'm a multifaceted creative with a passion for storytelling, whether it's through the lens of a camera, on stage, or in the director's chair. I believe in the power of art to connect us, challenge our perspectives, and reveal the beauty in the everyday. This space is a collection of my adventures in visual and performance art. By day, I'm a staff software engineer and data scientist at a molecular biology tech company, making strides in early cancer detection and treatment. Thanks for stopping by.",
    socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/adubsqz/' },
        { name: 'Actors Access', url: 'https://resumes.actorsaccess.com/2093257-5848115' },
        { name: 'Letterboxd', url: 'https://letterboxd.com/whichletter/' },
    ]
};
// FIX: The base64 string for HEADSHOT_1 was malformed, containing extraneous characters at the end. This caused a syntax error. The invalid portion has been removed.
export const HEADSHOT_1 = 'https://breakdownservices.s3.amazonaws.com/media/photos/20244/2093257/print/39E46CF8-3D9D-4A3B-BB28320853E2B5B2.jpg?cache=';
