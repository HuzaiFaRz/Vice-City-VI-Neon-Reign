import React, { Fragment, useEffect } from "react";
import gsap from "gsap";

const Hero_Heading = () => {
  useEffect(() => {
    const pageOne = document.querySelector(".Page-1");
    const mainHeading = document.querySelector(".mainHeading");
    if (pageOne) {
      pageOne?.addEventListener("mousemove", () => {
        const xCoordinate = (event.clientX / window.innerWidth - 0.5) * 40;
        if (mainHeading) {
          gsap.to(mainHeading, {
            x: `${xCoordinate * 1}%`,
          });
        }
      });
    }
  });

  return (
    <Fragment>
      <div className="z-10 w-[20%] absolute top-1/5 -translate-y-1/5 text-white flex flex-col justify-center items-center gap-0 mainHeading">
        {["GRAND", "THEFT", "AUTO"].map((text, index) => {
          return (
            <React.Fragment key={index}>
              <h1
                className={`text-[80px] sm:text-[100px] md:text-[140px] leading-[90px] sm:leading-[130px] md:leading-[150px] ${
                  index === 1 && "ml-[0.6em]"
                } ${index === 0 && "mr-[0.8em] sm:mr-[2em]"} ${
                  index === 2 && "mr-[1em] sm:mr-[2.5em] sm:-mt-4 md:-mt-11"
                }`}
              >
                {text.toLocaleLowerCase()}
              </h1>
            </React.Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Hero_Heading;
