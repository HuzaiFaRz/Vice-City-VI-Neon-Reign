import React, { Fragment } from "react";

const Hero_Heading = () => {
  return (
    <Fragment>
      <div className="w-full z-30 absolute top-1/5 -translate-y-1/5 text-white flex flex-col justify-center items-center gap-0">
        {["GRAND", "THEFT", "AUTO"].map((text, index) => {
          return (
            <React.Fragment key={index}>
              <h1
                className={`text-[80px] sm:text-[120px] md:text-[140px] leading-[90px] sm:leading-[150px] md:leading-[150px] ${
                  index === 1 && "ml-[0.6em]"
                } ${index === 0 && "mr-[0.8em] sm:mr-[2em]"} ${
                  index === 2 && "mr-[1em] sm:mr-[2.5em] md:-mt-11"
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
