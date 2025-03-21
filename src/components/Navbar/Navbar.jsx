// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaAngleDown,
} from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenu from "./MobileMenu";
import Logo from "../../assets/Images/logo-navbar.png";

const Navbar = ({ setisModuleOpen, isModalOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CartData = useSelector((state) => state.cartData);
  const TotAlCArtProducts = CartData.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const WishList = useSelector((state) => state.wishlist);

  // Check login status
  const checkLoginStatus = () => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  };

  useEffect(() => {
    checkLoginStatus();
    const handleStorageChange = () => checkLoginStatus();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isModalOpen]);

  return (
    <header className="bg-primary shadow-lg sticky top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <img src={Logo} alt="logo" width={55} />
        </Link>

        {/* Search Bar */}
        <SearchBar />

        {/* Desktop Navigation Links */}
        <DesktopNavLinks
          isLoggedIn={isLoggedIn}
          TotAlCArtProducts={TotAlCArtProducts}
          WishList={WishList}
          setisModuleOpen={setisModuleOpen}
        />

        {/* Mobile Menu Toggle */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isLoggedIn={isLoggedIn}
          setisModuleOpen={setisModuleOpen}
          TotAlCArtProducts={TotAlCArtProducts}
          WishList={WishList}
        />
      </div>
    </header>
  );
};

export default Navbar;
