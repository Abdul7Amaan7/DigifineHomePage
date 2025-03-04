import React from 'react';
import DownloadBtn from '../Container/DownloadBtn';

function OurVision() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Flex container for video and content */}
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 mb-8">
        
        {/* Image on the left */}
        <div className="lg:w-1/2 mb-4 lg:mb-0 relative">
          {/* Div behind image */}
          <div className="bg-custom-bg-div rounded-lg absolute inset-0 -z-10 w-full h-full"></div>
          
          {/* Image with hover translation effect */}
          <img
            src="./images/banner-image/Siddharth-Mehta-CEO.webp" // Placeholder image URL
            alt="Our Vision"
            className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:-translate-x-12 hover:-translate-y-12"
          />
        </div>
        
        {/* Title and content on the right */}
        <div className="p-6 rounded-lg flex flex-col justify-between h-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-custom-btn mb-4 pb-4 border rounded-2xl p-4 inline-block w-full sm:w-[27%]">
            Our Vision
          </h2>
          
          {/* Bigger title below */}
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Bigger Title Below the Video
          </h3>
          
          {/* Paragraph below the title */}
          <p className="text-lg text-gray-700 mb-6">
            This is a sample paragraph that describes some additional content. You can write here
            a few lines explaining the context of the title and video above. Feel free to add more
            lines if needed.
          </p>
          
          {/* Download brochure button */}
          <div className="text-left mt-4">
            <DownloadBtn />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default OurVision;
