import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 text-4xl font-bold cursor-pointer">
      <span className="text-purple-600">Z</span>
      <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full text-3xl font-bold">
        Y
      </div>
      <span className="text-purple-600">M</span>
      <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full text-3xl font-bold">
        O
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex flex-col md:flex-row items-center bg-white px-6 md:px-12 py-4 shadow-md">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <button
          className="md:hidden text-gray-600 text-3xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <ul
        className={`absolute md:static top-14 left-0 max-w-full md:max-w-none w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col md:flex-row md:space-x-8 text-gray-600 font-medium text-base mt-3 md:mt-0`}
      >
        {['Fleet', 'About Us', 'Blogs', 'Contact Us', 'Career'].map((item, index) => (
          <li key={index} className="relative group mb-2 md:mb-0 flex-shrink-0 min-w-max">
            <a
              href="/"
              className="py-2 px-4 relative inline-block"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 bg-purple-600 w-0 transform scale-x-0 group-hover:w-full group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
