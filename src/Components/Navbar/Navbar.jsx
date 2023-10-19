import React from 'react'
import logo from '../../Assets/logo.png';
import { auth } from '../../db/firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

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
    <div className='w-full flex justify-center'>
        <div className='w-[80vw] h-[10vh] flex justify-center items-center pt-12 X'>
            <div className='text-onSecondary flex items-center font-head font-bold text-xl cursor-pointer' onClick={(e)=>{navigate('/')}}>
                <img src={logo} alt="logo" className='h-12 mr-2 inline-block' />
                RECursion
            </div>
            <div className='w-1/2 px-28 flex justify-evenly items-center'>
                <div className='mx-3 text-onSecondary font-head font-bold text-xl cursor-pointer'>
                    Rounds
                </div>
                <div className='mx-3 text-onSecondary font-head font-bold text-xl cursor-pointer'>
                    About
                </div>
                <div className='mx-3 text-onSecondary font-head font-bold text-xl cursor-pointer'>
                    Update
                </div>
            </div>
            <div className=''>
                <button className='p-3 border-outline rounded-full px-8 text-onSecondary border-2 font-head font-bold text-xl' onClick={handleLogout}>
                    {userId? "Logout" : "Admin Login"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar