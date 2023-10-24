import React from 'react'
import Input from '../../Input'
import {motion} from 'framer-motion'
const Domains = ({roles,setAppliedFor,appliedFor}) => {

    const variants = {
        shown:{opacity:1,height:'fit-content'},
        hidden:{opacity:0,height:'0px'}
    }

    function handelChange(e){
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
        console.log(arr);
        setAppliedFor(arr)
    }
    

  return (
    <motion.div layout className='w-full min-w-[800px]'>
        <div className='font-head pl-3 text-5xl text-left text-white font-semibold pb-6 border-b-2 border-outline'>
            Domains
        </div>
        <div className='pt-8'>
            <div className='pl-3 font-head pb-3 text-xl text-left text-white'>
                Select the domains you are applying for:
            </div>
            <div className='pb-6 pl-6'>
                {
                    roles.map((role,idx)=>{
                        return(
                            <div key={idx} className='flex'>
                                <input type="checkbox" value={role} className="w-6 h-12 text-blue-600 bg-gray-100 border-gray-300 rounded" onChange={(e)=>{handelChange(e)}}
                                checked = {(appliedFor.indexOf(role)>=0)? true:false}
                                />
                                <div className="ml-3 text-white font-head text-lg flex items-center">{role}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <motion.div className='pt-8 border-t-2 border-outline'
        animate = {(appliedFor.length<=1)? 'hidden' : 'shown'}
        variants={variants}
        >
            <div className='font-head pb-3 text-xl text-left pl-3 text-white'>
                Rank these domains distinctively, according to your priority :
            </div>
            <div>
                {
                    roles.map((role,idx)=>{
                        if(appliedFor.indexOf(role)>-1){
                            return(
                                <div key={idx} className='flex pl-3 pt-3'>
                                    <div className="ml-3 text-white font-head text-lg pr-5 flex w-4/12 items-center">{role}</div>
                                    <div className='flex items-center'>
                                        <input
                                            type="range"
                                            min={1}
                                            max={appliedFor.length}
                                            step={1}
                                            className="bg-primary"
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