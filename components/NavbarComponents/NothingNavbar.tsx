"use client"
// components/Navbar.tsx
import { useState } from 'react';

const NothingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-5 text-white">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">HALO LAB</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#" className="hover:text-gray-400">
            Our Process
          </a>
          <a href="#" className="hover:text-gray-400">
            Open source
          </a>
          <a href="#" className="hover:text-gray-400">
            Our blog
          </a>
        </div>
        <div className="hidden md:block">
          <a href="#" className="bg-blue-600 px-4 py-2 rounded-full text-white">
            Contact Us
          </a>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4 space-y-2`}>
        <a href="#" className="block hover:text-gray-400">
          Services
        </a>
        <a href="#" className="block hover:text-gray-400">
          Projects
        </a>
        <a href="#" className="block hover:text-gray-400">
          Our Process
        </a>
        <a href="#" className="block hover:text-gray-400">
          Open source
        </a>
        <a href="#" className="block hover:text-gray-400">
          Our blog
        </a>
        <a href="#" className="block bg-blue-600 px-4 py-2 rounded-full text-white mt-4">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default NothingNavbar;
