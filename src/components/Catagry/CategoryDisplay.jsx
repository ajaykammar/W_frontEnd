import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Mobile Sparce Parts",
    image:
      "https://png.pngtree.com/png-clipart/20230405/original/pngtree-mobile-phone-repair-service-logo-png-image_9027036.png",
    link: "/shop/electronics",
  },
  {
    id: 2,
    name: "Mobil",
    image:
      "https://i.pinimg.com/736x/39/9a/8f/399a8f928f9210cf77ea03d698871c08.jpg",
    link: "/shop/fashion",
  },
  {
    id: 3,
    name: "AC and Refrigarator",
    image:
      "https://thumbs.dreamstime.com/b/air-conditioner-repair-logo-design-template-conditioning-snowflake-twist-construction-installation-conditioners-vector-319740514.jpg",
    link: "/shop/home-kitchen",
  },
  {
    id: 4,
    name: "Desktop",
    image:
      "https://www.shutterstock.com/image-vector/computer-repair-icon-two-colors-260nw-1168510561.jpg",
    link: "/shop/beauty",
  },
  {
    id: 5,
    name: "TV ",
    image:
      "https://media.istockphoto.com/id/929530230/vector/icon-logo-with-the-concept-of-computer-repair-and-repair-of-television-monitor.jpg?s=1024x1024&w=is&k=20&c=sP0OgRPCYoRRu1h2rxcLMkymCzbY7bubld4Dy3lGGyM=",
    link: "/shop/sports",
  },
  {
    id: 6,
    name: "Home Appliences",
    image:
      "https://www.shutterstock.com/image-vector/appliance-repair-logo-vector-260nw-2262627265.jpg",
    link: "/shop/toys",
  },
  {
    id: 7,
    name: "TV ",
    image:
      "https://media.istockphoto.com/id/929530230/vector/icon-logo-with-the-concept-of-computer-repair-and-repair-of-television-monitor.jpg?s=1024x1024&w=is&k=20&c=sP0OgRPCYoRRu1h2rxcLMkymCzbY7bubld4Dy3lGGyM=",
    link: "/shop/sports",
  },
  {
    id: 8,
    name: "Home Appliences",
    image:
      "https://www.shutterstock.com/image-vector/appliance-repair-logo-vector-260nw-2262627265.jpg",
    link: "/shop/toys",
  },
  {
    id: 9,
    name: "Home Appliences",
    image:
      "https://www.shutterstock.com/image-vector/appliance-repair-logo-vector-260nw-2262627265.jpg",
    link: "/shop/toys",
  },
];

const CategoryDisplay = () => {
  return (
    <div className="container mx-auto px-4 my-1">
      <div className="flex flex-wrap items-center justify-center space-x-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" h-32 w-32 bg-white relative overflow-hidden border rounded-lg flex justify-center   shadow-lg   group "
          >
            <img
              src={category.image}
              alt={category.name}
              className="  object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
                <Link to={category.link}>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
