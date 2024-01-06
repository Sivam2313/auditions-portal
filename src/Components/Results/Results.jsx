import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import { doc, getDoc } from 'firebase/firestore'
import { db, realTimeDB } from '../../db/firebase'
import Alert from '../Alert/Alert'
import { onValue, ref } from 'firebase/database'

const Results = () => {
  const [canididates, setCandidates] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const [showAlert, setShowAlert] = useState(false)
  useEffect(() => {
    async function fetchCandidates() {
      const docRef = doc(db, "Round", "RoundInfo");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const currentRound = docSnap.data().details;
        console.log(docSnap.data());
        const query = ref(realTimeDB, "candidates");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          if (snapshot.exists()) {
            var list = [];
            Object.values(data).map((project, idx) => {
              project.id = Object.keys(data)[idx];
              list.push(project);
            });
            list = list.filter((item)=>{
              let flag = false
              if(item.rounds['Graphics Design'].currRound>=currentRound[1] || item.rounds['Web Development'].currRound>=currentRound[2] || item.rounds['Teaching and Problem Setting'].currRound>=currentRound[0]){
                flag = true;
              }
              return flag;
            })
            console.log(list);
            setCandidates(list);
          }
        });
      } else {
        // docSnap.data() will be undefined in this case
        setShowAlert(true)
        setErrorMessage("NetWork Error");
      }
      
    }
    fetchCandidates();
  }, [])
  
  
  return (
    <div>
      <Navbar/>
      {showAlert && <Alert message={errorMessage} setShowAlert={setShowAlert}/>}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className='pt-[9vh]'
        >
            <div>
                <div className='font-title lg:text-6xl text-5xl text-primary pt-6 mb-24'>
                    Results
                </div>
            </div>
            <div className='flex flex-col justify-center items-center font-sub font-bold text-xl text-onSecondary mt-6'>
              <div className='flex justify-between text-primary lg:w-1/4 w-10/12'>
                <div>
                  Name
                </div>
                <div>
                  Roll
                </div>
              </div>
              {
                canididates.map((candidate, idx) => {
                  return(
                    <div className='pt-2 flex justify-between lg:w-1/4 w-10/12'>
                      <div>
                        {candidate.name}
                      </div>
                      <div>
                        {candidate.roll}
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </motion.div>
    </div>
  )
}

export default Results