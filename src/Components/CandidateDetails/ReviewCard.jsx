import React from 'react'
import { useAuth } from '../../Hooks/useAuth'

const ReviewCard = ({review,idx}) => {
    const { email } = useAuth();
  return (
    <div key={idx} className='flex min-h-[70px] h-auto justify-between mx-auto flex-col w-11/12 border-error border-2 rounded-lg mb-6'>
        <div className='h-full w-full mb-0 text-white font-head text-left p-3 h-auto whitespace-pre-line'>
            {review.review}
        </div>
        <div className='flex justify-end'>
            <div className='border-error border-2 text-white p-1 px-5 bg-error font-head font-semibold rounded-sm'>
                {email}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard