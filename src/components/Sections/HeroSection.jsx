// import React from 'react';
// import PropTypes from 'prop-types';
// import SearchBar from '../Container/SearchBar';
// import GoalLinks from '../Container/GoalLinks';
// import CommunityStats from '../Container/CommunityStats';
// import HeroImage from '../Container/HeroImage';

// const HeroSection = ({
//   title,
//   subtitle,
//   searchPlaceholder,
//   goals,
//   learnerCount,
//   imageSrc,
//   imageAlt,
// }) => {
//   const handleSearch = (query) => {
//     console.log('Searching for:', query);
//     // Implement search logic here
//   };

  

//   return (
//     <main className="pt-0"> {/* Add padding-top to avoid header overlap */}
//       <section className="flex flex-col xs:px-5 xs:my-10 max-w-1440 w-full mx-auto md:px-25 md:my-10">
//         <div className="relative md:self-center md:max-w-1240 xs:max-w-full">
//           <div className="flex flex-col md:items-center xs:items-start relative md:self-start">
//             <div className="flex md:flex-row items-center relative self-start mt-0 md:h-[466px] xs:flex-col-reverse xs:w-full">
//               {/* Left Side - Content */}
//               <div className="md:w-[675px] xs:w-full md:h-full flex md:items-center xs:items-start md:py-25 mt-0 md:rounded-40 bg-white xs:py-8 md:mt-0">
//                 <div className="flex flex-col gap-8 xs:w-full md:w-auto">
//                   <div className="flex flex-col gap-5 xs:w-full">
//                     <div className="flex flex-col md:gap-11 xs:gap-6 xs:w-full">
//                       {/* Heading */}
//                       <div className="flex flex-col gap-2 xs:text-center md:text-left">
//                         <h1 className="md:text-4xl xs:text-2xl font-semibold text-primary-main text-blue-500">
//                           {title}
//                         </h1>
//                         <h2 className="md:text-2xl xs:text-xl font-medium text-greyscale-main">
//                           {subtitle}
//                         </h2>
//                       </div>

//                       {/* Search Bar */}
//                       <SearchBar 
//                         placeholder="Search courses..."
//                        onSearch={(query) => console.log('Searching for:', query)}
//                       />

//                       {/* Goals Section */}
//                       <div className="flex flex-col gap-3">
//                         <div className="flex items-center gap-1">
//                           <p className="text-sm font-medium text-greyscale-main">
//                             Or select your goal
//                           </p>
//                           <i className="icon-target-arrow text-greyscale-main"></i>
//                         </div>
//                         <GoalLinks goals={goals} />
//                       </div>

//                       {/* Community Stats */}
//                       <CommunityStats learnerCount={learnerCount} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Image */}
//               <HeroImage imageSrc={imageSrc} altText={imageAlt} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// // Prop validation
// HeroSection.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   searchPlaceholder: PropTypes.string.isRequired,
//   goals: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   learnerCount: PropTypes.string.isRequired,
//   imageSrc: PropTypes.string.isRequired,
//   imageAlt: PropTypes.string.isRequired,
// };

// export default HeroSection;

import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../Container/SearchBar';
import GoalLinks from '../Container/GoalLinks';
import CommunityStats from '../Container/CommunityStats';
import HeroImage from '../Container/HeroImage';

const HeroSection = ({
  title,
  subtitle,
  searchPlaceholder,
  goals,
  learnerCount,
  imageSrc,
  imageAlt,
}) => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <main className="pt-0">
      <section className="flex flex-col xs:px-5 xs:my-4 max-w-1440 w-full mx-auto md:px-25 md:my-10">
        <div className="relative md:self-center md:max-w-1240 xs:max-w-full">
          <div className="flex flex-col md:items-center xs:items-start relative md:self-start">
            {/* Mobile Image First */}
            <div className="xs:block md:hidden w-full mb-6">
              <HeroImage imageSrc={imageSrc} altText={imageAlt} />
            </div>

            

            <div className="flex md:flex-row items-center relative self-start mt-0 md:h-[466px] xs:flex-col xs:w-full">
              {/* Left Side - Content */}
              <div className="md:w-[675px] xs:w-full md:h-full flex md:items-center xs:items-start md:py-25 xs:py-4 md:mt-0">
                <div className="flex flex-col gap-6 xs:w-full md:w-auto">
                  <div className="flex flex-col gap-4 xs:w-full">
                    <div className="flex flex-col md:gap-11 xs:gap-4 xs:w-full">
                      {/* Heading */}
                      <div className="flex flex-col gap-2 xs:text-center md:text-left">
                        <h1 className="md:text-4xl xs:text-2xl font-semibold text-primary-main text-blue-500 ">
                          {title}
                        </h1>
                        <h2 className="md:text-2xl xs:text-lg font-medium text-greyscale-main">
                          {subtitle}
                        </h2>
                      </div>

                      {/* Search Bar */}
                      <div className="xs:mt-4 md:mt-0">
                        <SearchBar 
                          placeholder={searchPlaceholder}
                          onSearch={handleSearch}
                        />
                      </div>

                      {/* Goals Section */}
                      <div className="flex flex-col gap-3 xs:mt-4">
                        <div className="flex items-center gap-1 xs:justify-center md:justify-start">
                          <p className="text-sm font-medium text-greyscale-main">
                            Or select your goal
                          </p>
                          <i className="icon-target-arrow text-greyscale-main"></i>
                        </div>
                        <GoalLinks goals={goals} />
                      </div>

                      {/* Community Stats */}
                      <div className="xs:mt-6 md:mt-0">
                        <CommunityStats learnerCount={learnerCount} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Image - Hidden on Mobile */}
              <div className="hidden md:block">
                <HeroImage imageSrc={imageSrc} altText={imageAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Prop types remain the same

export default HeroSection;