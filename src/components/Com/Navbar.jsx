import React, { useEffect, useMemo, useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaAngleDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo-navbar.png";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { SerchProduct } from "../../services/productApi";
import { BiLoader } from "react-icons/bi";
import { SearchProdcuts } from "../../features/slices/ProductSlice";

const Navbar = ({ setisModuleOpen, isModalOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const Dispatch = useDispatch();

  const CartData = useSelector((state) => state.cartData);
  const TotAlCArtProducts = CartData.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const WishList = useSelector((state) => state.wishlist);

  // Function to check login status
  const checkLoginStatus = () => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Update isLoggedIn based on user existence
  };
  useEffect(() => {
    checkLoginStatus();
    // Listen for login/logout changes using a custom event
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 200);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryFn: () => SerchProduct(debouncedSearch),
    queryKey: ["SerchProducts", debouncedSearch],
    enabled: !!debouncedSearch,
    staleTime: 5 * 60 * 1000, // Cache results for 5 minutes
  });
  if (isSuccess) {
    Dispatch(SearchProdcuts(data.products));
  }

  const getHighLightedText = (text, Highlight) => {
    const parts = text.split(new RegExp(`(${Highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === Highlight.toLowerCase() ? (
            <b key={index} className="text-blue-900">
              {part}
            </b>
          ) : (
            part
          );
        })}
      </span>
    );
  };
  return (
    <header className="bg-primary shadow-lg sticky w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <img src={Logo} alt="logo" width={55} />
        </Link>

        {/* Search Bar with Auto-Suggestions */}
        <div className="hidden md:flex flex-col items-center w-1/3 mx-4 relative">
          <div className="flex w-full">
            <input
              type="text"
              className="w-full py-1 px-3 rounded-l-lg outline-none border border-gray-300"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-950 p-2 rounded-r-lg text-white hover:bg-blue-900">
              {isLoading ? <BiLoader className="animate-spin" /> : <FaSearch />}
            </button>
          </div>

          {/* Auto-Suggestions Dropdown */}

          {data && debouncedSearch && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-lg max-h-40 overflow-y-auto z-10">
              {data.products.length > 0 ? (
                data.products.map((product) => (
                  <li
                    key={product._id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(product.Title); // Set the clicked title in the input
                      // Optionally trigger a search action here
                    }}
                  >
                    {getHighLightedText(product.Title, debouncedSearch)}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">Product Not found</li>
              )}
            </ul>
          )}
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition-colors"
          >
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
                  to="/services/web-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  to="/services/mobile-app-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Mobile App Development
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

          {/* Cart and Wishlist Icons with Counts */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative text-white hover:text-gray-200 transition-colors"
            >
              <FaShoppingCart size={20} />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {TotAlCArtProducts > 0 ? TotAlCArtProducts : ""}
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="relative text-white hover:text-gray-200 transition-colors"
            >
              <FaHeart size={20} />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {WishList && WishList.length > 0 && WishList.length}
              </span>
            </Link>
          </div>

          {/* Login/Profile Button */}
          {isLoggedIn ? (
            <Link
              to="/profile/info"
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
            >
              <FaUser size={20} />
              <span>Profile</span>
            </Link>
          ) : (
            <button
              onClick={() => setisModuleOpen(true)}
              className="bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
