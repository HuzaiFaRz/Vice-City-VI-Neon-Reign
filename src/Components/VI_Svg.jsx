import React, { Fragment, use } from "react";
import VIBackground from "../assets/Images/Background.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const VI_Svg = () => {
  useGSAP(() => {
    const gsapTimeLine = gsap.timeline();
    gsapTimeLine.to("vi-mask-group", {
      rotate: 23,
    });
  });

  return (
    <Fragment>
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="VIMask">
            <rect className="w-full h-full fill-black" />
            <g className="vi-mask-group">
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
