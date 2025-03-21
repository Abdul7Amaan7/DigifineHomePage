// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import DownloadBtn from '../Container/DownloadBtn';

// // Card Component
// const Card = ({ title, imageSrc, hoverImageSrc }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 border border-gray-200 mx-auto my-2" // mx-auto for centering
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Section with Hover Effect */}
//       <div className="relative h-50% overflow-hidden">
//         <img
//           src={isHovered ? hoverImageSrc : imageSrc}
//           alt={title}
//           className="w-full h-full object-cover transition-opacity duration-300"
//           loading="lazy"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-4">
//         <h3 className="text-xl text-center font-semibold text-gray-800">{title}</h3>
//       </div>

//       {/* Button Section */}
//       <div className="mt-2 px-4 flex justify-center pb-4">
//         <DownloadBtn buttonText="Know More" link="/courses/digital-marketing" />
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   imageSrc: PropTypes.string.isRequired,
//   hoverImageSrc: PropTypes.string.isRequired,
// };

// // Main Card Section Component
// const BoxCardSection = () => {
//   const cardData = [
//     {
//       title: "Digital Marketing",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     },
//     {
//       title: "Data Science",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     },
//     {
//       title: "Web Development",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     },
//     {
//       title: "Cloud Computing",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     }
//   ];

//   const cardData2 = [
//     {
//       title: "Data Structure",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     },
//     {
//       title: "Data Science",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     },
//     {
//       title: "Web Development",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     },
//     {
//       title: "Cloud Computing",
//       imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
//       hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp"
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12 max-w-6xl">
//       {/* Marketing Courses Section */}
//       <h2 className="text-3xl font-semibold mb-10 text-gray-900 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-6 py-2">
//         School of Marketing Courses
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"> {/* justify-items-center for centering */}
//         {cardData.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             imageSrc={card.imageSrc}
//             hoverImageSrc={card.hoverImageSrc}
//           />
//         ))}
//       </div>

//       {/* Technical Courses Section */}
//       <h2 className="text-3xl font-semibold mb-10 mt-20 text-gray-900 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-6 py-2">
//         School of Technical Courses
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"> {/* justify-items-center for centering */}
//         {cardData2.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             imageSrc={card.imageSrc}
//             hoverImageSrc={card.hoverImageSrc}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoxCardSection;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DownloadBtn from '../Container/DownloadBtn';

// Card Component
const Card = ({ title, imageSrc, hoverImageSrc, buttonText, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 border border-gray-200 mx-auto my-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section with Hover Effect */}
      <div className="relative h-49 overflow-hidden">
        <img
          src={isHovered ? hoverImageSrc : imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl text-center font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Button Section */}
      <div className="mt-2 px-4 flex justify-center pb-4">
        <DownloadBtn buttonText={buttonText} link={link} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  hoverImageSrc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

// Main Card Section Component
const BoxCardSection = () => {
  const cardData = [
    {
      title: "Digital Marketing",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/digital-marketing"
    },
    {
      title: "Data Science",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/data-science"
    },
    {
      title: "Web Development",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/web-development"
    },
    {
      title: "Cloud Computing",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/cloud-computing"
    }
  ];

  const cardData2 = [
    {
      title: "Data Structure",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/data-structure"
    },
    {
      title: "Data Science",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/data-science"
    },
    {
      title: "Web Development",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/web-development"
    },
    {
      title: "Cloud Computing",
      imageSrc: "./images/course-image/digital-marketing-Graduate-Program-03.webp",
      hoverImageSrc: "./images/course-image/digital-marketing-Graduate-Program-01-1.webp",
      buttonText: "Know More",
      link: "/courses/cloud-computing"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Marketing Courses Section */}
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-6 py-2">
        School of Marketing Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            hoverImageSrc={card.hoverImageSrc}
            buttonText={card.buttonText}
            link={card.link}
          />
        ))}
      </div>

      {/* Technical Courses Section */}
      <h2 className="text-3xl font-semibold mb-10 mt-20 text-gray-900 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-6 py-2">
        School of Technical Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {cardData2.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            hoverImageSrc={card.hoverImageSrc}
            buttonText={card.buttonText}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxCardSection;