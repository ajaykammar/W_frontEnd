// DesktopNavLinks.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const DesktopNavLinks = ({
  isLoggedIn,
  TotAlCArtProducts,
  WishList,
  setisModuleOpen,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  return (
    <nav className="hidden md:flex space-x-8 items-center">
      <Link to="/" className="text-white hover:text-gray-200 transition-colors">
        Home
      </Link>
      {/* Services Dropdown */}
      <div className="relative">
        <button
          className="flex items-center text-white hover:text-gray-200 transition-colors"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Services <FaAngleDown className="ml-1" />
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2">
            <Link
              to="/services/laptop-serivice"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Laptop Sevice
            </Link>
            <Link
              to="/services/mobile-service"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Mobile Service
            </Link>
            <Link
              to="/services/seo"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              SEO Services
            </Link>
          </div>
        )}
      </div>

      {/* <Link
        to="/pricing"
        className="text-white hover:text-gray-200 transition-colors"
      >
        Pricing
      </Link>
      <Link
        to="/about"
        className="text-white hover:text-gray-200 transition-colors"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="text-white hover:text-gray-200 transition-colors"
      >
        Contact Us
      </Link> */}
      <div className="flex items-center space-x-4">
        <Link
          to="/cart"
          className="relative text-white hover:text-gray-200 transition-colors"
        >
          <FaShoppingCart size={20} />
          {TotAlCArtProducts > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {TotAlCArtProducts}
            </span>
          )}
        </Link>
        <Link
          to="/wishlist"
          className="relative text-white hover:text-gray-200 transition-colors"
        >
          <FaHeart size={20} />
          {WishList && WishList.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {WishList.length}
            </span>
          )}
        </Link>
      </div>
      {isLoggedIn ? (
        <Link
          to="/profile/info"
          className="flex items-center text-white hover:text-gray-200"
        >
          <FaUser size={20} />
          <span>Profile</span>
        </Link>
      ) : (
        <button
          onClick={() => setisModuleOpen(true)}
          className="bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-900"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default DesktopNavLinks;
