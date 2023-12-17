import React from 'react';
import logo from '../../Assets/logoInverted.png'
import { motion } from 'framer-motion';

const RolesCard = ({label}) => {
  return (
    <motion.div layout className='w-2/12 h-2/3 min-h-[400px] min-w-[100px] bg-transparent rounded-2xl border-[#E6C449] border-2 flex flex-col items-center justify-center hover:drop-shadow-glow'>
        <div className='w-[2px] h-full  bg-primary'></div>
        <div className='rounded-full border-[#E6C449] border-2 w-[150px] h-[150px] absolute mt-3 bg-black flex justify-center items-center'>
            <img src={logo} className='w-10/12' />
        </div>
    </motion.div>
  )
}

export default RolesCard