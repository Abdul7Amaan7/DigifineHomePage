import React, { useEffect, useState } from 'react';
import CareerForm from './CareerForm'; // Assuming CareerForm is correct

const MyComponent = () => {
  const [isVisible1, setIsVisible1] = useState(false); // First container visibility
  const [isVisible2, setIsVisible2] = useState(false); // Second container visibility
  const [isVisible3, setIsVisible3] = useState(false); // Third container visibility

  // Array of image sources and labels for the first container
  const imageData = [
    { src: './images/Icons/award.webp', label: '10,000+ Students Trained' },
    { src: './images/Icons/bag.png', label: '12 LPA Highest Package' },
    { src: './images/Icons/growth.webp', label: '4.9 LPA Average Package' },
    { src: './images/Icons/job.png', label: '96% Placement Rate' },
  ];

  // Array of image sources for the second container (logos of brands)
  const imageDataLogo = [
    { src: './images/logo/GOZOOP.webp' },
    { src: './images/logo/GROUPM.webp' },
    { src: './images/logo/Hotstar.webp' },
    { src: './images/logo/Jio-Studios.webp' },
    { src: './images/logo/Publicis-Groupe.webp' },
    { src: './images/logo/Wavemaker.webp' },
  ];

  // Function to handle the dynamic text and style
  const renderLabel = (label, index) => {
    const words = label.split(' ');

    // For first and last containers, only make the first word bold and text-xl
    if (index === 0 || index === 3) {
      return words.map((word, index) => (
        <span
          key={index}
          className={index === 0 ? 'font-bold text-xl' : ''}
        >
          {word}{" "}
        </span>
      ));
    }

    // For second and third containers, make the first two words bold and text-xl
    return words.map((word, index) => (
      <span
        key={index}
        className={index < 2 ? 'font-bold text-xl' : ''}
      >
        {word}{" "}
      </span>
    ));
  };

  // Hook to detect when the containers come into view
  useEffect(() => {
    const handleScroll = () => {
      // Handle visibility for all three containers
      const container1 = document.getElementById('container1');
      const container2 = document.getElementById('container2');
      const container3 = document.getElementById('container3');
      
      // Check visibility for container1
      if (container1) {
        const rect1 = container1.getBoundingClientRect();
        if (rect1.top <= window.innerHeight && rect1.bottom >= 0) {
          setIsVisible1(true);
        }
      }

      // Check visibility for container2
      if (container2) {
        const rect2 = container2.getBoundingClientRect();
        if (rect2.top <= window.innerHeight && rect2.bottom >= 0) {
          setIsVisible2(true);
        }
      }

      // Check visibility for container3
      if (container3) {
        const rect3 = container3.getBoundingClientRect();
        if (rect3.top <= window.innerHeight && rect3.bottom >= 0) {
          setIsVisible3(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if the containers are visible on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-left p-4">
      {/* Title */}
      <h1 className="text-3xl font-semibold my-6 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-4 py-2 max-w-[14rem]">
        Why Digifine
      </h1>

      {/* Main Container: Flex for Equal Height */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 w-full">

        {/* Container 1: Image and Text Section */}
        <div
          id="container1"
          className={`flex-1 grid sm:grid-cols-2 lg:grid-cols-2 gap-4 p-8 border rounded-xl border-gray-300 bg-custom-bg-div transition-all duration-500 ease-in-out transform ${
            isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <p className="col-span-2 sm:col-span-2 lg:col-span-2 text-xl font-semibold text-gray-800 text-center">
            100% Placement Assurance Course Completion
          </p>

          {/* Dynamically render all four images */}
          {imageData.map((image, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full p-4 rounded-lg">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={image.src}  // Image source from the array
                  alt={`Icon ${index + 1}`}
                  className="w-16 h-16 object-contain transform transition-transform duration-300 ease-in-out hover:scale-110" // Scaling on hover
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-center mt-2">
                {/* Render the label dynamically */}
                {renderLabel(image.label, index)}
              </p>
            </div>
          ))}
        </div>

        {/* Container 2: Image and Text Section */}
        <div
          id="container2"
          className={`flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 border rounded-xl border-gray-300 transition-all duration-500 ease-in-out transform ${
            isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <p className="col-span-2 sm:col-span-2 lg:col-span-3 text-xl font-semibold text-gray-800 text-center">
            Our alumni work with brands like
          </p>

          {/* Dynamically render all logos */}
          {imageDataLogo.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full rounded-lg relative"
            >
              <div className="flex items-center justify-center w-full h-full mb-4">
                <img
                  src={logo.src}  // Logo source from the array
                  alt={`Logo ${index + 1}`}
                  className="w-24 h-24 object-contain transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Career Form Container */}
        <div
          id="container3"
          className={`flex-1 w-full sm:w-[35%] h-full mt-0 transition-all duration-500 ease-in-out transform ${
            isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <CareerForm style="h-full sm:h-[31rem]" />
        </div>

      </div>
    </div>
  );
};

export default MyComponent;
