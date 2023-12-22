import React from 'react'

const UpdateCards = ({ message, idx }) => {
  return (
    <div className='font-title text-xl pl-6 w-10/12 mb-3 text-onSecondary text-left'>
        {idx}.{ " "+message }
    </div>
  )
}

export default UpdateCards