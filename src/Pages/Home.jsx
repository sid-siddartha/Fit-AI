import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import ReactTypo from "../Components/ReactTypo";
import Button from "@mui/material/Button";
import Reviews from "../Components/Reviews";
import HeroBg from "../Components/HeroBg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExerciseDisplay from "../Components/ExerciseDisplay";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import AboutUs from "../Components/AboutUs";
import HeroSection from "../Components/HeroSection";


const Home = () => {


  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section

        className="relative  flex flex-col items-center justify-center min-h-screen text-center"
      >
        <HeroSection/>
      </section>

       {/* About Us section */}
      <AboutUs/>

      {/* Reviews Section */}
      <section className="mt-[100px]">
        <h1 className="text-white font-anton text-[3vw] font-extrabold uppercase leading-none flex justify-center items-center mt-10 -mb-10">
          Trusted by Fitness Enthusiasts Across India
        </h1>
        <Reviews />
      </section>

     

      {/* exercise display */}
      <section >
          <ExerciseDisplay/>
       </section>

       {/* contact us */}
       <section>
        <Contact/>
       </section>

      {/* Footer */}
      <section >
        <Footer/>
      </section>

      
    </div>
  );
};

export default Home;