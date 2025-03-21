// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  isLoggedIn,
  setisModuleOpen,
  TotAlCArtProducts,
  WishList,
}) => (
  <div>
    <button
      className="md:hidden text-2xl text-white"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰
    </button>
    {isMenuOpen && (
      <div className="absolute top-16 left-0 bg-primary w-full p-4 shadow-lg md:hidden">
        <div className="flex flex-col space-y-4">
          <div className="text-white hover:text-gray-200">
            <Link to={"/"}> Home</Link>
          </div>
          <div className="text-white hover:text-gray-200">
            <Link to={"/pricing"}> Pricing</Link>{" "}
          </div>
          <div className="text-white hover:text-gray-200">
            <Link to={"/about"}> About Us</Link>{" "}
          </div>
          <div className="text-white hover:text-gray-200">
            <Link to={"/contact"}> Contact Us</Link>
          </div>
          <button
            className="text-white hover:text-gray-200"
            onClick={() => setisModuleOpen(true)}
          >
            {isLoggedIn ? "Profile" : "Login"}
          </button>
        </div>
      </div>
    )}
  </div>
);

export default MobileMenu;
