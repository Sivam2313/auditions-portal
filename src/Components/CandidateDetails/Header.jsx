import React from 'react'
import BackArrow from '../Icons/BackArrow'

const Header = () => {
  return (
    <div className='flex justify-between w-2/3 mx-auto h-[8vh]'>
        <div className='h-full flex justify-center'>
          <button>
            <BackArrow />
          </button>
        </div>
        <div className='h-full flex justify-center'>
          <button className='p-3 border-outline rounded-full px-8 text-onSecondary border-2 font-head font-bold text-xl my-auto'>
            Logout
          </button>
        </div>
    </div>
  )
}

export default Header