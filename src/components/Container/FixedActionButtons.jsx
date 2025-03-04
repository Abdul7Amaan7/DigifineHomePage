import React from 'react';

const FixedActionButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">
      {/* Call Us Button */}
      <ActionButton
        text="Call Us"
        link="tel:+1234567890" // Replace with your phone number
        bgColor="bg-blue-500"
        hoverColor="hover:bg-blue-700"
      />

      {/* Download Brochure Button */}
      <ActionButton
        text="Download Brochure"
        link="/path/to/brochure.pdf" // Replace with the actual path to your brochure
        bgColor="bg-green-500"
        hoverColor="hover:bg-green-700"
      />
    </div>
  );
};

// Reusable ActionButton Component
const ActionButton = ({ text, link, bgColor, hoverColor }) => (
  <a
    href={link}
    download={text === 'Download Brochure' ? true : false} // Only set download attribute for the brochure button
    className={`${bgColor} ${hoverColor} text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300`}
  >
    {text}
  </a>
);

export default FixedActionButtons;
