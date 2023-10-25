import React from 'react'
import {motion} from 'framer-motion'
const Domains = ({roles,setAppliedFor,appliedFor}) => {

    const variants = {
        shown:{opacity:1,height:'fit-content'},
        hidden:{opacity:0,height:'0px'}
    }

    function handleChange(e){
        var arr = [...appliedFor]
        if(e.target.checked){
            arr.push(e.target.value)
        }
        else{
            const index = arr.indexOf(e.target.value);
            if (index > -1) { // only splice array when item is found
                arr.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
        // console.log(arr);
        setAppliedFor(arr)
    }
    

  return (
    <motion.div layout className='w-full lg:min-w-[800px]'>
        <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Domains
        </div>
        <div className='pt-8'>
            <div className='lg:pl-3 pl-6 font-head pb-3 text-lg lg:text-xl text-left text-white'>
                Select the domains you are applying for:
            </div>
            <div className='pb-6 lg:pl-6 pl-12'>
                {
                    roles.map((role,idx)=>{
                        return(
                            <div key={idx} className='flex items-center'>
                                <input type="checkbox" value={role} className="appearance-none -webkit-appearance-none -moz-appearance-none w-4 h-4 border-onSurface2 border-2 rounded-sm cursor-pointer checked:border-primary z-10" onChange={(e)=>{handleChange(e)}}
                                    checked = {(appliedFor.indexOf(role)>=0)? true:false}
                                />
                                {(appliedFor.indexOf(role)>=0) &&
                                    <label className="text-white text-xs font-bold relative right-1 -ml-2 text-primary cursor-pointer">✓</label>}
                                <div className="ml-3 text-white font-head lg:text-lg flex items-center">{role}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <motion.div className='pt-8 border-t-2 border-outline mx-3 lg:mx-0'
        animate = {(appliedFor.length<=1)? 'hidden' : 'shown'}
        variants={variants}
        >
            <div className='font-head pb-3 text-lg lg:text-xl text-left pl-3 mx-3 lg:mx-0 text-white'>
                Rank these domains distinctively, according to your priority :
            </div>
            <div>
                {
                    roles.map((role,idx)=>{
                        if(appliedFor.indexOf(role)>-1){
                            return(
                                <div key={idx} className='flex pl-3 pt-3'>
                                    <div className="ml-3 text-white font-head lg:text-lg pr-5 w-4/12 lg:w-3/12 text-left">{role}</div>
                                    <div className='flex items-center w-1/2'>
                                        <input
                                            type="range"
                                            min={1}
                                            max={appliedFor.length}
                                            step={1}
                                            className="bg-primary w-full"
                                            onChange={(e)=>console.log(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Domains