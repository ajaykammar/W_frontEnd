import React from 'react';


const dummyLogos = [
  {
    id: 1,
    img: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
  },
  {
    id: 2,
    img: "https://cdn.freebiesupply.com/logos/large/2x/oneplus-logo-png-transparent.png",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png",
  },
  {
    id: 4,
    img: "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png",
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Poco_Smartphone_Company_logo.svg/1280px-Poco_Smartphone_Company_logo.svg.png",
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/OPPO_Logo_wiki.png/1200px-OPPO_Logo_wiki.png",
  },
  {
    id: 7,
    img: 'https://i.pinimg.com/736x/5a/d4/24/5ad424565f6d6d82592f72fab98f0670.jpg',
  },
  {
    id: 8,
    img: "https://1000logos.net/wp-content/uploads/2017/03/Nokia-Logo-1978.png",
  },
  // {
  //   id: 9,
  //   img: logo9,
  // }
];

const BrandSlider = () => {
  return (
    <div className="mt-10 mb-8 w-full h-40 overflow-hidden selection:">
      <div className="text-center">
        <h3 className="text-primary">BRAND'S AT WE SERVE </h3>
        {/* <h1 className="text-[#29294e] text-2xl py-2">
          We are happy to serve more than 800 Clients
        </h1> */}
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
            transform: translateX(0px);
          }
        }
        .animate-slide {
          animation: slide 8s infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
