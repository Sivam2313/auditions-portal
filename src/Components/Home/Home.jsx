import React from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../Animations";
import Roles from "./Roles";
import LandingPage from "./LandingPage";
import bgr from "../../Assets/gg.webp";
import backgroundImg from '../../Assets/pageBackground.webp';
import Footer from "./Footer";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
      className="snap-mandatory snap-y overflow-y-scroll overflow-x-hidden snap-strict h-screen w-screen fixed flex flex-col"
    >
      <div
        style={{ 
          position: 'relative',
          backgroundImage: `url(${backgroundImg})`, 
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",

        }}
        className="flex flex-col snap-center"
      >
        <Navbar navbarBg={'#0f172a'}/>
        <LandingPage />
        
        {/* Overlay GIF */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgr})`,
            backgroundSize: "cover",
            opacity: 0.5,
            zIndex:1,
          }}
        ></div>
      </div>
      <div className="snap-start h-fit" style={{background:"#0f0913"}}>
        <Roles />
      </div>
      <div className="snap-start h-fit" >
        <Footer />
      </div>      
    </motion.div>
  );
};

export default Home;
