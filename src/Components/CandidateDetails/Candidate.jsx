import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { realTimeDB } from '../../db/firebase';
import BackArrow from '../Icons/BackArrow';
import Header from './Header';
import DisplayCard from './DisplayCard';
import CandidateDoc from './CandidateDoc';

const Candidate = () => {

  const { candidateId } = useParams();
  const [candidate, setCandidate] = useState();

  useEffect(() => {
    // console.log("candidates/"+candidateId);
    const query = ref(realTimeDB, "candidates/"+candidateId);
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (snapshot.exists()) {
                setCandidate(data);
            }
        });
  }, [])

  return (
    <div className='w-full mid-h-screen h-fit pt-6 pb-12'>
      <Header />
      <div className='mt-10 w-full'>
        <DisplayCard candidate={candidate} candidateId={candidateId}/>
        <CandidateDoc candidate={candidate} candidateId={candidateId}/>
      </div>
    </div>
  )
}

export default Candidate