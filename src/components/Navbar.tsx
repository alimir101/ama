import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-dark-900/95 backdrop-blur-sm z-50 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img 
                src="/images/logo.svg" 
                alt="Ali Mukhtar Agencies Logo" 
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a href="#about" className="text-gray-300 hover:text-secondary-400 transition">About</a>
            <a href="#services" className="text-gray-300 hover:text-secondary-400 transition">Services</a>
            <a href="#team" className="text-gray-300 hover:text-secondary-400 transition">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-secondary-400 transition">Contact</a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 rounded-md bg-secondary-400 text-dark-900 hover:bg-secondary-500 transition"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#team"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="w-full px-3 py-2 text-center bg-secondary-400 text-dark-900 hover:bg-secondary-500 rounded-md transition"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}