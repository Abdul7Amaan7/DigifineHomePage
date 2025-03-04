import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

// Dynamic navigation items
const navItems = [
  { name: 'Home', slug: '/' },
  { name: 'About Us', slug: '/about' },
  { name: 'Courses', slug: '/courses', dropdown: true },
  { name: 'Contact Us', slug: '/contact' },
  { name: 'Blog', slug: '/blog' },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu visibility
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false); // State to toggle courses dropdown visibility
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false); // State for the Explore Courses dropdown

  // Example courses list
  const courses = [
    { name: 'React for Beginners', slug: '/courses/react' },
    { name: 'Advanced JavaScript', slug: '/courses/js' },
    { name: 'Full Stack Web Development', slug: '/courses/full-stack' },
  ];

  // Dropdown item rendering function
  const renderDropdown = (dropdownItems) => (
    <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-150">
      {dropdownItems.map((item) => (
        <Link to={item.slug} key={item.name} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="max-w-6xl container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">
            <Logo />
          </Link>
        </h1>

        {/* Mobile Menu Button (left side) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-haspopup="true"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <Link to={item.slug} className="text-gray-700 font-medium hover:text-blue-600">
                    {item.name}
                  </Link>
                  {renderDropdown([
                    { name: 'Mumbai', slug: '/mumbai' },
                    { name: 'Pune', slug: '/pune' },
                  ])}
                </>
              ) : (
                <Link to={item.slug} className="text-gray-700 font-medium hover:text-blue-600">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* "Explore Courses" Button - Desktop view only */}
        <button
          onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)} // Toggle the "Explore Courses" dropdown
          className="hidden md:block text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition duration-300 md:ml-4"
        >
          Explore Courses
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <Link to={item.slug} className="block px-4 py-2 text-gray-700  hover:bg-gray-100">
                      {item.name}
                    </Link>
                    <div className="pl-4">
                      <Link to="/mumbai" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Mumbai
                      </Link>
                      <Link to="/pune" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Pune
                      </Link>
                    </div>
                  </>
                ) : (
                  <Link to={item.slug} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Explore Courses Button over the header (only for mobile view) */}
      <button
        onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
        className="absolute top-4 right-16 text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md md:hidden"
      >
        Explore Courses
      </button>

      {/* Explore Courses Dropdown */}
      {isExploreDropdownOpen && (
        <div className="absolute top-16 right-0 w-64 bg-white shadow-md rounded-md z-10">
          <ul className="space-y-2 p-4">
            {courses.map((course) => (
              <li key={course.name}>
                <Link to={course.slug} className="block text-gray-700 hover:text-blue-600">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
