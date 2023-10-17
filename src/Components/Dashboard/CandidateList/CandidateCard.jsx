import React from 'react'
import { useNavigate } from 'react-router-dom'

const CandidateCard = ({candidate,index}) => {
    const navigate = useNavigate();
  return (
    <div className='w-3/4 bg-surface p-6 mb-6 flex font-head items-center text-onSurface text-xl font-semibold rounded-xl'>
        <div className='pl-3'>
            {index}.
        </div>
        <div className='flex justify-between w-full items-center'>
            <div className='pl-3 h-full w-1/3 flex flex-col items-start'>
                <div className='pl-3'>
                    {candidate.name}
                </div>
                <div className='font-head text-onSecondary  text-sm pl-3 w-full flex justify-start'>
                    {candidate.appliedFor.map((role,idx) => {
                        return(
                            <span className='mr-1' key={idx}>
                                {role}{(idx === candidate.appliedFor.length-1) ? '.' : ','}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className='w-2/12 flex justify-end'>
                <button className='bg-primary text-onPrimary p-3 rounded-xl min-w-[100px] text-sm w-6/12' onClick={(e)=>{navigate('/candidate/'+candidate.id)}}>
                    Details
                </button>
            </div>
        </div>
    </div>
  )
}

export default CandidateCard    