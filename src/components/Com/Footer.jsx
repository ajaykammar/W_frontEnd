import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaCopyright } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import React, { useState } from 'react';
import logo from '../../assets/Images/logo-navbar.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-primary static text-white ">
      {/* Newsletter Section */}
      <div className="flex flex-col items-center py-10">
        <h1 className="text-lg font-semibold text-gray-300">Newsletter</h1>
        <p className="text-sm text-gray-400 mb-4">Get timely updates from your favorite products</p>
        <div className="flex w-1/3 bg-white rounded">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-grow p-2 text-gray-700 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="p-2 bg-blue-950 text-white rounded-r hover:bg-blue-900 transition-colors">
            <MdSend />
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-between p-8">
        {/* Company Info */}
        <div className="flex-1 space-y-4 p-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-8 mr-2" />
            <h1 className="text-xl font-semibold">WEFIX</h1>
          </div>
          <p className="text-sm text-gray-300">
            We are dedicated to exceeding customer expectations, growing through technological solutions, and providing services with excellence.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="bg-primary p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-red-600 p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-green-500 p-2 rounded-full">
              <FaWhatsapp />
            </a>
            <a href="#" className="bg-red-500 p-2 rounded-full">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1 space-y-2 p-4">
          <h3 className="text-lg text-gray-300">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Preferred Partner</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 space-y-2 p-4">
          <h3 className="text-lg text-gray-300">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Repair Services</li>
            <li>Consultation</li>
            <li>Installation</li>
            <li>Maintenance</li>
            <li>Warranty Support</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 space-y-4 p-4">
          <h3 className="text-lg text-gray-300">Contact Us</h3>
          <p className="text-sm text-gray-400">Plot No.#28,178/2, 2nd Floor, Jaynagar, Hindalga Road, Vijayanagar, Belgaum 591108.</p>
          <p className="text-sm text-gray-400"><b>Phone:</b> 6366131707</p>
          <p className="text-sm text-gray-400"><b>Email:</b> Tech@thewefix.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-950 text-gray-500 py-2 flex items-center justify-center">
        <FaCopyright className="mr-1" />
        <p>Copyright © 2024 WEFIX. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
