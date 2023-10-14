import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../db/firebase';
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import Input from '../SignUp/Input';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

  return (
    <div className='flex justify-center w-full h-[90vh] items-center'>
        <div className='flex w-3/12 flex-col justify-center border-2 border-outline rounded-xl'>
                <div className='flex text-white justify-center items-center text-4xl font-bold mb-12 font-head mt-24'>
                    <ArrowRight />
                    Login /
                    <ArrowLeft />
                </div>
                <div>
                    <Input type="text" placeholder="Email" setState={setEmail}/>
                    <Input type="password" placeholder="Password" setState={setPassword}/>
                    <div className='w-full'>
                    <button className='w-5/6 bg-primary h-[6vh] font-head text-onPrimary font-semibold text-lg mt-6 mb-24' onClick={onLogin}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login    