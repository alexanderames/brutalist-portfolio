import React, { useState, useEffect } from 'react';

interface TerminalTyperProps {
  onHireClick: () => void;
}

const texts = {
  prompt: 'media-share > ',
  command: 'upload-media',
  comment: ' # click to upload',
};

const fullLine = texts.prompt + texts.command + texts.comment;

const TerminalTyper: React.FC<TerminalTyperProps> = ({ onHireClick }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullLine.length) {
        setDisplayedText(fullLine.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const renderText = () => {
    const promptPart = displayedText.substring(0, texts.prompt.length);
    const commandPart = displayedText.substring(texts.prompt.length, texts.prompt.length + texts.command.length);
    const commentPart = displayedText.substring(texts.prompt.length + texts.command.length);

    return (
      <>
        <span className="text-green-400">{promptPart}</span>
        <span className="text-white underline decoration-dotted">{commandPart}</span>
        <span className="text-gray-500">{commentPart}</span>
      </>
    );
  };

  return (
    <div
      onClick={onHireClick}
      className="font-pixel text-lg sm:text-xl md:text-2xl bg-[#2E3440] text-left p-4 sm:p-6 w-full max-w-4xl mx-auto mb-12 shadow-hard border-2 border-gray-600 cursor-pointer transition-transform hover:-translate-y-1"
      aria-label="Collaboration prompt, click to open upload modal"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') onHireClick(); }}
    >
      <code>
        <div className="whitespace-nowrap overflow-hidden">
          {renderText()}
          <span className="w-3 h-5 ml-1 bg-green-400 inline-block align-middle animate-blink"></span>
        </div>
      </code>
    </div>
  );
};

export default TerminalTyper;
