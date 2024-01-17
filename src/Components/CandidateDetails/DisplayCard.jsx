import React from 'react'

const DisplayCard = ({candidate}) => {
  console.log(candidate);
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
        <div className='text-onSurface font-head text-sm font-semibold text-left mt-4'>
            <span className='mr-3'>Github Link:</span>
            <a href={candidate?.github} className='cursor-pointer' target='_blank'>{candidate?.github}</a>
        </div>
        <div className='text-onSurface font-head text-sm font-semibold text-left mt-4'>
            <span className='mr-3'>Codeforces Link:</span>
            <a href={candidate?.cf} className='cursor-pointer' target='_blank'>{candidate?.cf}</a>
        </div>
        <div className='text-onSurface font-head text-sm font-semibold text-left mt-4'>
            <span className='mr-3'>Codechef Link:</span>
            <a href={candidate?.cc} className='cursor-pointer' target='_blank'>{candidate?.cc}</a>
        </div>
        <div className='text-onSurface font-head text-sm font-semibold text-left mt-4'>
            <span className='mr-3'>Drive Link:</span>
            <a href={candidate?.drive} className='cursor-pointer' target='_blank'>{candidate?.drive}</a>
        </div>
        <div className='flex text-onSurface font-head text-sm font-semibold text-left mt-4'>
            <span className='mr-3'>Personal Email:</span>
            <div>{candidate?.pmail}</div>
        </div>
        <div className='flex text-onSurface font-head text-sm font-semibold text-left mt-4'>
            <span className='mr-3'>Institute Email:</span>
            <div>{candidate?.imail}</div>
        </div>
        <div className='text-onSurface font-head text-sm font-semibold text-left w-full max-w-[500px] flex justify-between mt-4'>
          <div className='flex'>
            <div> Roll No: </div>
            <div> {candidate?.roll} </div>
          </div>
          <div className='flex'>
            <div> Phone No: </div>
            <div> {candidate?.phone} </div>
          </div>
        </div>
    </div>
  )
}

export default DisplayCard