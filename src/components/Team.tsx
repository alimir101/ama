import React from 'react';
import { Mail } from 'lucide-react';

const team = [
  {
    name: 'Imran Mir',
    role: 'Chief Executive Officer',
    image: '/images/imran-mir.jpg',
    description: 'Over 40 years of industry experience, former Chairman of FPCCI, and a respected voice in logistics and trade in Pakistan.',
  },
  {
    name: 'Ali Mukhtar Mir',
    role: 'Managing Director',
    image: '/images/ali-mukhtar-mir.jpg',
    description: 'Leading the company\'s strategic initiatives and operations with innovative solutions for the modern logistics landscape.',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Meet Our Leadership</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our experienced leadership team drives the success of Ali Mukhtar Agencies through innovation,
            expertise, and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-dark-800 rounded-lg overflow-hidden border border-dark-700 hover:border-secondary-400 transition-colors duration-300"
            >
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-secondary-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}