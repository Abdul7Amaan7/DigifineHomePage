import React from 'react';
import PropTypes from 'prop-types';

const LogoSlider = ({ logos = [], animation }) => {
  if (!Array.isArray(logos)) {
    console.warn("The 'logos' prop should be an array.");
    return null;
  }

  return (
    <div className="overflow-hidden w-full">
      {/* The group for animation control and responsive width */}
      <div className={`flex ${animation} group w-[369%] sm:w-[369%] md:w-[200%] lg:w-[200%] transition-all duration-500`}>
        {logos.length > 0 ? (
          <>
            {/* Duplicate logos before the original logos */}
            {logos.map((logo, index) => (
              <div
                key={`copy-${index}`} // Key for duplicate logos
                className="relative p-6 group hover:animate-none" // Stop animation on hover
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 transition-all duration-300 grayscale hover:grayscale-0 hover:filter-none"
                  style={{ willChange: 'filter' }}
                />
              </div>
            ))}

            {/* Original logos */}
            {logos.map((logo, index) => (
              <div
                key={index} // Key for original logos
                className="relative p-6 group hover:animate-none" // Stop animation on hover
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 transition-all duration-300 grayscale hover:grayscale-0 hover:filter-none"
                  style={{ willChange: 'filter' }}
                />
              </div>
            ))}
          </>
        ) : (
          <div className="text-center text-gray-500">No logos available</div>
        )}
      </div>
    </div>
  );
};

// Prop validation
LogoSlider.propTypes = {
  logos: PropTypes.array,
  animation: PropTypes.string,
};

export default LogoSlider;
