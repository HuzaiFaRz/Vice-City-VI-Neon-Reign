import React from "react";
import LogoImage from "../assets/Images/Hero_Logo.png";

const HeroLogo = () => {
  return (
    <img
      src={LogoImage}
      className="absolute z-20 lg:w-[100px] lg:h-[100px] bottom-1/3
      right-1/5 translate-x-1/5 w-[60px] h-[60px] md:right-1/4 md:translate-x-1/4 md:w-[80px] md:h-[80px] lg:right-1/3 lg:translate-x-1/3"
      loading="lazy"
    />
  );
};

export default HeroLogo;
