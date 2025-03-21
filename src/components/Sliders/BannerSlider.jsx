import React, { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const banners = [
  {
    id: 1,
    title: 'Welcome to Our Service',
    description: 'Your satisfaction is our priority.',
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20231009/pngtree-illustrated-concept-3d-render-of-smartphone-repair-services-image_13554509.png',
  },
  {
    id: 2,
    title: 'High Quality Products',
    description: 'We deliver the best products to you.',
    image: 'https://as2.ftcdn.net/v2/jpg/05/09/73/37/1000_F_509733710_Xxmp6pEN7gmZGCIxGuamXMIFdBTp5Ts6.jpg',
  },
  {
    id: 3,
    title: 'Fast and Reliable',
    description: 'Service you can trust.',
    image: 'https://as2.ftcdn.net/v2/jpg/09/35/11/79/1000_F_935117935_oa0JkIqxxdiodssOZhOW6uu3uhtPwHUI.jpg',
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-4xl font-bold">{banner.title}</h2>
            <p className="text-lg mt-2">{banner.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition"
      >
        <MdArrowBackIos size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition"
      >
        <MdArrowForwardIos size={24} />
      </button>
    </div>
  );
};

export default BannerSlider;
