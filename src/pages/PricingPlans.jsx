import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$10/month',
      features: [
        'Access to basic features',
        'Community support',
        'Monthly newsletter',
        'Limited storage'
      ],
      description: 'The Basic Plan is ideal for individuals looking to get started with essential features at an affordable price. It provides community support and regular updates to keep you informed.'
    },
    {
      name: 'Standard Plan',
      price: '$25/month',
      features: [
        'Access to all basic features',
        'Priority support',
        'Weekly newsletter',
        'Increased storage',
        'Customizable profile'
      ],
      description: 'The Standard Plan is designed for small teams or growing individuals who need more support and features. Enjoy priority assistance and a customizable profile to enhance your experience.'
    },
    {
      name: 'Premium Plan',
      price: '$50/month',
      features: [
        'Access to all features',
        'Dedicated support',
        'Daily newsletter',
        'Unlimited storage',
        'Advanced analytics tools'
      ],
      description: 'The Premium Plan offers everything you need for serious users. With dedicated support and advanced analytics tools, this plan helps you make the most of your subscription.'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">{plan.name}</h2>
            <p className="text-2xl font-semibold text-gray-700 mb-4">{plan.price}</p>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Features:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
