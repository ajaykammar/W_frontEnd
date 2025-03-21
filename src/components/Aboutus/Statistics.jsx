import React from 'react';
import { FaSmile, FaClock, FaUserCog } from 'react-icons/fa';
import CountUp from 'react-countup';

const Statistics = () => {
  const stats = [
    {
      label: 'Happy Customers',
      value: 1500,
      icon: <FaSmile />,
      gradient: 'from-green-200 via-green-300 to-green-400',
    },
    {
      label: 'Hours of Support',
      value: 24,
      suffix: '/7',
      icon: <FaClock />,
      gradient: 'from-blue-200 via-blue-300 to-blue-400',
    },
    {
      label: 'Technicians',
      value: 50,
      icon: <FaUserCog />,
      gradient: 'from-purple-200 via-purple-300 to-purple-400',
    },
  ];

  return (
    <div className="mb-14">
      <div className="max-w-2xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-1">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-2 rounded-lg shadow-lg bg-gradient-to-br ${stat.gradient} text-gray-800 transform transition-transform hover:scale-105`}
          >
            <div className="text-3xl mb-1 p-1 text-gray-600">{stat.icon}</div>
            <h3 className="text-xl font-semibold mb-1">
              <CountUp end={stat.value} duration={2} />{stat.suffix || ''}
            </h3>
            <p className="text-md font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
