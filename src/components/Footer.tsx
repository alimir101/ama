import React from 'react';
import { ArrowUp, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800 text-gray-300 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ali Mukhtar Agencies</h3>
            <p className="text-sm mb-4">
              Your trusted partner in logistics and customs clearing solutions, serving Pakistan's 
              import and export needs for over three decades.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=30&h=30&q=80" 
                alt="ISO Certified" 
                className="w-8 h-8 object-contain"
              />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-secondary-400 transition">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary-400 transition">Our Services</a>
              </li>
              <li>
                <a href="#team" className="hover:text-secondary-400 transition">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary-400 transition">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-400 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-400 transition">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary-400" />
                <span>Suite #619, 6th Floor, Clifton Center, Block-5, Clifton, Karachi</span>
              </li>
              <li>
                <a href="tel:+923001234567" className="flex items-center space-x-3 hover:text-secondary-400 transition">
                  <Phone className="w-5 h-5 text-secondary-400" />
                  <span>+92 300 1234567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@alimukhtar.com" className="flex items-center space-x-3 hover:text-secondary-400 transition">
                  <Mail className="w-5 h-5 text-secondary-400" />
                  <span>info@alimukhtar.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-sm mb-4">
              Stay connected with us on social media for the latest updates and news.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-secondary-400 hover:text-dark-900 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-secondary-400 hover:text-dark-900 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-secondary-400 hover:text-dark-900 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ali Mukhtar Agencies. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-secondary-400 hover:text-dark-900 transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}