import React, { useState } from 'react';
import PortalCard from './PortalCard';
import { PORTALS } from '../constants';
import type { PageView } from '../types';
import PixelButton from './PixelButton';
import TerminalTyper from './TerminalTyper';

const ContactForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo)');
    onClose();
  };

  const WindowHeader: React.FC<{ title: string; onClose: () => void }> = ({ title, onClose }) => (
    <div className="flex items-center justify-between p-2 bg-gray-300 border-b-4 border-brand-fg">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 bg-gray-400 border-2 border-brand-fg rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 border-2 border-brand-fg rounded-full"></span>
        <span className="w-4 h-4 bg-gray-400 border-2 border-brand-fg rounded-full"></span>
      </div>
      <span className="font-pixel uppercase">{title}</span>
      <button
        onClick={onClose}
        className="w-6 h-6 bg-red-500 border-2 border-brand-fg flex items-center justify-center font-bold text-white hover:bg-red-600 active:bg-red-700 transition-colors"
        aria-label="Close contact form"
      >
        X
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
      <div className="bg-brand-bg border-4 border-brand-fg shadow-hard w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <WindowHeader title="Contact Me" onClose={onClose} />
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          <h2 id="contact-form-title" className="sr-only">Contact Me</h2>
          <div>
            <label htmlFor="name" className="block font-pixel text-lg uppercase mb-1">Name</label>
            <input type="text" id="name" name="name" required className="bg-white border-2 border-brand-fg p-2 w-full font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent" />
          </div>
          <div>
            <label htmlFor="email" className="block font-pixel text-lg uppercase mb-1">Email</label>
            <input type="email" id="email" name="email" required className="bg-white border-2 border-brand-fg p-2 w-full font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent" />
          </div>
          <div>
            <label htmlFor="subject" className="block font-pixel text-lg uppercase mb-1">Subject</label>
            <input type="text" id="subject" name="subject" required className="bg-white border-2 border-brand-fg p-2 w-full font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent" />
          </div>
          <div>
            <label htmlFor="message" className="block font-pixel text-lg uppercase mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="bg-white border-2 border-brand-fg p-2 w-full font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent"></textarea>
          </div>
          <div className="flex justify-end pt-2">
            <PixelButton type="submit">Send Message</PixelButton>
          </div>
        </form>
      </div>
    </div>
  );
};


interface HomeViewProps {
  navigateTo: (view: PageView) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ navigateTo }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <TerminalTyper onHireClick={() => setShowContact(true)} />

        <div className="grid grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-4xl">
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
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </>
  );
};

export default HomeView;