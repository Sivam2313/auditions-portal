import React from 'react'
import BackArrow from '../Icons/BackArrow'
import { useAuth } from '../../Hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../db/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const {userId,setuserId} = useAuth();
  const navigate = useNavigate();



  
  const handleLogout = () => {
      if(userId){
          signOut(auth).then(() => {
              setuserId(null);
              // console.log("Signed out successfully")
              navigate('/login')
          }).catch((error) => {
              // console.log(error);
          });
      }
      else{
          navigate('/login')
      } 
  }


  return (
    <div className='flex justify-between w-2/3 mx-auto h-[8vh]'>
        <div className='h-full flex justify-center'>
          <button onClick={(e)=>{navigate(-1)}}> 
            <BackArrow />
          </button>
        </div>
        <div className='h-full flex justify-center'>
          <button className='p-3 border-outline rounded-full px-8 text-onSecondary border-2 font-head font-bold text-xl my-auto' onClick={handleLogout}>
            Logout
          </button>
        </div>
    </div>
  )
}

export default Header