import React from 'react';

const DownloadButton = ({ 
  bgColor = 'bg-white', 
  textColor = 'text-black', 
  padding = 'py-2 px-6', 
  hoverColor = 'hover:bg-gray-300', 
  borderRadius = 'rounded-lg' 
}) => {
  return (
    <div className="h-[15vh] flex items-center justify-center bg-custom-btn my-8">
      <button 
        className={`${bgColor} ${textColor} ${padding} ${borderRadius} ${hoverColor} font-semibold transition duration-300`}
      >
        Download Brochure
      </button>
    </div>
  );
};

export default DownloadButton;
