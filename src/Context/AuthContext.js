import { createContext, useEffect, useState } from "react";
import { auth } from "../db/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setuserId] = useState(null);

  const contextData = {
    userId: userId,
    setuserId: setuserId,
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setuserId(uid);
      } else {
        setuserId(null);
      }
    });
    // return () => clearInterval(interval);
  }, [auth]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
