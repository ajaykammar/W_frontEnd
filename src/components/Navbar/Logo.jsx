import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/Images/logo-navbar.png";

const Logo = () => (
  <Link to="/" className="text-2xl font-bold text-white">
    <img src={LogoImage} alt="logo" width={55} />
  </Link>
);

export default Logo;
