import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../db/firebase';

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
    <div className='flex flex-col justify-center w-full h-screen items-center'>
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
            <button onClick={onLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login    