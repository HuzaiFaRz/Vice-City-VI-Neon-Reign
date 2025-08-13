import React, { Fragment, useState } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Navbar = () => {
  const [menuButton, setMenubutton] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    const offcanvasLink = document.querySelectorAll("#offcanvas-link");

    if (offcanvasLink) {
      Array.from(offcanvasLink).forEach((elem) => {
        elem.addEventListener("mousemove", () => {
          const xCoordinate = (event.clientX / window.innerWidth - 0.5) * 40;
          gsap.to(elem, {
            x: `${xCoordinate}%`,
          });
        });
      });
    }

    if (menuButton) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      gsap.to("#offcanvas", {
        left: "0%",
        delay: 0.2,
        ease: "expo.out",
        duration: 0.3,
        onComplete: () => {
          document.body.style.overflow = "hidden";
        },
      });
      tl.from("#offcanvas-link", {
        y: 100,
        duration: 0.7,
        stagger: 0.28,
        opacity: 0,
      });
    } else {
      gsap.to("#offcanvas", {
        left: "-100%",
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
        },
      });
    }
  }, [menuButton]);

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

      <div
        className="fixed top-0 w-[100%] h-full z-50 bg-black/55 backdrop-blur-xl -left-full flex justify-center items-center"
        id="offcanvas"
      >
        <div className="links flex flex-col justify-evenly items-center uppercase w-full h-full px-1">
          {[
            "Trailer",
            "Release Date",
            " Pre-Order ",
            "Map & Locations",
            "Community",
          ].map((link, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className={`text-6xl sm:text-7xl xl:text-8xl text-white font-extralight`}
                  id="offcanvas-link"
                >
                  {link}
                </a>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
