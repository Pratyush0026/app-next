import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import img1 from '../assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md font-['Martian_Mono'] text-[#0F1934] tracking-[1.5px] text-[12px] font-medium leading-auto mt-1 ml-4 mr-4  ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={img1} alt="AppVersal" className="w-48 h-16" />
        </a>

        <div className="hidden sm:flex space-x-8 lg:space-x-20 items-center font-semibold">
          <a
            href="/about"
            className={`flex items-center ${activeLink === '/about' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={() => handleLinkClick('/about')}
          >
            {activeLink === '/about' && <span className="mr-2 text-red-600">•</span>}
            ABOUT US
          </a>
          <a
            href="/work"
            className={`flex items-center ${activeLink === '/work' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={() => handleLinkClick('/work')}
          >
            {activeLink === '/work' && <span className="mr-2 text-red-600">•</span>}
            OUR WORK
          </a>
          <a
            href="/companies"
            className={`flex items-center ${activeLink === '/companies' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={() => handleLinkClick('/companies')}
          >
            {activeLink === '/companies' && <span className="mr-2 text-red-600">•</span>}
            OUR COMPANIES
          </a>
          <a
            href="/contact"
            className={`flex items-center ${activeLink === '/contact' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={() => handleLinkClick('/contact')}
          >
            {activeLink === '/contact' && <span className="mr-2 text-red-600">•</span>}
            CONTACT US
          </a>
        </div>

        <div className="sm:hidden">
          <button
            type="button"
            className="bg-gray-100 p-2 rounded-md text-[#0F1934] hover:text-red-600"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX className="h-6 w-6" aria-hidden="true" /> : <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white shadow-md py-4">
          <div className="px-4 space-y-4 flex flex-col items-start">
            <a
              href="/about"
              className={`flex items-center ${activeLink === '/about' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={() => handleLinkClick('/about')}
            >
              {activeLink === '/about' && <span className="mr-2 text-red-600">•</span>}
              ABOUT US
            </a>
            <a
              href="/work"
              className={`flex items-center ${activeLink === '/work' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={() => handleLinkClick('/work')}
            >
              {activeLink === '/work' && <span className="mr-2 text-red-600">•</span>}
              OUR WORK
            </a>
            <a
              href="/companies"
              className={`flex items-center ${activeLink === '/companies' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={() => handleLinkClick('/companies')}
            >
              {activeLink === '/companies' && <span className="mr-2 text-red-600">•</span>}
              OUR COMPANIES
            </a>
            <a
              href="/contact"
              className={`flex items-center ${activeLink === '/contact' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={() => handleLinkClick('/contact')}
            >
              {activeLink === '/contact' && <span className="mr-2 text-red-600">•</span>}
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
