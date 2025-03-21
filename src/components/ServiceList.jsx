import React from 'react';

const services = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Build responsive and engaging websites.',
    icon: '🌐',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Create seamless apps for iOS and Android.',
    icon: '📱',
  },
  {
    id: 3,
    name: 'E-commerce Solutions',
    description: 'Build robust platforms for online shopping.',
    icon: '🛒',
  },
  {
    id: 4,
    name: 'Digital Marketing',
    description: 'Boost your online presence with SEO and social media.',
    icon: '📈',
  },
 
];

const ServiceList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
