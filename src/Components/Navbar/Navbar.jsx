import React, { useState } from 'react'
import {motion} from 'framer-motion';
import logo from '../../Assets/logo.png';
import { auth } from '../../db/firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Hamburger from '../Icons/Hamburger';
const Navbar = () => {

    const {userId,setuserId} = useAuth();
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate();

    const variants = {
        closed: { height: "0px", overflow: "hidden" },
        open: { height: "90vh"},
    }

    const handleLogout = () => {
        setShowMenu(false)
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

    function toggle(){
        var value = showMenu;
        setShowMenu(!value)
    }

  return (
    <motion.div layout className='w-screen fixed bg-background flex flex-col justify-center'>
        <div className='w-full border-b-2 lg:border-none border-outline px-3 h-[10vh] flex justify-between lg:justify-center items-center pt-12 X py-10'>
            <div className='text-onSurface2 flex items-center font-head font-bold text-xl lg:text-xl cursor-pointer' onClick={(e)=>{navigate('/')}}>
                <img src={logo} alt="logo" className='h-6 lg:h-12 mr-2 inline-block' />
                RECursion
            </div>
            <div className='w-1/2 px-28 flex justify-evenly items-center hidden lg:flex'>
                <div className='mx-3 text-onSurface2 font-head font-bold text-xl cursor-pointer'>
                    Rounds
                </div>
                <div className='mx-3 text-onSurface2 font-head font-bold text-xl cursor-pointer'>
                    About
                </div>
                <div className='mx-3 text-onSurface2 font-head font-bold text-xl cursor-pointer'>
                    Update
                </div>
            </div>
            <div className='hidden lg:flex'>
                <button className='p-1 lg:p-3 border-outline rounded-full px-3 lg:px-8 text-onSurface2 border-2 font-head font-bold lg:text-xl' onClick={handleLogout}>
                    {userId? "Logout" : "Admin Login"}
                </button>
            </div>
            <button className='lg:hidden' onClick={(e)=>{toggle()}}>
                <Hamburger />
            </button>
        </div>
        <motion.div className='bg-background flex lg:hidden w-full flex flex-col justify-between '
        animate={(showMenu)? "open" : "closed"}
        variants={variants}
        >
            <div> 
                <div className='mx-3 text-onSurface2 border-b-[1px] text-left py-5 font-head font-bold text-xl cursor-pointer'>
                    Home
                </div>
                <div className='mx-3 text-onSurface2 border-b-[1px] text-left py-5 font-head font-bold text-xl cursor-pointer'>
                    Rounds
                </div>
                <div className='mx-3 text-onSurface2 border-b-[1px] text-left py-5 font-head font-bold text-xl cursor-pointer'>
                    About
                </div>
                <div className='mx-3 text-onSurface2 border-b-[1px] border-outline text-left py-5 font-head font-bold text-xl cursor-pointer'>
                    Update
                </div>
            </div>
            <button onClick={handleLogout} className='w-11/12 text-xl mb-12 border-2 mx-auto p-3 rounded-lg border-outline font-head text-onSurface2 font-semibold'>
                Admin Login
            </button>
        </motion.div>
    </motion.div>
  )
}

export default Navbar