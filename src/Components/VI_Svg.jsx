import React, { Fragment } from "react";
import VIBackground from "../assets/Images/Background.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
const VI_Svg = () => {
  // const [first, setfirst] = useState(true)
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
            document.querySelector(".VI_svg").remove();
            this.kill();
            return;
          }
        },
      });
  });

  return (
    <Fragment>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="VI_svg"
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
    </Fragment>
  );
};

export default VI_Svg;
