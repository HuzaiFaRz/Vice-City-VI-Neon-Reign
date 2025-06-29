import React, { Fragment, useEffect, useRef } from "react";
import mainImage from "../assets/Images/Background.png";
import cloudyImage from "../assets/Images/Cloudy_Sky.png";
import heroGirlImage from "../assets/Images/Hero_boy.png";
import gsap from "gsap";

const Hero_Images = () => {
  const heroImages = [mainImage, cloudyImage, heroGirlImage];
  const heroImagesDiv = useRef([]);

  useEffect(() => {
    gsap.to(heroImagesDiv.current[0], {
      scale: 1.4,
      rotate: 0,
      delay: 1.5,
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(heroImagesDiv.current[1], {
      scale: 1.4,
      rotate: 0,
      delay: 1.5,
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(heroImagesDiv.current[2], {
      top: "40%",
      left: "50%",
      transform: "transtranslateX(-50%)",
      scale: 1,
      delay: 1.5,
      duration: 2,
      ease: "Expo.easeInOut",
    });

    const pageOne = document.querySelector(".Page-1");
    if (pageOne) {
      pageOne?.addEventListener("mousemove", () => {
        const xCoordinate = (event.clientX / window.innerWidth - 0.5) * 40;
        gsap.to(heroImagesDiv.current[0], {
          x: `${xCoordinate * 0.1}%`,
        });
        gsap.to(heroImagesDiv.current[1], {
          x: `${xCoordinate * 0.5}%`,
        });
      });
    }
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
              className={`absolute h-full w-full
                ${index < 2 && "object-cover object-center"} ${
                index === 0 && "scale-[1.5] -rotate-[20deg] z-10"
              } ${index === 1 && "scale-[1.8] -rotate-[10deg]"} ${
                index === 2 &&
                "z-20 left-1/2 -translate-x-1/2 object-contain scale-[3] top-[400%]"
              } `}
            />
          </React.Fragment>
        );
      })}
    </Fragment>
  );
};

export default Hero_Images;
// -bottom-[300%] scale-[1] -rotate-[20deg]
