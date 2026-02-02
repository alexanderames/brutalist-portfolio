import React, { useState } from 'react';
import PortalCard from './PortalCard';
import { PORTALS } from '../constants';
import type { PageView } from '../types';
import PixelButton from './PixelButton';
import TerminalTyper from './TerminalTyper';

const UploadModal: React.FC<{ onClose: () => void; navigateTo: (view: PageView) => void }> = ({ onClose, navigateTo }) => {
  const WindowHeader: React.FC<{ title: string; onClose: () => void }> = ({ title, onClose }) => (
    <div className="flex items-center justify-between p-2 bg-gray-300 border-b-8 border-brand-fg">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 bg-gray-400 border-2 border-brand-fg rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 border-2 border-brand-fg rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 border-2 border-brand-fg rounded-full"></span>
      </div>
      <span className="font-pixel uppercase">{title}</span>
      <button
        onClick={onClose}
        className="w-6 h-6 bg-red-500 border-2 border-brand-fg flex items-center justify-center font-bold text-white hover:bg-red-600 active:bg-red-700 transition-colors"
        aria-label="Close upload modal"
      >
        X
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="upload-modal-title">
      <div className="bg-brand-bg border-8 border-brand-fg shadow-hard w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <WindowHeader title="Upload Media" onClose={onClose} />
        <div className="p-4 sm:p-6 space-y-4">
          <h2 id="upload-modal-title" className="sr-only">Upload Media</h2>
          <p className="font-pixel text-lg mb-4">Choose a section to upload:</p>
          <div className="space-y-3">
            <PixelButton onClick={() => { onClose(); navigateTo('still-life'); }}>
              Upload Photo (Still Life)
            </PixelButton>
            <PixelButton onClick={() => { onClose(); navigateTo('moving images'); }}>
              Upload Video (Moving Images)
            </PixelButton>
            <PixelButton onClick={() => { onClose(); navigateTo('music'); }}>
              Upload Audio (Music)
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
};


interface HomeViewProps {
  navigateTo: (view: PageView) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ navigateTo }) => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <TerminalTyper onHireClick={() => setShowUpload(true)} />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl">
          {PORTALS.map(portal => (
            <div key={portal.id} className="shadow-hard hover:-translate-x-1 hover:-translate-y-1 transition-transform">
              <PortalCard
                title={portal.title}
                icon={portal.icon}
                onClick={() => navigateTo(portal.id)}
              />
            </div>
          ))}
        </div>
      </div>
      {showUpload && <UploadModal onClose={() => setShowUpload(false)} navigateTo={navigateTo} />}
    </>
  );
};

export default HomeView;