import { Fragment, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero_Images from "./Components/Hero_Images";
import Navbar from "./Components/Navbar";
import VIBackground from "./assets/Images/Background.png";
import Hero_BottomBar from "./Components/Hero_BottomBar";
import Hero_Heading from "./Components/Hero_Heading";

const App = () => {
  const [loadingVIShow, setLoadingVIShow] = useState(true);
  useGSAP(() => {
    const gsapTimeLine = gsap.timeline();
    gsapTimeLine
      .to(".VI-mask-group", {
        rotate: 10,
        duration: 2,
        ease: "power4.easeInOut",
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
            console.log("animation close");
            return;
          }
        },
      });
  });

  return (
    <Fragment>
      {loadingVIShow ? (
        <>
          <div className="Loading-Page w-full h-[100svh] flex justify-center bg-black">
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
        </>
      ) : (
        <>
          <div className="Page-1 w-full h-[100svh] relative overflow-hidden">
            <Navbar />
            <Hero_Images />
            <Hero_Heading />
            <Hero_BottomBar />
          </div>
          <div className="Page-2 w-full h-[100svh] bg-red-300"></div>
        </>
      )}
    </Fragment>
  );
};

export default App;
