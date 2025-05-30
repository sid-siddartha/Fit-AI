import React, { useEffect, useRef } from "react";
import HeroBg from "../assets/hero_background.mp4";
import ReactTypo from "./ReactTypo";
import Button from "@mui/material/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const stickyContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Make it sticky and float
      ScrollTrigger.create({
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        pin: stickyContainerRef.current,
        pinSpacing: false,
      });

      // Smooth scale down and fade out when bottom of video is visible
      gsap.to(stickyContainerRef.current, {
        scale: 0.5,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "bottom bottom",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white flex justify-center">
      {/* Background Video */}
      <div className="mt-25 flex justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute flex justify-center w-[1200px] ml-8 m-8 h-full object-cover z-8 rounded-2xl background-video"
        >
          <source src={HeroBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sticky container */}
      <div
        ref={stickyContainerRef}
        className="flex flex-col items-center justify-center absolute w-full h-full z-10"
      >
        {/* Heading */}
        <h1 className="text-white z-10 flex justify-center font-anton text-[9vw] font-extrabold leading-none uppercase mt-18">
          AI FITNESS TRAINER
        </h1>

        {/* Typed Text */}
        <div className="flex justify-center items-center -mt-10">
          <ReactTypo />
        </div>

        {/* Button */}
        <div className="flex justify-center items-center mt-5">
          <Button
            variant="contained"
            sx={{
              color: "white",
              border: "1px solid white",
              backgroundColor: "black",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "gray",
                color: "white",
                borderColor: "tomato",
              },
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
