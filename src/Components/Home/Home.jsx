import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../db/firebase';

const Home = () => {
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home