import React, { Fragment, useEffect, useRef } from "react";
import mainImage from "../assets/Images/Background.png";
import cloudyImage from "../assets/Images/Cloudy_Sky.png";
import heroGirlImage from "../assets/Images/Hero_Girl.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero_Images = () => {
  const heroImages = [mainImage, cloudyImage, heroGirlImage];
  const heroImagesDiv = useRef([]);

  useEffect(() => {
    const gsapTimeLine = gsap.timeline();
    gsap.to(heroImagesDiv.current[0], {
      scale: 1,
      rotate: 0,
      delay: 1,
      duration: 2,
      ease: "power4.easeInOut",
    });
    gsap.to(heroImagesDiv.current[1], {
      scale: 1,
      rotate: 0,
      delay: 1,
      duration: 2,
      ease: "power4.easeInOut",
    });
    gsap.to(heroImagesDiv.current[2], {
       delay: 1.5,
      duration: 2,
      ease: "power4.easeInOut",
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
              className={`object-cover absolute z-20 ${
                index < 1 && "z-30 w-full"
              } ${index < 2 && "top-0 left-0 w-full h-screen"} ${
                index === 2 &&
                "left-1/2 -translate-1/2 top-[80%] sm:top-[87%] z-40 scale-[1] w-fit"
              } ${
                index === 0 &&
                "scale-[1.5] -rotate-[20deg]" &&
                index === 1 &&
                "scale-[1.8] -rotate-[3deg]" &&
                index === 2 &&
                ""
              }`}
            />
          </React.Fragment>
        );
      })}
    </Fragment>
  );
};

export default Hero_Images;
