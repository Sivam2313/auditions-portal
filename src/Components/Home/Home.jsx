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


const Home = () => {

  const textAnimation = useRef(null)

  useEffect(() => {
    if(!textAnimation.current) return;
    var i = 0;
    var txt = 'AUDITIONS'; /* The text */
    var speed = 150; /* The speed/duration of the effect in milliseconds */
    textAnimation.current.innerHTML = "";
    function typeWriter() {
      if (i <= txt.length) {
        textAnimation.current.innerHTML = txt.substring(0,i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    setTimeout(typeWriter, 1000);
  
  }, []);




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
        className="bg-cover bg-center h-screen w-screen flex flex-col snap-start z-10">
        <Navbar />
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5, duration:2}}
            className="font-title text-onSecondary text-9xl pb-12"
          >
            WELCOME TO THE
          </motion.div>
          <div className="font-title text-primary text-9xl">
            <span ref={textAnimation}></span>
            <motion.div className="inline" initial={{opacity:0}} animate={{opacity:1}} transition={{ repeat: "repeat", repeatDelay:0.2, duration: 0.2 }}>_</motion.div>
          </div>

          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:2.5, duration:2}}
            className="flex pt-12"
          >
            <div className="drop-shadow-glow text-primary">
              <svg width="37" height="32" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 7.21L28.6667 21L12.25 34.79L16.6667 38.5L37.5 21L16.6667 3.5L12.25 7.21Z" fill="white"/>
              </svg>
            </div>
            <div className="text-onSecondary text-2xl flex items-center font-title">
              Join Us And Show Your Talent
            </div>
            <div className="drop-shadow-glow text-primary">
              <svg width="37" height="32" viewBox="0 0 51 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.0234 5.3098C33.9821 4.4523 32.3034 4.4523 31.2621 5.3098L13.6034 19.8523C12.7746 20.5348 12.7746 21.6373 13.6034 22.3198L31.2621 36.8623C32.3034 37.7198 33.9821 37.7198 35.0234 36.8623C36.0646 36.0048 36.0646 34.6223 35.0234 33.7648L19.6384 21.0773L35.0446 8.3898C36.0646 7.5498 36.0646 6.1498 35.0234 5.3098Z" fill="white"/>
              </svg>
            </div>
          </motion.div>
        </div>
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
