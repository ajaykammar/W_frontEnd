import React from 'react';

const SubscriptionModule = () => {
  const offers = [
    {
      id: 1,
      title: 'Basic Plan',
      description: 'Great for individuals getting started.',
      price: '$9.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      gradient: 'bg-gradient-to-b from-green-400 to-blue-500',
    },
    {
      id: 2,
      title: 'Standard Plan',
      description: 'Perfect for small teams and regular users.',
      price: '$19.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      gradient: 'bg-gradient-to-b from-blue-400 to-purple-500',
    },
    {
      id: 3,
      title: 'Premium Plan',
      description: 'Ideal for businesses and premium features.',
      price: '$29.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      gradient: 'bg-gradient-to-b from-purple-400 to-pink-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl  text-center mb-8 text-blue-950 uppercase ">Choose Your Subscription Plan</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {offers.map((offer) => (
          <div key={offer.id} className={`relative ${offer.gradient} text-white rounded-lg shadow-2xl p-8 w-80 transition-transform transform hover:scale-105 hover:shadow-xl`}>
            <div className='h-4/5'>
              <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
              <p className="text-gray-200 mb-4 text-lg">{offer.description}</p>
              <div className="text-3xl font-extrabold mb-6">{offer.price}</div>
              
              <ul className="text-left text-gray-200 mb-4">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <span className="mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className='h-1/5'>
              <button className="bg-white text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionModule;
