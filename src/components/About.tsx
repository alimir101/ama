import React from 'react';
import { Shield, Users, Target, Clock, Award, Building2 } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'ISO 9001:2015 Certified',
    description: 'Maintaining highest quality standards in customs clearing and logistics'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Large team of dedicated professionals with specialized industry knowledge'
  },
  {
    icon: Target,
    title: '30+ Years Experience',
    description: 'Proven track record in customs clearing and logistics solutions'
  },
  {
    icon: Building2,
    title: 'Nationwide Presence',
    description: 'Serving clients across Pakistan with comprehensive logistics solutions'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ali Mukhtar Agencies is an ISO 9001:2015 certified leader in the Custom Clearing industry, 
            with a nationwide presence and over three decades of excellence in service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-700/50 p-8 rounded-lg border border-dark-600">
            <h3 className="text-2xl font-bold text-secondary-400 mb-4">Our Commitment</h3>
            <p className="text-gray-300">
              We conduct business in an ethical manner and always follow the best business practices 
              in compliance with company rules and regulations. Our state-of-the-art consignment 
              tracking system allows clients to monitor their shipments in real-time.
            </p>
          </div>
          <div className="bg-dark-700/50 p-8 rounded-lg border border-dark-600">
            <h3 className="text-2xl font-bold text-secondary-400 mb-4">Leadership</h3>
            <p className="text-gray-300">
              Led by Mr. Imran Mir, Ex-chairman of FPCCI and current Member of Valuation Committee 
              of KCCI, bringing over 40 years of industry expertise and key relationships with FBR 
              officials for optimal client service.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-dark-700/50 p-6 rounded-lg border border-dark-600 hover:border-secondary-400 transition-colors duration-300">
              <value.icon className="w-12 h-12 text-secondary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}