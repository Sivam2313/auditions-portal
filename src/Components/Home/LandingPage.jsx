import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const textAnimation = useRef(null)
    const navigate = useNavigate();

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
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5, duration:2}}
            className="font-title text-onSecondary text-5xl lg:text-9xl pb-6 lg:pb-12"
        >
            WELCOME TO THE
        </motion.div>
        <div className="font-title text-primary text-5xl lg:text-9xl">
            <span ref={textAnimation}></span>
            <motion.div className="inline" initial={{opacity:0}} animate={{opacity:1}} transition={{ repeat: "repeat", repeatDelay:0.2, duration: 0.2 }}>_</motion.div>
        </div>

        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:2.5, duration:2}}
            className="flex pt-6 lg:pt-12"
        >
            <div className="drop-shadow-glow text-primary">
                <svg className='lg:w-[37px] lg:h-[32px] w-[30px] h-[35px]' viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 7.21L28.6667 21L12.25 34.79L16.6667 38.5L37.5 21L16.6667 3.5L12.25 7.21Z" fill="white"/>
                </svg>
            </div>
            <div className="text-onSecondary text-xl lg:text-2xl flex items-center font-title">
                Join Us And Show Your Talent
            </div>
            <div className="drop-shadow-glow text-primary">
                <svg className='lg:w-[37px] lg:h-[32px] w-[30px] h-[35px]' viewBox="0 0 51 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.0234 5.3098C33.9821 4.4523 32.3034 4.4523 31.2621 5.3098L13.6034 19.8523C12.7746 20.5348 12.7746 21.6373 13.6034 22.3198L31.2621 36.8623C32.3034 37.7198 33.9821 37.7198 35.0234 36.8623C36.0646 36.0048 36.0646 34.6223 35.0234 33.7648L19.6384 21.0773L35.0446 8.3898C36.0646 7.5498 36.0646 6.1498 35.0234 5.3098Z" fill="white"/>
                </svg>
            </div>
        </motion.div>
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:2.5, duration:2}}
          className='flex w-full justify-center mt-12'
        >
          <button className="text-onPrimary bg-gradient-to-r from-[#ba9606] via-primary to-[#ba9606] text-xl rounded-full w-1/6 lg:text-2xl font-title p-3 hover:drop-shadow-glow transition-all" onClick={(e)=>{navigate('/form')}}>Join Now</button>
        </motion.div>
    </div>
  )
}

export default LandingPage