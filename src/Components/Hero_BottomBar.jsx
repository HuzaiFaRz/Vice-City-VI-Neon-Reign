import React, { useState } from "react";
import heroBottomBarLogo from "../assets/Images/Hero_BottomBar_Logo.png";
import LocomotiveScroll from "locomotive-scroll";

const Hero_BottomBar = () => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center absolute bottom-0 pb-4 z-20 px-2 sm:px-6 bg-gradient-to-t from-black to-transparent">
      <button
        className="flex justify-center items-center gap-1 text-white cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <i className="ri-arrow-down-line text-xl sm:text-3xl"></i>
        <h1 className="text-sm sm:text-xl font-sans">Scroll Down</h1>
      </button>
      <img
        src={heroBottomBarLogo}
        alt="Logo"
        className="w-[180px] sm:w-[250px] object-cover"
      />
      <div></div>
    </div>
  );
};

export default Hero_BottomBar;
