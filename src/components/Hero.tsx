import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="gradient-text">Customs Clearing</span> & Logistics Solutions Tailored for Your Needs
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Over 30 years of experience, providing hassle-free, end-to-end logistics services 
            for imports and exports in Pakistan and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 rounded-md bg-secondary-400 text-dark-900 hover:bg-secondary-500 transition font-semibold cursor-pointer"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center px-6 py-3 rounded-md border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400/10 transition font-semibold cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-secondary-400 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary-400 rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}