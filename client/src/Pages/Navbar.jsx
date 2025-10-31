import React, { useState, useEffect } from 'react'
import { navBar } from '../../Constant'

export const Navbar = ({navigate}) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent dark:from-orange-400 dark:to-orange-300">
                Pixc
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                lean
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navBar.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.link} 
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 
                    dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sign Up Button */}
          <button 
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 
            hover:to-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-lg 
            shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all 
            duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}