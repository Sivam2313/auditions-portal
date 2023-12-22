import React from 'react'

const UpdateCards = ({ update, idx }) => {
  return (
    <div className='font-title text-xl lg:pl-6 lg:w-10/12 w-11/12 mb-12 text-onSecondary bg-durface text-left'>
        <div className='font-title sm:text-2xl text-xl pl-6 flex justify-between'>
            <div>
                {idx}.{ " "+update.title }
            </div>
            <div className='font-title text-outline sm:text-lg text-sm'>
                {update.createdAt}
            </div>
        </div>
        <div className='pl-6 pt-3 sm:text-lg text-sm'>
            {update.message}
        </div>
    </div>
  )
}

export default UpdateCards