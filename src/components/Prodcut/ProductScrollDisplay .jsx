import React, { useState } from "react";
import Slider from "react-slick";
const categories = ["All", "Electronics", "Fashion", "Home & Kitchen"];
const products = [
  // Electronics
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/3219/replacement_front_camera_for_oppo_f11_pro_selfie_camera_by_maxbhi_com_96736.jpg?t=1719162274",
  },
  {
    id: 2,
    name: "Laptop",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/2645/replacement_back_camera_for_xiaomi_redmi_note_5_pro_by_maxbhi_com_73307.jpg?t=1719163058",
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/2509/replacement_front_camera_for_vivo_v9_selfie_camera_by_maxbhi_com_50372.jpg?t=1719165179",
  },
  {
    id: 4,
    name: "Smartwatch",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/4097/lcd_with_touch_screen_for_oppo_reno_3_pro_black_by_maxbhi_com_43032.jpg?t=1719161658",
  },
  {
    id: 5,
    name: "Tablet",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/3692/lcd_with_touch_screen_for_samsung_galaxy_j6_black_by_maxbhi_com_54714.jpg?t=1719161697",
  },
  {
    id: 6,
    name: "Camera",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/2132/lcd_with_touch_screen_for_samsung_galaxy_j7_prime_black_by_maxbhi_com_90578.jpg?t=1719161702",
  },
  {
    id: 7,
    name: "Printer",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/2645/replacement_back_camera_for_xiaomi_redmi_note_5_pro_by_maxbhi_com_73307.jpg?t=1719163058",
  },
  {
    id: 8,
    name: "Monitor",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/4097/lcd_with_touch_screen_for_oppo_reno_3_pro_black_by_maxbhi_com_43032.jpg?t=1719161658",
  },
  {
    id: 9,
    name: "Keyboard",
    category: "Electronics",
    image: "https://via.placeholder.com/200?text=Keyboard",
  },
  {
    id: 10,
    name: "Mouse",
    category: "Electronics",
    image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/4097/lcd_with_touch_screen_for_oppo_reno_3_pro_black_by_maxbhi_com_43032.jpg?t=1719161658",
  },
  // Fashion
  {
    id: 11,
    name: "Jacket",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Jacket",
  },
  {
    id: 12,
    name: "Sneakers",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Sneakers",
  },
  {
    id: 13,
    name: "T-Shirt",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=T-Shirt",
  },
  {
    id: 14,
    name: "Jeans",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Jeans",
  },
  {
    id: 15,
    name: "Watch",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Watch",
  },
  {
    id: 16,
    name: "Hat",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Hat",
  },
  {
    id: 17,
    name: "Scarf",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Scarf",
  },
  {
    id: 18,
    name: "Sunglasses",
    category: "Fashion",
    image: "https://via.placeholder.com/200?text=Sunglasses",
  },
  // Home & Kitchen
  {
    id: 19,
    name: "Blender",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Blender",
  },
  {
    id: 20,
    name: "Cookware Set",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Cookware+Set",
  },
  {
    id: 21,
    name: "Microwave",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Microwave",
  },
  {
    id: 22,
    name: "Coffee Maker",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Coffee+Maker",
  },
  {
    id: 23,
    name: "Cutlery Set",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Cutlery+Set",
  },
  {
    id: 24,
    name: "Toaster",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Toaster",
  },
  {
    id: 25,
    name: "Fryer",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Fryer",
  },
  {
    id: 26,
    name: "Blender",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Blender",
  },
  {
    id: 27,
    name: "Rice Cooker",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Rice+Cooker",
  },
  {
    id: 28,
    name: "Dishwasher",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Dishwasher",
  },
  {
    id: 28,
    name: "Dishwasher",
    category: "Home & Kitchen",
    image: "https://via.placeholder.com/200?text=Dishwasher",
  },
];

const CategoryGallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-1">
      <h2 className="text-xl font-bold text-blue-950  mb-3">
        Product Categories
      </h2>

      {/* Category Filter Buttons */}
      {/* <div className="flex  space-x-4 mb-8"> */}
      {/* {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 text-sm py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white transition duration-300`}
          >
            {category}
          </button>
        ))} */}
      {/* </div> */}

      {/* Product Display */}
      <div className=" flex flex-wrap justify-between bg-white items-center shadow-sm rounded-xl  ">
        {filteredProducts.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg  overflow-hidden m-1 p-1 w-32"
          >
            <img
              src={product.image}
              alt={product.name}
              className=" object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              {/* <h3 className="text-lg font-semibold mb-2">{product.name}</h3> */}
              {/* <p className="text-gray-500">{product.category}</p> */}
              <p className="text-gray-500">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGallery;
