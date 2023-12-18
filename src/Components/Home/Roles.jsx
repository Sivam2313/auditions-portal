import React from 'react'
import RolesCard from './RolesCard'

const Roles = () => {
    const roles = ['Teaching and Problem Setting', 'Web Development', 'App Development', 'Graphics Design']
  return (
    <div className="lg:h-[150vh] pb-12 w-screen flex flex-col bg-black flex flex-col items-center">
        <div className="text-primary font-title text-5xl lg:text-7xl pt-32 lg:mb-12 mb-6">
          ROLES
        </div>
        {/* <div className='w-11/12 h-[5px] bg-primary'></div> */}
        <div className='flex h-fit  lg:h-fit lg:flex-row flex-col mt-6 lg:mt-32 justify-evenly items-center w-full bg-black'>
            {
                roles.map((role,idx)=>{
                    return (
                      <div>
                        <RolesCard label={role} timeout={(idx+1)*0.5}/>
                      </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Roles