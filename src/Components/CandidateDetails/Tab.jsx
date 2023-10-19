import React from 'react'

const Tab = ({active,setActive}) => {
    const appliedFor = ['Problem Setting and Teaching', 'Graphics Design', 'Web Development']
  return (
    <div className='flex w-full border-b-2 border-outline'>
        {
            appliedFor.map((role,idx) => {
                return(
                    <div key={idx} className='p-5 cursor-pointer text-white border-r-2 border-outline' onClick={(e)=>{setActive(idx)}}
                    style={{
                        borderStartStartRadius: (idx==0)? "8px":"0px",
                        backgroundColor : (active==idx)? "#334A50":"transparent",
                    }}>
                        {role}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tab