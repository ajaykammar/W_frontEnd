import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const UserActions = ({
  isLoggedIn,
  TotAlCArtProducts,
  WishList,
  setisModuleOpen,
}) => (
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
    {isLoggedIn ? (
      <Link
        to="/profile/info"
        className="flex items-center space-x-2 text-white hover:text-gray-200"
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
  </div>
);

export default UserActions;
