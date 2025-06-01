import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-1 h-20 absolute top-0 left-0 z-50 flex flex-wrap justify-between items-center">
      <div className="Nav-Start flex flex-row justify-center items-center gap-3 h-full ml-3 md:ml-12 mt-2 md:mt-4">
        <button className="flex flex-col justify-center items-start gap-2 cursor-pointer">
          {[0, 1, 2].map((_, index) => {
            return (
              <React.Fragment key={index}>
                <span
                  className={`${
                    index < 1
                      ? "w-[60px]"
                      : index < 2
                      ? "w-[35px]"
                      : index < 3 && "w-[22px]"
                  } h-[6px] rounded-xl bg-white`}
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
  );
};

export default Navbar;
