import React from 'react'

const Tab = ({active,setActive}) => {
    const appliedFor = ['Problem Setting and Teaching', 'Graphics Design', 'Web Development']
  return (
    <div className='flex w-full border-b-2 border-outline'>
        {
            appliedFor.map((role,idx) => {
                return(
                    <div className='rounded-t-xl bg-secondary p-5'>
                        {role}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tab