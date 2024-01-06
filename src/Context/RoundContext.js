import { createContext, useEffect, useState } from "react";
import { db } from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";

const RoundContext = createContext();

export const RoundProvider = ({ children }) => {
  const [round, setRound] = useState([0,0,0]);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "Round", "RoundInfo");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRound(docSnap.data().details);
      }
    }
    fetchData();

  }, []);

  const contextData = {
    round: round,
    setRound: setRound,
  };


  return (
    <RoundContext.Provider value={contextData}>{children}</RoundContext.Provider>
  );
};

export default RoundContext;
