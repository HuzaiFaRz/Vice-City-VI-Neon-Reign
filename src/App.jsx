import { Fragment, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero_Images from "./Components/Hero_Images";
import Navbar from "./Components/Navbar";
import VIBackground from "./assets/Images/Background.png";
import PageTwoImage from "./assets/Images/Page-2-Image.png";
import Hero_BottomBar from "./Components/Hero_BottomBar";
import Hero_Heading from "./Components/Hero_Heading";
import HeroLogo from "./Components/HeroLogo";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  new LocomotiveScroll();
  const [loadingVIShow, setLoadingVIShow] = useState(true);
  const mainRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useGSAP(() => {
    const gsapTimeLine = gsap.timeline();
    gsap.to(".Page-1", {
      rotate: 0,
      scale: 1,
      duration: 3,
      delay: 1,
      ease: "Expo.easeInOut",
      overflow: "hidden",
      onComplete: () => {
        document.body.style.overflowY = "scroll";
      },
    });

    gsapTimeLine.from(".image-div", {
      opacity: 0,
      x: "-30%",
      filter: "blur(5px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".Page-2",
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
        markers: false,
        anticipatePin: 1,
      },
    });

    gsapTimeLine.from(".page-2-content", {
      opacity: 0,
      x: "30%",
      y: "20px",
      duration: 1.5,
      ease: "back.out(1.2)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".Page-2",
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
        markers: false,
        anticipatePin: 1,
      },
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
      <main className="overflow-hidden main">
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
          } flex-col justify-center items-center w-full h-full`}
          ref={mainRef}
        >
          <div className="Page-1 w-full h-[100svh] relative overflow-hidden -rotate-10 scale-[1.7] flex flex-col items-center justify-center">
            <Navbar />
            <Hero_Images />
            <Hero_Heading />
            <Hero_BottomBar />
            <HeroLogo />
          </div>
          <div className="Page-2 w-full h-[100svh] min-h-max bg-black flex flex-col lg:flex-row justify-center items-center relative">
            <div className="image-div">
              <img
                src={PageTwoImage}
                className="object-center object-cover w-max h-[700px]"
              />
            </div>
            <div className="text-white flex flex-col justify-center xl:mb-0 mb-10 w-full md:w-[600px] px-4 page-2-content">
              <div className="text-6xl lg:text-7xl xl:text-8xl">
                <h1>STILL RUNNING</h1>
                <h1>NOT HUNTING</h1>
              </div>
              <div className="text-white text-[14px] sm:text-[18px] font-sans mt-10 h-full">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati incidunt suscipit iure tempora. Esse quis a option.
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati incidunt suscipit iure tempora. Esse quis a optio
                  quaerat nihil eveniet quae impedit dolores unde obcaecati?
                </p>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati incidunt suscipit iure tempora. Esse quis a optio
                  quaerat nihil eveniet quae impedit dolores unde obcaecati?
                </p>
              </div>
              <button className="bg-yellow-400 text-black py-4 text-2xl cursor-pointer mt-10 w-full">
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;