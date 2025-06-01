import React from "react";
import heroBottomBarLogo from "../assets/Images/Hero_BottomBar_Logo.png";

const Hero_BottomBar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center absolute bottom-0 z-50 px-2 sm:px-6 bg-gradient-to-t from-black to-transparent">
      <button className="flex justify-center items-center gap-1 text-white cursor-pointer">
        <i className="ri-arrow-down-line text-xl sm:text-3xl"></i>
        <h1 className="text-sm sm:text-xl font-mono">Scroll Down</h1>
      </button>
      <img
        src={heroBottomBarLogo}
        alt="Logo"
        className="w-[200px] sm:w-[300px] object-cover"
      />
      <div></div>
    </div>
  );
};

export default Hero_BottomBar;
