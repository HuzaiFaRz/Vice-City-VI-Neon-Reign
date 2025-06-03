import React, { Fragment } from "react";

const Hero_Heading = () => {
  return (
    <Fragment>
      <div className="w-full  z-50 absolute top-0 left-1/2 -translate-x-1/2 text-white flex flex-col justify-center items-center">
        {["GRAND", "THEFT", "AUTO"].map((text, index) => {
          return (
            <React.Fragment key={index}>
              <h1
                className={`text-[100px] ${
                  index === 0 && index === 2 ? "self-start" : "self-center"
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
