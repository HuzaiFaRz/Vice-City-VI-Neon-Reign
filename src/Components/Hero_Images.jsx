import React, { Fragment, useEffect, useRef } from "react";
import mainImage from "../assets/Images/Background.png";
import cloudyImage from "../assets/Images/Cloudy_Sky.png";
import heroGirlImage from "../assets/Images/Hero_Girl.png";
import gsap from "gsap";

const Hero_Images = () => {
  const heroImages = [mainImage, cloudyImage, heroGirlImage];
  const heroImagesDiv = useRef([]);

  useEffect(() => {
    gsap.to(heroImagesDiv.current[0], {
      scale: 1,
      rotate: 0,
      delay: 1.5,
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(heroImagesDiv.current[1], {
      scale: 1,
      rotate: 0,
      delay: 1.5,
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(heroImagesDiv.current[2], {
      scale: 0.8,
      rotate: 0,
      left: "50%",
      translateX: "-50%",
      bottom: "-65%",
      delay: 1.5,
      duration: 2,
      ease: "Expo.easeInOut",
    });
  });

  return (
    <Fragment>
      {heroImages.map((image, index) => {
        return (
          <React.Fragment key={index}>
            <img
              ref={(el) => (heroImagesDiv.current[index] = el)}
              src={image}
              loading="lazy"
              alt="Images"
              className={`object-cover object-center absolute ${
                index < 1 && "z-10 scale-[1.5] -rotate-[20deg] "
              } ${index < 2 && "scale-[1.8] -rotate-[3deg] w-full"} ${
                index === 2 &&
                "z-20 left-1/2 -translate-x-1/2 -bottom-[300%] scale-[3] -rotate-[20deg]"
              } `}
            />
          </React.Fragment>
        );
      })}
    </Fragment>
  );
};

export default Hero_Images;
