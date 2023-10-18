import React from 'react'
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../db/firebase';

const Logout = () => {
    const {userId,setuserId} = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        
        if(userId){
            signOut(auth).then(() => {
                setuserId(null);
                console.log("Signed out successfully")
                navigate('/login')
            }).catch((error) => {
                console.log(error);
            });
        }
        else{
            navigate('/login')
        }
        
    }
  return (
    <div className='w-full h-[6vh] flex justify-end pr-12 mt-12'>
        <button className='p-3 border-outline rounded-full px-8 text-onSecondary border-2 font-head font-bold text-xl' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout