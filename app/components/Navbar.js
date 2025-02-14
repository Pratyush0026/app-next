'use client';

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md font-['Martian_Mono'] text-[#0F1934] tracking-[1.5px] text-[12px] font-medium leading-auto mt-1 ml-4 mr-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="AppVersal" width={192} height={64} className="w-48 h-16" />
        </Link>

        <div className="hidden sm:flex space-x-8 lg:space-x-20 items-center font-semibold">
          <Link
            href="/about"
            className={`flex items-center ${pathname === '/about' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={handleLinkClick}
          >
            {pathname === '/about' && <span className="mr-2 text-red-600">•</span>}
            ABOUT US
          </Link>

          <Link
            href="/ai"
            className={`flex items-center ${pathname === '/ai' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={handleLinkClick}
          >
            {pathname === '/ai' && <span className="mr-2 text-red-600">•</span>}
            APPVERSAL AI
          </Link>
          {/* <Link
            href="/work"
            className={`flex items-center ${pathname === '/work' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={handleLinkClick}
          >
            {pathname === '/work' && <span className="mr-2 text-red-600">•</span>}
            OUR WORK
          </Link>
          <Link
            href="/companies"
            className={`flex items-center ${pathname === '/companies' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={handleLinkClick}
          >
            {pathname === '/companies' && <span className="mr-2 text-red-600">•</span>}
            OUR COMPANIES
          </Link> */}
          <Link
            href="/contact"
            className={`flex items-center ${pathname === '/contact' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
            onClick={handleLinkClick}
          >
            {pathname === '/contact' && <span className="mr-2 text-red-600">•</span>}
            CONTACT US
          </Link>
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
            <Link
              href="/about"
              className={`flex items-center ${pathname === '/about' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={handleLinkClick}
            >
              {pathname === '/about' && <span className="mr-2 text-red-600">•</span>}
              ABOUT US
            </Link>
            {/* <Link
              href="/work"
              className={`flex items-center ${pathname === '/work' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={handleLinkClick}
            >
              {pathname === '/work' && <span className="mr-2 text-red-600">•</span>}
              OUR WORK
            </Link>
            <Link
              href="/companies"
              className={`flex items-center ${pathname === '/companies' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={handleLinkClick}
            >
              {pathname === '/companies' && <span className="mr-2 text-red-600">•</span>}
              OUR COMPANIES
            </Link> */}
            <Link
              href="/contact"
              className={`flex items-center ${pathname === '/contact' ? 'text-red-600' : 'text-[#0F1934]'} hover:text-red-600`}
              onClick={handleLinkClick}
            >
              {pathname === '/contact' && <span className="mr-2 text-red-600">•</span>}
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;