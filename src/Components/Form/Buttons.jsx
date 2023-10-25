import React from 'react'
import {motion} from 'framer-motion'

const Buttons = ({active,setActive,size}) => {

  const nextHandler = ()=>{
    if(active<size-1){
      setActive(active+1)
    }
  }

  const backHandler = ()=>{
    if(active>0){
      setActive(active-1)
    }
  }

  return (
    <motion.div layout className='w-11/12 flex justify-between lg:pl-3 pl-6 font-head text-xl mt-16'>
        <button className='bg-surface p-2 rounded-full w-32 text-onSurface' onClick={backHandler}
        style={{
          visibility: (active==0)? 'hidden':'visible'
        }}
        >
            Back
        </button>
        <button className='bg-primary p-3 rounded-full w-32 text-onPrimary' onClick={nextHandler}>
            {(active==size-1)? "Submit" : "Next"}
        </button>
    </motion.div>
  )
}

export default Buttons