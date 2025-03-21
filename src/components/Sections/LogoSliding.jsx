import React from 'react';
import LogoSlider from './LogoSlider';

const logos = [
  { src: './images/logo/digi-logo.svg', alt: 'Logo 1' },
  { src: './images/logo/digi-logo.svg', alt: 'Logo 2' },
  { src: './images/logo/digi-logo.svg', alt: 'Logo 3' },
  { src: './images/logo/digi-logo.svg', alt: 'Logo 4' },
  { src: './images/logo/digi-logo.svg', alt: 'Logo 5' },
  { src: './images/logo/digi-logo.svg', alt: 'Logo 6' },
];

const animations = [
  { name: 'animate-marquee', margin: '2rem 0' },
  // { name: 'animate-marqueereverse', margin: '2rem 0' },
];

function LogoSliding() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-left justify-center py-8">
      {/* Title */}
      <h1 className="mb-4 text-3xl font-semibold my-16 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-4 py-2  max-w-md">  
        Get Placed With Top Brands
      </h1>

      {/* Logo Sliders */}
      <div className='w-full'>
        {animations.map((animation, index) => (
          <div key={index} className="my-8">
            <LogoSlider logos={logos} animation={animation.name} />
          </div>
        ))}
      </div>

      {/* Button to Book Demo Class */}
      {/* <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Book Demo Class
      </button> */}
    </div> 
  );
}

export default LogoSliding;
