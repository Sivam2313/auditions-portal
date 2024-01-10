import React from 'react'

const DisplayCard = ({candidate}) => {
  return (
    <div className='rounded-lg w-[90%] md:w-7/12 mx-auto flex flex-col justify-start bg-surface p-6'>
        <div className='text-onBackground font-head text-2xl font-semibold text-left'>
            {candidate?.name}
        </div>
        <div className='text-onSurface font-head text-sm font-semibold text-left mt-6'>
            <span className='mr-3'>Applied For:</span>
            {candidate?.appliedFor.map((role,idx) => {
              return(
                <span className='mr-1' key={idx}>
                  {role}{(idx === candidate?.appliedFor.length-1) ? '.' : ','}
                </span>
              )
            })}
        </div>
        <div className='text-onSurface font-head text-sm font-semibold text-left mt-6'>
            <span className='mr-3'>Github Link:</span>
            <a href={candidate?.github} className='cursor-pointer' target='_blank'>{candidate?.github}</a>
        </div>
    </div>
  )
}

export default DisplayCard