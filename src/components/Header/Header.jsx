import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { name: 'Home', slug: '/' },
  { name: 'About Us', slug: '/about' },
  { name: 'Courses', slug: '/courses', dropdown: true, dropdownItems: [
    { name: 'Mumbai', slug: '/mumbai' },
    { name: 'Pune', slug: '/pune' },
  ] },
  { name: 'Contact Us', slug: '/contact' },
  { name: 'Blog', slug: '/blog' },
];

const courses = [
  { name: 'React for Beginners', slug: '/courses/react' },
  { name: 'Advanced JavaScript', slug: '/courses/js' },
  { name: 'Full Stack Web Development', slug: '/courses/full-stack' },
];

const searchOptions = [
  { name: 'React JS Course', slug: '/courses/react' },
  { name: 'Data Structures Course', slug: '/courses/data-structures' },
  { name: 'Python Programming', slug: '/courses/python' },
  { name: 'Machine Learning', slug: '/courses/ml' },
  { name: 'Web Development', slug: '/courses/web-dev' },
];

const recentSearches = [
  { name: 'React JS', slug: '/courses/react' },
  { name: 'Data Structures', slug: '/courses/data-structures' },
  { name: 'MERN Stack', slug: '/courses/mern' },
];

const Dropdown = ({ items }) => (
  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-150">
    {items.map((item) => (
      <Link to={item.slug} key={item.name} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        {item.name}
      </Link>
    ))}
  </div>
);

function Header() {
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSearchOptions, setFilteredSearchOptions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isExploreDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsExploreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExploreDropdownOpen]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = searchOptions.filter((option) =>
      option.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSearchOptions(filtered);
  };

  const handleSearchSubmit = () => {
    if (searchQuery) {
      const selectedOption = searchOptions.find((option) =>
        option.name.toLowerCase() === searchQuery.toLowerCase()
      );
      if (selectedOption) {
        window.location.href = selectedOption.slug;
      }
    }
  };

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="max-w-7xl container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo and Search Bar - Always visible */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <h1 className="text-2xl font-bold text-blue-600">
            <Link to="/">
              <Logo />
            </Link>
          </h1>

          {/* Search Bar - Full width on mobile */}
          <div className="relative flex-1 md:flex-none">
            <div className="flex items-center border border-gray-300 rounded-md w-full">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button
                onClick={handleSearchSubmit}
                className="px-4 py-2 text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Search Suggestions Dropdown */}
            {(isSearchFocused || searchQuery) && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
                <ul className="space-y-2 p-4">
                  {!searchQuery && (
                    <>
                      <p className="text-sm text-gray-500">Recent Searches</p>
                      {recentSearches.map((option) => (
                        <li key={option.name}>
                          <Link
                            to={option.slug}
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setSearchQuery('')}
                          >
                            {option.name}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                  {searchQuery && filteredSearchOptions.map((option) => (
                    <li key={option.name}>
                      <Link
                        to={option.slug}
                        className="block text-gray-700 hover:text-blue-600"
                        onClick={() => setSearchQuery('')}
                      >
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link to={item.slug} className="text-gray-700 font-medium hover:text-blue-600">
                  {item.name}
                </Link>
                {item.dropdown && <Dropdown items={item.dropdownItems} />}
              </div>
            ))}
          </nav>

          <button
            onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Explore Courses Dropdown (Desktop only) */}
      {isExploreDropdownOpen && (
        <div className="absolute top-16 right-0 w-64 bg-white shadow-md rounded-md z-10 dropdown-container">
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