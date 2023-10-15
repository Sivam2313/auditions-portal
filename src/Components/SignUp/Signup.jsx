import React, { useEffect } from 'react'
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import EmailSignUpSection from './EmailSignUpSection';
import GoogleSignUp from './GoogleSignUp';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Signup = () => {

    const { userId } = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{
        if(userId) {
            navigate("/");
        }
    })

  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center w-full h-screen pt-[8vh]'> 
            <div className='flex text-white items-center text-4xl font-bold pb-12 font-head mt-12'>
                <ArrowRight />
                Join Us /
                <ArrowLeft />
            </div>
            <div className='flex w-10/12 justify-evenly items-center'>
                <EmailSignUpSection />
                <GoogleSignUp />
            </div>
        </div>
    </div>
  )
}

export default Signup    