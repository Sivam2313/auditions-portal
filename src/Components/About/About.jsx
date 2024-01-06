import React, { useState } from "react";
import {motion} from 'framer-motion';
import Navbar from "../Navbar/Navbar";
import bg from "../../Assets/Artboard 3@4x.png";
import bg1 from "../../Assets/Artboard 1@4x.png";
import TimeLine from "./TimeLine";
import backgroungImg from '../../Assets/pageBackground.png'

const About = () => {
    const [mobview, setMobview] = useState(false)
    const variants = {
        closed: { height: "0px", overflow: "hidden", display:'flex !important' },
        open: {  display:'flex !important'},
    }

    return (
        <motion.div layout className='w-screen h-fit flex flex-col justify-center z-50'>
            <img src={backgroungImg} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0" />
            <div>
                <Navbar/>
                <TimeLine/>
            </div>
        </motion.div>
    );
};

export default About;