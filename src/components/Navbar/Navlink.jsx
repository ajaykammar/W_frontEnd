import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ isDropdownOpen, toggleDropdown }) => (
  <nav className="hidden md:flex space-x-8 items-center">
    <Link to="/" className="text-white hover:text-gray-200 transition-colors">
      Home
    </Link>
    <div className="relative">
      <button
        className="flex items-center text-white hover:text-gray-200 transition-colors"
        onClick={toggleDropdown}
      >
        Services
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2">
          <Link
            to="/services/laptop-service"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Laptop-Service
          </Link>
          <Link
            to="/services/mobile-app-development"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Mobile
          </Link>
          {/* <Link
            to="/services/seo"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            SEO Services
          </Link> */}
        </div>
      )}
    </div>
    <Link
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
    </Link>
  </nav>
);

export default NavLinks;
