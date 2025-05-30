import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { exercise_list } from "../assets/Exercises/assets.js";
import Navbar from "../Components/Navbar.jsx";
import { Dumbbell, Heart, Github, Twitter, Instagram } from 'lucide-react';

const ShowExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef();

  const exercise = exercise_list.find((ex) => ex._id === id);

  const handleGetStarted = async () => {
    await fetch("http://127.0.0.1:5000/start-exercise");
    if (videoRef.current) {
      videoRef.current.src = "http://127.0.0.1:5000/video";
    }
  };

  const handleLogoClick = () => {
    setMenu("Home");
    navigate("/"); // ✅ Go to the home page
  };


  const handleStopCamera = () => {
    if (videoRef.current) {
      videoRef.current.src = "";
      console.log("Camera stopped!");
    }
  };

  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white">
        <h2 className="text-3xl font-bold mb-4">Exercise not found</h2>
        <button
          className="mt-4 px-6 py-3 bg-[tomato] text-white rounded-full shadow hover:scale-105 transition-transform"
          onClick={() => navigate("/")}
        >
          Back to Exercises
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white relative overflow-x-hidden mb-0">
      <div className="flex justify-start mt-2 ml-10 items-center gap-2">
        <h1
        className="text-3xl font-bold text-[#e3f4fe] flex justify-between items-center cursor-pointer"
        onClick={handleLogoClick} // ✅ Add click handler
      >
        AI FITNESS TRAINER
        <Dumbbell className=" ml-2 h-8 w-8 text-blue-400 cursor-pointer transition-transform duration-1000 hover:rotate-[360deg]" />
      </h1>
      </div>

      <div className="min-h-screen items-center ">
        <div className="bg-[#1c1c1c] p-6 rounded-3xl  mt-3  ml-8 mr-8 mb-10">
          <div className="flex justify-center items-center">
            <h2 className="text-[3vw] flex  font-anton font-extrabold uppercase  text-center text-[#51a2ff] mb-6 tracking-wider">
            {exercise.name}
          </h2>
          </div>

          <div className=" flex justify-between mb-5">
            <div>
              <img
                src={exercise.image}
                alt={exercise.name}
                className="h-[500px] w-[300px] object-cover rounded-2xl  border border-[#2c2c2c]"
              />
            </div>
            
            
            <div>
              {/* MJPEG stream */}
              <img
                ref={videoRef}
                id="exerciseCam"
                alt="Live Stream"
                className=" w-[850px] h-[500px] bg-black rounded-2xl border border-gray-700 object-cover"
              />
            </div>
            </div>
         
           <div className="bg-[#2c2c2c] p-4 rounded-xl text-gray-300 shadow-inner">
              <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
              <p className="leading-relaxed">{exercise.description}</p>
            </div>


            <div className="flex justify-between items-center">

              <button
              className="mt-4 w-[300px] px-6 py-2 bg-transparent border border-[#52a3ff] text-[#52a3ff] rounded-full font-bold hover:bg-[#52a3ff] hover:text-black transition-colors"
              onClick={() => navigate("/")}
            >
              Back to Exercises
            </button>

              <button
              className="mt-6 w-[300px] px-6 py-2 bg-[#52a3ff] text-white rounded-full font-bold shadow hover:scale-105 transition-transform"
              onClick={handleGetStarted}
            >
              Get Started
            </button>

             <button
              className="mt-4 w-[300px] px-6 py-2 bg-transparent border border-red-400 text-red-400 rounded-full font-bold hover:bg-red-600 hover:text-white transition-colors"
              onClick={handleStopCamera}
            >
              Back to Exercises
            </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShowExercise;
