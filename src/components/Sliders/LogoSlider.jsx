import React from 'react';
import logo1 from "../../assets/Images/clients/client-1.jpeg"
import logo2 from "../../assets/Images/clients/client-2.png"
import logo3 from "../../assets/Images/clients/client-3.jpeg"
import logo4 from "../../assets/Images/clients/client-4.png"
import logo5 from "../../assets/Images/clients/client-5.png"
import logo6 from "../../assets/Images/clients/client-6.png"
import logo7 from "../../assets/Images/clients/client-7.png"
import logo8 from "../../assets/Images/clients/client-8.png"
import logo9 from "../../assets/Images/clients/client-9.png"

const dummyLogos = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo4,
  },
  {
    id: 5,
    img: logo5,
  },
  {
    id: 6,
    img: logo6,
  },
  {
    id: 7,
    img: logo7,
  },
  {
    id: 8,
    img: logo8,
  },
  {
    id: 9,
    img: logo9,
  },
];

const LogoSlider = () => {
  return (
    <div className="mt-20 mb-40 w-full h-40 overflow-hidden selection:">
      <div className="text-center">
        <p className="text-blue-500">WE SERVE AT</p>
        <h1 className="text-[#29294e] text-2xl py-2">
          We are happy to serve more than 800 Clients
        </h1>
      </div>

      <div className="flex flex-row animate-slide whitespace-nowrap">
        {dummyLogos.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={`Logo ${item.id}`}
            className=" h-12 m-8"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-200px);
          }
          40% {
            transform: translateX(-400px);
          }
          60% {
            transform: translateX(-600px);
          }
          80% {
            transform: translateX(-800px);
          }
          100% {
            transform: translateX(-1000px);
          }
        }
        .animate-slide {
          animation: slide 8s infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
