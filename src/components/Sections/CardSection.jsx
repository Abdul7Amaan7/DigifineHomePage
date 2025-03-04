import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Card Component
const Card = React.memo(({ imageSrc, title, description }) => {
  // Manage hover state
  const [isHovered, setIsHovered] = useState(false);

  // Hover style for the card
  const hoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // transparent white
    backgroundImage: 'linear-gradient(45deg, #000000 40%, #429AFF 100%)',
  };

  // Text color change on hover
  const textHoverStyle = isHovered ? { color: 'white' } : {};

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl p-4 flex flex-col items-center"
      style={isHovered ? hoverStyle : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }} // Initial state for fade and scale effect
      animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal
      transition={{ duration: 0.1, delay: 0 }} // Smooth transition for individual cards
      whileHover={{ scale: 1.1 }} // Scale the card when hovered
    >
      {/* Native Lazy Load Image */}
      <img
        src={imageSrc}
        alt={title}
        loading="lazy" // Native lazy loading for images
        className="w-[35%] object-cover rounded-t-lg mb-4"
      />
      <div className="p-4 flex flex-col justify-center items-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 text-center" style={textHoverStyle}>{title}</h3>
        <p className="text-gray-700 text-center" style={textHoverStyle}>{description}</p>
      </div>
    </motion.div>
  );
});

// CardSection Component
const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const cardData = [
    {
      imageSrc: "./images/Icons/mentorship.webp",
      title: "1. Get Trained",
      description: "Acquire key digital marketing skills from highly experienced trainers through a practical training approach!",
    },
    {
      imageSrc: "./images/Icons/goal.webp",
      title: "2. Assessments",
      description: "Solve real-world case studies, get global industry exposure and work on challenging projects!",
    },
    {
      imageSrc: "./images/Icons/job-interview.webp",
      title: "3. Mock Interview",
      description: "Become job-ready with the right confidence, knowledge and etiquette with our panel of interviewers!",
    },
    {
      imageSrc: "./images/Icons/check-list.webp ",
      title: "4. Get Placed",
      description: "Secure your career with 100% placement guarantee at top digital marketing companies in India and abroad!",
    },
  ];

  // Check if the section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('card-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on page load as well

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="px-4 py-8 max-w-6xl mx-auto"
      id="card-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }} // Fade in the entire section
    >
      {/* Main Title */}
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">
        Explore Our Latest Cards
      </h2>

      {/* Card Grid with improved background and padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-custom-bg-div p-6 rounded-lg">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CardSection;
