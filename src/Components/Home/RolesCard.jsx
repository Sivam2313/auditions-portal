import React, { useEffect, useRef } from 'react';
import logo from '../../Assets/logoInverted.png'
import { inView, motion, useInView } from 'framer-motion';
import { useState } from 'react';
import "./Styles/RolesCard.css"

const RolesCard = ({label,timeout}) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const flipCard = useRef(null)
  const inView = useInView(flipCard)

  function handleflip(){
    if(!isAnimating){
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  useEffect(()=>{
    if(inView){
      setTimeout(()=>{
        setIsFlipped(true)
      },timeout*1000)
    }
  },[inView])

  return (
    <div className='flip-card' ref={flipCard} onClick={handleflip}>
      <motion.div 
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360, x: isFlipped ? 100 : -100 }}
        transition={{ duration: 0.2, aniationDirection: 'normal'}}
        onAnimationComplete={()=>setIsAnimating(false)}
        className='flip-card-inner w-full h-full'
      >
          <div className='w-full h-full min-h-[400px] min-w-[200px] bg-transparent rounded-2xl border-[#E6C449] border-2 flex flex-col items-center justify-center flip-card-front'>
            <div className='w-[2px] h-full  bg-primary'></div>
            <div className='rounded-full border-[#E6C449] border-2 w-[150px] h-[150px] absolute mt-3 bg-black flex justify-center items-center'>
                <img src={logo} className='w-10/12' />
            </div>
          </div>
          <div className='w-full h-full min-h-[400px] min-w-[200px] bg-black rounded-2xl border-[#E6C449] border-2 flex flex-col items-center justify-center flip-card-back'>
            <div className='font-title text-xl text-onSecondary'>
              {label}
            </div>
          </div>
      </motion.div>
    </div>
  )
}

export default RolesCard