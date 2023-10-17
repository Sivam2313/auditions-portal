import React from 'react'

const Tab = ({candidate}) => {
  return (
    <div className='flex w-full border-b-2 border-outline'>
        {
            candidate?.appliedFor?.map((role,idx) => {
                return(
                    <div className='w-2/12 rounded-t-xl bg-secondary p-5'>
                        {role}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tab