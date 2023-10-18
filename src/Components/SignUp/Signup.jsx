import React, { useEffect, useState } from 'react'
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import EmailSignUpSection from './EmailSignUpSection';
import GoogleSignUp from './GoogleSignUp';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';

const Signup = () => {

    const { userId } = useAuth();
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate();
    const [message, setMessage] = useState("")


    useEffect(()=>{
        if(userId) {
            navigate("/dashboard");
        }
    })

  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center w-full h-screen pt-[8vh]'> 
            {/* <div className='flex text-white items-center text-4xl font-bold pb-12 font-head mt-12'>
                <ArrowRight />
                Join Us /
                <ArrowLeft />
            </div> */}
            <div className='flex w-10/12 justify-evenly items-center'>
                <EmailSignUpSection setShowAlert={setShowAlert} setMessage={setMessage}/>
                {/* <GoogleSignUp /> */}
            </div>
            {showAlert && <Alert message={message} setShowAlert={setShowAlert}/>}
        </div>
    </div>
  )
}

export default Signup    