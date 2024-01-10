import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../db/firebase';
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import Input from '../SignUp/Input';
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../Hooks/useAuth';
import Alert from '../Alert/Alert';
import {motion} from 'framer-motion';

const Login = () => {

    const navigate = useNavigate();
    const { userId } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const loginBtn = useRef(null)

    useEffect(()=>{
        if(userId) {
            navigate("/dashboard");
        }
    })
       
    const onLogin = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard")
            // console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorMessage);
            setShowAlert(true);
        });
       
    }


    useEffect(() => {
        const keyDownHandler = event => {
            if(event.key === 'Enter' && !event.shiftKey){
                event.preventDefault();
                loginBtn.current.click();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5, duration:2}}
    >
        <Navbar />
        <div className='flex justify-center w-full h-[90vh] items-center'>
            <div className='flex lg:w-3/12 lg:min-w-[500px] mx-3 min-h-[500px] flex-col justify-center border-2 border-outline rounded-xl'>
                <div className='flex text-white justify-center items-center text-2xl lg:text-4xl font-bold mb-12 font-head mt-20'>
                    <ArrowRight/>
                    Admin Login /
                    <ArrowLeft />
                </div>
                <div>
                    <Input type="text" placeholder="Email" setState={setEmail}/>
                    <Input type="password" placeholder="Password" setState={setPassword}/>
                    <div className='w-full pb-12'>
                        <button ref={loginBtn} className='w-5/6 bg-primary h-[6vh] font-head text-onPrimary font-semibold text-lg mb-3' onClick={onLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {showAlert && <Alert message={message} setShowAlert={setShowAlert}/>}
    </motion.div>
  )
}

export default Login    