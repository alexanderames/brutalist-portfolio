import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['VT323', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-bg': '#EAE7E0',
        'brand-fg': '#1A1A1A',
        'brand-accent': '#D97706',
        'brand-accent-light': '#F59E0B',
      },
      boxShadow: {
        hard: '4px 4px 0px 0px rgba(0,0,0,1)',
        'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
} satisfies Config;






