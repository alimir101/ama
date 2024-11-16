import React from 'react';
import { 
  Building2, 
  Ship, 
  Truck, 
  Package, 
  Beaker,
  Smartphone,
  Cpu,
  Pill,
  Hammer,
  Factory,
  Wrench,
  Box,
  Car
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Custom Clearance',
    description: 'Expert handling of import/export customs clearance with pre-shipment consultancy'
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Comprehensive shipping solutions with global reach'
  },
  {
    icon: Truck,
    title: 'Transportation',
    description: 'Door-to-door delivery services across Pakistan'
  },
  {
    icon: Package,
    title: 'Tracking System',
    description: 'Real-time consignment tracking through our customer portal'
  }
];

const expertise = [
  {
    icon: Factory,
    title: 'Oil Well Equipment',
    description: 'Specialized handling of oil and gas industry equipment'
  },
  {
    icon: Smartphone,
    title: 'Telecom Equipment',
    description: 'Custom solutions for telecommunications infrastructure'
  },
  {
    icon: Cpu,
    title: 'IT Equipment',
    description: 'Handling of computer and technology imports'
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'Specialized care for medical and pharmaceutical imports'
  },
  {
    icon: Hammer,
    title: 'Metal & Steel',
    description: 'Expert handling of ferrous and non-ferrous metals'
  },
  {
    icon: Beaker,
    title: 'Chemicals',
    description: 'Safe handling of chemical materials and compounds'
  },
  {
    icon: Box,
    title: 'Raw Materials',
    description: 'Efficient processing of industrial raw materials'
  },
  {
    icon: Car,
    title: 'Automobiles',
    description: 'Specialized handling of vehicle imports and parts'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end logistics and customs clearing services with specialized expertise across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-dark-800 border border-dark-700 p-6 rounded-lg hover:border-secondary-400 transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 text-secondary-400 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Areas of Expertise</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Specialized solutions across diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="group bg-dark-800/50 border border-dark-700 p-6 rounded-lg hover:border-secondary-400 transition-colors duration-300"
            >
              <item.icon className="w-12 h-12 text-secondary-400 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}