"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
                bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Uvaan Covenden
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
                transition-all duration-300 absolute bottom-0" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-white/90 hover:text-white transition-colors"
              >
                <span className="text-sm font-medium tracking-wide">{item}</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-pink-500 
                  transition-all duration-300 absolute bottom-0" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                transform hover:scale-105 transition-all duration-300"
            >
              Let Talk
            </Link>

            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                transform hover:scale-105 transition-all duration-300"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <div className="w-6 h-5 relative transform transition-all duration-300">
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 
                ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'}`} />
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 
                ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 
                ${isOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 px-4">
            {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-white py-2 text-sm font-medium tracking-wide
                  transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                transform hover:scale-105 transition-all duration-300"
            >
              Let Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;