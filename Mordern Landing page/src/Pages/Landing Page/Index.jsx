import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import "../Landing Page/style.css";
import r_clock from "../../Images/clock.webp";
import r_circleframe from "../../Images/circleframe.webp";
import feather from "../../Images/feather frame.webp";
import design1 from "../../Images/design.webp";
import frame from "../../Images/frame.webp";
import img1 from "../../Images/images.png";
import img2 from "../../Images/image2.png";
import img3 from "../../Images/image3.png";
import showpiece from "../../Images/showpiece.webp";
import neclace from "../../Images/neclace.webp";
import woodern from "../../Images/wooden.webp";
import asthetic from "../../Images/asthetic.webp";
import img0 from "../../Images/img0.webp";
import landingPage from "../../Images/landing_page.webp";
import landingPage2 from "../../Images/landing_page2.webp";

export default function LandingPage() {
  const textArrays = [
    [
      "Art that",
      "Handcrafted",
      "Bringing",
      "Timeless designs,",
      "One-of-a-kind",
      "",
      "Pouring passion",
      "Where creativity",
      "Hand-poured",
      "From nature",
    ],
    [
      "flows with",
      "resin, timeless",
      "resin art to",
      "resin-crafted",
      "resin",
      "Nature’s beauty,",
      "into every",
      "meets",
      "resin,",
      "to",
    ],
    [
      "elegance.",
      "beauty.",
      "life.",
      "charm.",
      "creations.",
      "resin’s touch.",
      "piece.",
      "craftsmanship.",
      "pure perfection.",
      "your home.",
    ],
  ];
  const colors = [
    [
      "#ffffff",
      "#00223f",
      "#000000",
      "#000000",
      "#000000",
      "#120914",
      "#453b37",
      "#ffffff",
      "#120914",
      "##232b2b",
    ],
    [
      "#ffffff",
      "#00223f",
      "#000000",
      "#000000",
      "#000000",
      "#120914",
      "#453b37",
      "#ffffff",
      "#120914",
      "##232b2b",
    ],
    [
      "#ffffff",
      "#00223f",
      "#000000",
      "#000000",
      "#000000",
      "#120914",
      "#453b37",
      "#ffffff",
      "#120914",
      "##232b2b",
    ],
  ];

  //#120914  for fether

  const textIndexes = useRef([0, 0, 0]);

  function AnimateText() {
    const h1s = document.querySelectorAll(".animated-text");

    h1s.forEach((elem, i) => {
      gsap.to(elem, {
        top: "-100%",
        ease: Expo.easeInOut,
        duration: 0.6,
        onComplete: () => {
          textIndexes.current[i] =
            (textIndexes.current[i] + 1) % textArrays[i].length;

          elem.textContent = textArrays[i][textIndexes.current[i]];

          elem.style.color = colors[i][textIndexes.current[i]];

          gsap.set(elem, { top: "100%" });

          gsap.to(elem, {
            top: "0%",
            ease: Expo.easeInOut,
            duration: 0.6,
          });
        },
      });
    });
  }
  Shery.imageEffect("#back", {
    style: 5,
    config: {
      a: { value: 0.46, range: [0, 30] },
      b: { value: -0.98, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 2.1045241809672386 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });

  return (
    <div>
      <div className="main" onClick={AnimateText}>
        <div id="back">
          <img src={landingPage2} alt="" />
          <img src={showpiece} alt="" />
          <img src={r_clock} alt="" />
          <img src={frame} alt="" />
          <img src={img1} alt="" />
          <img src={feather} alt="" />
          <img src={neclace} alt="" />
          <img src={img2} alt="" />
          <img src={woodern} alt="" />
          <img src={asthetic} alt="" />
        </div>
        <div id="top">
          <div id="main-area">
            <div className="nav" id="nav">
              <div className="n-left">
                <div className="Logo">
                  <a href="#">Logo</a>
                </div>
                <div className="home">
                  <a href="#">Home</a>
                </div>
                <div className="about">
                  <a href="#">About</a>
                </div>
              </div>
              <div className="n-right">
                <div className="contact">
                  <a href="">Contact</a>
                </div>
                <div className="login">
                  {" "}
                  <a href="">login</a>
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="h-left">
                <div className="elem">
                  <h1
                    className="animated-text"
                    style={{
                      position: "relative",
                      top: "0%",
                      color: colors[0][0],
                    }}
                  >
                    {textArrays[0][0]}
                  </h1>
                </div>
                <div className="elem">
                  <h1
                    className="animated-text"
                    style={{
                      position: "relative",
                      top: "0%",
                      color: colors[1][0],
                    }}
                  >
                    {textArrays[1][0]}
                  </h1>
                </div>
                <div className="elem">
                  <h1
                    className="animated-text"
                    style={{
                      position: "relative",
                      top: "0%",
                      color: colors[2][0],
                    }}
                  >
                    {textArrays[2][0]}
                  </h1>
                </div>

                <div className="btn">
                  <button className="explore-now">Explore Now</button>
                </div>
              </div>
              <div className="h-right">
                <div className="r-elem">Lorem ipsum dolor sit amet.</div>
                <div className="box"></div>
                <div className="r-elem">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur alias eum quasi id perferendis quam, corrupti
                  maiores nostrum veritatis incidunt, sequi soluta ratione
                  consequatur dolorem ipsam qui maxime vero! Iste quos neque
                  nemo dolorum.
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  cupiditate eum velit. Laudantium perferendis praesentium, modi
                  repellendus atque sint distinctio soluta in veritatis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
