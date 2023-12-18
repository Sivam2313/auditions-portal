import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import homepageGif from "../../Assets/giphy.gif";
import team from "../../Assets/team.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../Animations";
import ArrowLeft from "../Icons/ArrowLeft";
import Roles from "./Roles";
import { set } from "lodash";
import LandingPage from "./LandingPage";


const Home = () => {

  




  return (
    <motion.div 
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
      className="snap-mandatory snap-y overflow-y-scroll overflow-x-hidden snap-strict h-screen w-screen fixed flex flex-col"
    >
      <div 
        style={{ backgroundImage: `url(${homepageGif})` }}
        className="bg-cover bg-center h-screen w-screen flex flex-col snap-center z-10">
        <Navbar />
        <LandingPage />
      </div>
      <div className="snap-start h-fit">
        <Roles />
      </div>
    </motion.div>
  );
};

const Card = ({ title }) => {
  return (
    <div className="flex-1 max-w-xs bg-white-900 p-4 m-2 text-center rounded-md backdrop-filter backdrop-blur-md border">
      <div className="text-white font-semibold text-lg">{title}</div>
    </div>
  );
};

export default Home;
