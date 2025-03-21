import React, { useState, useEffect, useRef } from 'react';
import Icon from '../Container/Icon';
import CourseList from '../Container/CourseList';

const FieldSelector = () => {
  const [selectedField, setSelectedField] = useState(null);
  const fieldSelectorRef = useRef(null); // Ref to track the FieldSelector component

  const fields = [
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/doctorate+active.svg',
      alt: 'Doctorate',
      text: 'Doctorate',
      courses: ['PhD in Computer Science', 'PhD in Data Science', 'PhD in Business Administration'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/AI+active.svg',
      alt: 'AI & ML',
      text: 'AI & ML',
      courses: ['Machine Learning Basics', 'Advanced AI', 'Deep Learning Specialization'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/MBA+active.svg',
      alt: 'MBA',
      text: 'MBA',
      courses: ['MBA in Finance', 'MBA in Marketing', 'MBA in Operations'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/data+science+active.svg',
      alt: 'Data Science',
      text: 'Data Science',
      courses: ['Data Science Fundamentals', 'Python for Data Science', 'Big Data Analytics'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/Marketing+active.svg',
      alt: 'Marketing',
      text: 'Marketing',
      courses: ['Digital Marketing', 'Content Marketing', 'Social Media Marketing'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/management+active.svg',
      alt: 'Management',
      text: 'Management',
      courses: ['Project Management', 'Leadership Skills', 'Strategic Management'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/technology+active.svg',
      alt: 'Software & Tech',
      text: 'Software & Tech',
      courses: ['Full Stack Development', 'Cloud Computing', 'DevOps Essentials'],
    },
    {
      src: 'https://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/header/Law+Active.svg',
      alt: 'Law',
      text: 'Law',
      courses: ['Corporate Law', 'Criminal Law', 'Intellectual Property Law'],
    },
  ];

  const handleIconClick = (field) => {
    setSelectedField(prev => prev?.text === field.text ? null : field);
  };

  // Close the course list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fieldSelectorRef.current &&
        !fieldSelectorRef.current.contains(event.target)
      ) {
        setSelectedField(null); // Close the course list
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section
      className="px-0 w-full mx-auto py-1"
      ref={fieldSelectorRef} // Attach ref to the section
    >
      {/* Icons in a Single Row */}
      <div className="flex overflow-x-auto no-scrollbar py-4 items-center justify-center">
        <div className="px-2 flex flex-nowrap gap-12">
          {fields.map((field, index) => (
            <Icon
              key={index}
              src={field.src}
              alt={field.alt}
              text={field.text}
              onClick={() => handleIconClick(field)}
            />
          ))}
        </div>
      </div>

      {/* Display Courses */}
      {selectedField && (
        <div className="mt-4 w-full max-w-4xl mx-auto">
          <CourseList courses={selectedField.courses} />
        </div>
      )}
    </section>
  );
};

export default FieldSelector;