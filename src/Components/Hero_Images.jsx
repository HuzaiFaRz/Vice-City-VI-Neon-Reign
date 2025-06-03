import React, { Fragment } from "react";
import mainImage from "../assets/Images/Background.png";
import cloudyImage from "../assets/Images/Cloudy_Sky.png";
import heroGirlImage from "../assets/Images/Hero_Girl.png";

const Hero_Images = () => {
  const heroImages = [mainImage, cloudyImage, heroGirlImage];
  return (
    <Fragment>
      {heroImages.map((image, index) => {
        return (
          <React.Fragment key={index}>
            <img
              src={image}
              loading="lazy"
              alt="Images"
              className={`object-cover absolute z-20 ${
                index < 1 && "z-30 w-full"
              } ${index < 2 && "top-0 left-0 w-full h-screen"} ${
                index === 2 &&
                "left-1/2 -translate-1/2 top-[80%] sm:top-[87%] z-40 scale-[1] w-fit"
              }`}
            />
          </React.Fragment>
        );
      })}
      {/* </div> */}
    </Fragment>
  );
};

export default Hero_Images;
