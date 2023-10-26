import React from 'react'
import {motion} from 'framer-motion'
import { delay } from 'lodash'
const Stepper = ({steps,active}) => {

    const variants = {
        reached: { backgroundColor: "#E6C449"},
        notReached: { backgroundColor: "#9E857F" },
    };
    
  return (
    <div className='hidden lg:flex flex-col w-1/5 min-w-[250px]'>
        <div className='w-[4px] h-[310px] bg-onSurface2 absolute ml-[13px] z-10'>

        </div>
        <motion.div layout className='w-[4px] h-[255px] bg-primary absolute ml-[13px] z-20'
        style={{
            height: active*60.75 + "px",           
        }}
        >

        </motion.div>
        {
            steps.map((step,idx)=>{
                return(
                    <div key={idx} className='flex w-full pb-6 items-center justify-between'>
                        <motion.div className='h-[2rem] w-[2.125rem] rounded-full z-40'
                        layout
                        transition={{delay:0.4}}
                        animate={(idx<=active)? "reached" : "notReached"}
                        variants={variants}
                        >
                        </motion.div>
                        <div className='w-full text-left font-head text-lg text-onSurface2 font-semibold flex items-center pl-6 h-[2rem]'>
                            {step.label}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Stepper