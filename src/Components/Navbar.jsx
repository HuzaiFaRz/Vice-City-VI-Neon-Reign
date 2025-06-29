import React, { Fragment, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [menuButton, setMenubutton] = useState(false);

  return (
    <Fragment>
      <nav className="w-full px-4 py-1 h-[80px] absolute top-0 left-0 z-1000 flex flex-wrap justify-between items-center">
        <div className="Nav-Start flex flex-row justify-center items-center gap-5 h-full ml-3 md:ml-12 mt-2 md:mt-4">
          <button
            className="flex flex-col justify-center items-start gap-2 cursor-pointer transition-all w-[60px] h-[40px]"
            onClick={() => setMenubutton(!menuButton)}
          >
            {[0, 1, 2].map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <span
                    className={`transition-all ${
                      index < 1
                        ? `w-[55px] ${menuButton && "rotate-45"} `
                        : index < 2
                        ? `w-[35px] ${menuButton && "hidden"}`
                        : index < 3 &&
                          `w-[22px]  ${
                            menuButton && "w-[55px] -rotate-45 -mt-3"
                          }`
                    } h-[6px] bg-white`}
                  ></span>
                </React.Fragment>
              );
            })}
          </button>
          <div className="logo text-white text-2xl self-start mt-[7px]">
            RockStar
          </div>
        </div>
      </nav>

      <div className="fixed top-0 left-0 w-full h-full z-[100] bg-black hidden flex-row items-center justify-center">
        <div className="w-[50%] h-full bg-red-500"></div>
        <div className="w-[50%] h-full skew-x-5 bg-blue-500"></div>
      </div>
    </Fragment>
  );
};

export default Navbar;
