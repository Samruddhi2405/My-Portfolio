import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-poppins text-xl font-bold text-primary dark:text-accent">
            Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-roboto text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="font-roboto text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="font-roboto text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="font-roboto text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors">
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 