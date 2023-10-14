import React from 'react'
import logo from '../../Assets/logo.png';
const Navbar = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[80vw] h-[10vh] flex justify-center items-center pt-12'>
            <div className='text-onSecondary flex items-center font-head font-bold text-xl'>
                <img src={logo} alt="logo" className='h-12 mr-2 inline-block' />
                RECursion
            </div>
            <div className='w-1/2 px-28 flex justify-evenly items-center'>
                <div className='mx-3 text-onSecondary font-head font-bold text-xl'>
                    Rounds
                </div>
                <div className='mx-3 text-onSecondary font-head font-bold text-xl'>
                    About
                </div>
                <div className='mx-3 text-onSecondary font-head font-bold text-xl'>
                    Update
                </div>
            </div>
            <div className=''>
                <button className='p-3 border-outline rounded-full px-8 text-onSecondary border-2 font-head font-bold text-xl'>
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar