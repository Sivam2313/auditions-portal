import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../db/firebase.js";

const RequireAuth = () => {
  const { setuserId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserId(user.uid);
        console.log("uid", user.uid);
      } else {
        navigate('/signup')
      }
    });
  }, []);


  return <Outlet />;
};

export default RequireAuth;
