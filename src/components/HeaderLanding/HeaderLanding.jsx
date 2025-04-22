import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeaderLanding.css"; // Import your CSS file for styling

const Header = () => {


  return (
    <header
      className="fixed white:text-animeText top-4 right-4 left-4 z-50 backdrop-blur-lg  shadow-xl rounded-2xl px-6 py-3 flex items-center justify-between animate-float-in"
    >
      {/* Logo */}
      <div className="text-pink-500 font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
        🌸CardX
      </div>

      {/* Nav Links */}
      <nav className=" sm:flex items-center space-x-6 text-sm font-medium">
        <Link
          to="/explore"
          className="relative text-gray-900 text-white hover:text-cyan-400 transition-colors duration-300"
        >
          Explore
          <span className="absolute left-0 bottom-[-6px] w-0 h-0.5 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
        </Link>
        <Link
          to="/features"
          className="relative text-gray-900 text-white hover:text-cyan-400 transition-colors duration-300"
        >
          Features
          <span className="absolute left-0 bottom-[-6px] w-0 h-0.5 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
        </Link>
      </nav>

      {/* Login Button */}
      <div
        className="w-24 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-white text-center text-sm font-semibold cursor-pointer animate-float"
      >
        Login
      </div>
    </header>
  );
};

export default Header;
