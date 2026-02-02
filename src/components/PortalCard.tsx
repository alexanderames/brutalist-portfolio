import React from 'react';

interface PortalCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const PortalCard: React.FC<PortalCardProps> = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className="group bg-white border-8 border-brand-fg p-2 sm:p-4 text-center w-full h-full flex flex-col justify-center items-center gap-2 sm:gap-4 hover:bg-brand-accent-light transition-all duration-200 shadow-hard hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:-translate-y-2"
    >
      <div>{icon}</div>
      <h3 className="font-pixel text-base sm:text-2xl uppercase tracking-widest hidden sm:block">{title}</h3>
    </button>
  );
};

export default PortalCard;