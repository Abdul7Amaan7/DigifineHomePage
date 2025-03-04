import React, { useEffect, useState } from 'react';

const YtVideo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('yt-video');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      id="yt-video"
      className={`flex flex-col items-center justify-center p-6 max-w-6xl mx-auto transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Title */}
      <h1 className="mb-4 text-3xl font-semibold my-16 text-center">
        Learn How to Code with React
      </h1>

      {/* Paragraph */}
      <p className="text-center text-lg mb-8">
        Watch these tutorials to get a deeper understanding of React, its components, and how to build powerful apps.
      </p>

      {/* YouTube Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <iframe
          width="356"
          height="634"
          src="https://www.youtube.com/embed/1wbYTzXbteU"
          title="Digifine Digital Marketing Course Student Review - Bhavisha Jain"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="356"
          height="634"
          src="https://www.youtube.com/embed/3gh3OD3fAs8"
          title="Digifine Digital Marketing Course Student Review - Raghu Vyas"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="356"
          height="634"
          src="https://www.youtube.com/embed/PAYf12IeUbg"
          title="Digifine Digital Marketing Course Student Review - Charmi Shah"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button to Book Demo Class */}
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Book Demo Class
      </button>
    </div>
  );
};

export default YtVideo;
