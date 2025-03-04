import React, { useState } from 'react';
import DownloadBtn from '../Container/DownloadBtn';
import { CheckIcon } from '@heroicons/react/solid'; // Import CheckIcon from Heroicons

const CourseCard = ({ imageSrc, hoverImageSrc, courses = [] }) => {
  const [isHovered, setIsHovered] = useState(false);  // State should be inside the component

  // Hover style for the card
  const hoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // transparent white
    backgroundImage: 'linear-gradient(45deg, #000000 40%, #429AFF 100%)',
  };

  const defaultStyle = {}; // Default style can be an empty object or defined with other styles if needed

  // Text color change on hover
  const textHoverStyle = isHovered ? { color: 'white' } : {};

  return (
    <div
      className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden py-12 px-4 transition-transform transform hover:scale-105 border border-[#e4e3e7]"
      style={isHovered ? { ...defaultStyle, ...hoverStyle } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image at the top */}
      <img
        src={isHovered ? hoverImageSrc : imageSrc}
        alt="Course Image"
        className="w-[70%] rounded-[20px] h-48 object-cover mx-auto"
        loading="lazy"
      />
      <div className="text-center" style={textHoverStyle}>
        <p className="text-lg font-medium my-6">100% Placement Gurantee</p>
      </div>

      {/* Box with outline color and border-radius */}
      <div className="p-6 border-2 border-[#CFBFFD] rounded-lg mt-4">
        <ul className="space-y-3">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <li key={index} className="flex items-center text-lg font-regular text-gray-700" style={textHoverStyle}>
                {/* Tick icon */}
                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                {course}
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No courses available</li>
          )}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-8 px-6 flex justify-center">
        <DownloadBtn buttonText="Know More"/>
      </div>
    </div>
  );
};

const Courses = () => {
  const courseData = [
    {
      imageSrc: './images/course-image/digital-marketing-Graduate-Program-03.webp', // Ensure image paths are correct
      hoverImageSrc: './images/course-image/digital-marketing-Graduate-Program-01-1.webp',
      courses: ['Digital Marketing', 'SEO Optimization', 'Web Development', 'Graphic Design', 'Data Science'],
    },
    {
      imageSrc: './images/course-image/digital-marketing-Graduate-Program-03.webp', // Ensure image paths are correct
      hoverImageSrc: './images/course-image/digital-marketing-Graduate-Program-01-1.webp',
      courses: ['Machine Learning', 'AI & Deep Learning', 'Data Analytics', 'Cloud Computing', 'Blockchain'],
    },
    {
      imageSrc: './images/course-image/digital-marketing-Graduate-Program-03.webp', // Ensure image paths are correct
      hoverImageSrc: './images/course-image/digital-marketing-Graduate-Program-01-1.webp',
      courses: ['Business Management', 'Finance & Accounting', 'Project Management', 'Leadership', 'Entrepreneurship'],
    },
  ];

  return (
    <div className="bg-[#E8F3FF] flex justify-center items-center max-w-6xl mx-auto my-8 rounded-[20px] border border-[#CFBFFD]">
      {/* Grid container for course cards with centered content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 bg-custom-bg-div rounded-[20px]">
        {courseData.map((course, index) => (
          <CourseCard key={index} imageSrc={course.imageSrc} hoverImageSrc={course.hoverImageSrc} courses={course.courses} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
