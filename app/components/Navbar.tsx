"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
            <Link href="/">MyPortfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="#features" label="Features" />
            <NavLink href="#portfolio" label="Portfolio" />
            <NavLink href="#testimonials" label="Testimonials" />
            <NavLink href="#contact" label="Contact" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-center p-4 space-y-4">
          <NavLink href="#features" label="Features" onClick={toggleMenu} />
          <NavLink href="#portfolio" label="Portfolio" onClick={toggleMenu} />
          <NavLink href="#testimonials" label="Testimonials" onClick={toggleMenu} />
          <NavLink href="#contact" label="Contact" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

// Updated NavLink Component
const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <Link href={href} onClick={onClick} className="block text-lg hover:text-pink-400 transition duration-300">
    {label}
  </Link>
);

export default Navbar;
