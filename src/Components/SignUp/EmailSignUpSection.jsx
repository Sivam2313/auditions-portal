import React, { useState } from 'react'
import Input from './Input';
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../db/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { set } from 'lodash';

const EmailSignUpSection = ({setShowAlert,setMessage}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
       
    const onLogin = (e) => {
        if(password !== confirmPassword) {
            setMessage("Passwords did not match");
            setShowAlert(true);
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            // console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorMessage);
            setShowAlert(true);
        });
       
    }
  return (
    <div className='flex w-2/5 flex-col h-full justify-center border-2 border-outline rounded-xl'>
            <div className='flex text-white items-center text-4xl font-bold mb-12 font-head mt-24 pl-12'>
                <ArrowRight />
                Sign Up /
                <ArrowLeft />
            </div>
            <div>
                <Input type="text" placeholder="Email" setState={setEmail}/>
                <Input type="password" placeholder="Password" setState={setPassword}/>
                <Input type="password" placeholder="Confirm Password" setState={setConfirmPassword}/>
                <div className='w-full'>
                <button className='w-5/6 bg-primary h-[6vh] font-head text-onPrimary font-semibold text-lg mt-6 mb-24' onClick={onLogin}>
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default EmailSignUpSection