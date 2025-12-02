import React from 'react';

interface PixelButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const PixelButton: React.FC<PixelButtonProps> = ({ onClick, children, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`font-pixel text-lg bg-brand-accent-light text-brand-fg border-2 border-brand-fg px-4 py-2 shadow-hard-sm hover:bg-brand-accent active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default PixelButton;