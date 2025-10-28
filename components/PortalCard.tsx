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
      className="group bg-white border-2 sm:border-4 border-brand-fg p-2 sm:p-4 text-center w-full h-full flex flex-col justify-center items-center gap-2 sm:gap-4 hover:bg-brand-accent-light transition-colors duration-200"
    >
      <div>{icon}</div>
      <h3 className="font-pixel text-base sm:text-2xl uppercase tracking-widest hidden sm:block">{title}</h3>
    </button>
  );
};

export default PortalCard;