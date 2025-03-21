import React from 'react';

const MissionVistion = () => {
  return (
    <section className="bg-gray-100  px-4 flex justify-center m-14 ">
      <div className="max-w-4xl rounded-lg p-8 space-y-8">
        {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1> */}
        
        {/* Mission Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Our mission is to drive innovation and excellence, empowering our customers with top-notch solutions that streamline operations and foster growth. We are committed to delivering exceptional value and fostering a culture of collaboration, integrity, and continuous improvement.
          </p>
        </div>

        {/* Vision Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Our vision is to be a global leader in our industry, setting standards of excellence and inspiring positive change. We aim to shape the future with sustainable practices, innovative solutions, and a commitment to building a better, more connected world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVistion;
