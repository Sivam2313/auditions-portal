import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoundUpdate from './RoundUpdate';

const DomainCard = ({candidate,index,selected}) => {
    const navigate = useNavigate();
    let isAdmin = true;
  return (
    <div className='w-full md:w-3/4 bg-surface p-2 md:p-6 mb-6 flex font-head items-center text-onSurface text-xl font-semibold rounded-xl'>
        <div className='pl-3'>
            {index}.
        </div>
        <div className='flex flex-col md:flex-row justify-between w-full items-center'>
            <div className='pl-0 md:pl-3 h-full w-full md:w-2/3 flex flex-col items-start'>
                <div className='pl-3'>
                    {candidate.name}
                </div>
                <div className='font-head text-onSecondary text-sm pl-3 w-full flex justify-start'>
                    {candidate.appliedFor.map((role,idx) => {
                        return(
                            <span className='mr-1' key={idx}>
                                {role}{(idx === candidate.appliedFor.length-1) ? '.' : ','}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className='md:flex md:items-center md:w-1/3 mt-4 md:mt-0'>
                <button className='bg-primary text-onPrimary p-3 rounded-xl min-w-[100px] text-sm w-6/12 md:w-auto hover:bg-onPrimary hover:text-white mr-4 md:mr-0 mb-2 md:mb-0' onClick={(e)=>{navigate('/candidate/'+candidate.id)}}>
                    Details
                </button>
            </div>
            {isAdmin && <RoundUpdate candidate={candidate} index={index} domainSelected={selected}/>}
        </div>
    </div>
  )
}

export default DomainCard  