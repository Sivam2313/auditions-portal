import React, { useState } from "react";
import {motion} from 'framer-motion';
import Navbar from "../Navbar/Navbar";
import bg from "../../Assets/Artboard 3@4x.png";
import bg1 from "../../Assets/Artboard 1@4x.png";

const About = () => {
    const [mobview, setMobview] = useState(false)
    const variants = {
        closed: { height: "0px", overflow: "hidden", display:'flex !important' },
        open: {  display:'flex !important'},
    }

    return (
        <motion.div layout className='w-screen h-fit flex flex-col justify-center z-50'>
            <div>
                <Navbar/>
                <div className="w-screen h-screen relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                        <div className="text-white text-4xl font-bold mt-20 justify-center hidden sm:flex">
                            RECursion Auditions 2023
                        </div>
                        <div className="mt-6 mb-4 hidden sm:flex">
                            <img src={bg} alt="bg" className="h-auto max-w-xl rounded-lg cursor-pointer mx-auto" />
                        </div>  
                    </div>
                </div>
            </div>
            <motion.div className='flex sm:hidden w-full h-screen flex-col justify-between'
            animate={(!mobview)? "open" : "closed"}
            variants={variants}
            >
            <div className="w-screen h-fit relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <div className="text-white text-4xl font-bold mt-20">
                        RECursion Auditions 2023
                    </div>
                    <div className="mt-6 mb-4">
                        <img src={bg1} alt="bg1" className="h-auto max-w-sm rounded-lg cursor-pointer mx-auto" />
                    </div>  
                </div>
            </div>
            </motion.div>
        </motion.div>
    );
};

export default About;