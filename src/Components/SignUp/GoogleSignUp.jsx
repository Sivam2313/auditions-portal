import React from 'react'
import GoogleIcon from '../Icons/GoogleIcon'
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../db/firebase';

const GoogleSignUp = () => {
    const navigate = useNavigate();
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
    <div className='flex w-2/5 h-full flex-col justify-center border-2 border-outline rounded-xl'>
        <div className='w-10/12 mx-auto mb-6'>
            <button className='w-full bg-primary h-[7vh] text-onPrimary font-head font-semibold' onClick={(e)=>{navigate('/login')}}> 
                Already have an account? Sign In
            </button>
        </div>
        <div className='w-10/12 mx-auto'>
            <button className='w-full flex items-center justify-center border-2 border-outline h-[7vh] text-surface font-head font-semibold pt-3 pb-3' > 
                <GoogleIcon />
                <div className='pl-3' onClick={signInWithGoogle}>
                    Sign In with Google
                </div>
            </button>
        </div>
    </div>
  )
}

export default GoogleSignUp