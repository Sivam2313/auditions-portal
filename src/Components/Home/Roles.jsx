import React from 'react'
import RolesCard from './RolesCard'

const Roles = () => {
    const roles = ['Teaching and Problem Setting', 'Web Development', 'App Development', 'Graphics Design']
  return (
    <div className="h-screen w-screen flex flex-col bg-black flex flex-col items-center">
        <div className="text-primary font-title text-7xl pt-32 mb-12">
          ROLES
        </div>
        <div className='w-11/12 h-[5px] bg-primary'></div>
        <div className='flex mt-32 justify-around w-full bg-black'>
            {
                roles.map((role,idx)=>{
                    return <RolesCard label={role}/>
                })
            }
        </div>
    </div>
  )
}

export default Roles