import React from 'react';

const Icon = ({ src, alt, text, onClick }) => {
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-main hover:grayscale-0 text-greyscale-1 grayscale"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Select ${text}`}
    >
      <img src={src} alt={alt} className="w-6 h-6 transition-all duration-300 ease-in-out" />
      <span className="text-sm font-medium text-center capitalize whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Icon;