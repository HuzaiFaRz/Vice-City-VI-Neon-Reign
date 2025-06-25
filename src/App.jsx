import { Fragment, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero_Images from "./Components/Hero_Images";
import Navbar from "./Components/Navbar";
import VIBackground from "./assets/Images/Background.png";
import Hero_BottomBar from "./Components/Hero_BottomBar";
import Hero_Heading from "./Components/Hero_Heading";
import HeroLogo from "./Components/HeroLogo";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [loadingVIShow, setLoadingVIShow] = useState(true);
  const mainRef = useRef(null);

  useGSAP(() => {
    const gsapTimeLine = gsap.timeline();
    gsap.to(".Page-1", {
      rotate: 0,
      scale: 1,
      duration: 3,
      delay: 1,
      ease: "Expo.easeInOut",
    });

    if (loadingVIShow) {
      gsapTimeLine
        .to(".VI-mask-group", {
          rotate: 10,
          duration: 2,
          ease: "Power4.easeInOut",
          transformOrigin: "50% 50%",
        })
        .to(".VI-mask-group", {
          scale: 10,
          duration: 2,
          delay: -1.8,
          ease: "Expo.easeInOut",
          transformOrigin: "50% 50%",
          opacity: 0,
          onUpdate: function () {
            if (this.progress() >= 0.9) {
              this.kill();
              setLoadingVIShow(false);
              return;
            }
          },
        });
      return;
    }
  });

  return (
    <Fragment>
      <main className="overflow-hidden">
        <div
          className={`Loading-Page w-full h-[100svh] ${
            loadingVIShow ? "flex" : "hidden"
          } justify-center bg-black`}
        >
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            className="VI_svg overflow-hidden"
          >
            <defs>
              <mask id="VIMask">
                <rect className="w-full h-full fill-black" />
                <g className="VI-mask-group">
                  <text
                    className="translate-x-3/6 translate-y-3/6 text-[250px] fill-white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href={VIBackground}
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#VIMask)"
            />
          </svg>
        </div>

        <div
          className={`${
            loadingVIShow ? "hidden" : "flex"
          } flex-col justify-center items-center`}
          ref={mainRef}
        >
          <div className="Page-1 w-full h-[100svh] relative overflow-hidden -rotate-10 scale-[1.7] ">
            <Navbar />
            <Hero_Images />
            <Hero_Heading />
            <Hero_BottomBar />
            <HeroLogo />
          </div>
          <div className="Page-2 w-full h-[100svh] bg-red-300"></div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
