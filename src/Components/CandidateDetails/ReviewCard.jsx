import React from 'react'
import { useAuth } from '../../Hooks/useAuth'
import Delete from '../Icons/Delete';

const ReviewCard = ({review,idx,handelDelete}) => {

  
  
  const {email} = useAuth();
  return (
    <div className='flex min-h-[70px] h-auto justify-between mx-auto flex-col w-11/12 border-error border-2 rounded-lg mb-6'>
        <div className='flex jusitfy-between'>
          <div className='h-full w-full mb-0 text-white font-head text-left p-3 h-auto whitespace-pre-line'>
              {review.review}
          </div>
          <button className='bg-transparent h-[30px] pt-2 pr-2' onClick={(e)=>{handelDelete(review.id)}}
          style={{
            visibility: (email==review.email)? 'visible':'hidden'
          }}>
            <Delete />
          </button>
        </div>
        <div className='flex justify-end'>
            <div className='border-error border-2 text-white p-1 px-5 bg-error font-head font-semibold rounded-sm'>
                {review.email}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard