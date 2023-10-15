import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../db/firebase';
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import Input from '../SignUp/Input';
import GoogleIcon from '../Icons/GoogleIcon';
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../Hooks/useAuth';

const Login = () => {

    const navigate = useNavigate();
    const { userId } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(userId) {
            navigate("/");
        }
    })
       
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

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then((res) => {
            navigate("/");
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

  return (
    <div>
        <Navbar />
        <div className='flex justify-center w-full h-[90vh] items-center'>
            <div className='flex w-3/12 flex-col justify-center border-2 border-outline rounded-xl'>
                <div className='flex text-white justify-center items-center text-4xl font-bold mb-12 font-head mt-20'>
                    <ArrowRight />
                    Login /
                    <ArrowLeft />
                </div>
                <div>
                    <Input type="text" placeholder="Email" setState={setEmail}/>
                    <Input type="password" placeholder="Password" setState={setPassword}/>
                    <div className='w-full'>
                        <button className='w-5/6 bg-primary h-[6vh] font-head text-onPrimary font-semibold text-lg mb-3' onClick={onLogin}>
                            Login
                        </button>
                    </div>
                    <div className='w-10/12 mx-auto'>
                        <button className='w-full flex items-center justify-center bg-primary h-[6vh] text-onPrimary font-head font-semibold pt-3 pb-3 mb-12' > 
                            <GoogleIcon />
                            <div className='pl-3' onClick={signInWithGoogle}>
                                Login with Google
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login    