import React, { useEffect, useState } from 'react'
import CandidateCard from './CandidateCard'
import { onValue, ref } from 'firebase/database';
import { db } from '../../../db/firebase';

const CandidateList = () => {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const query = ref(db, "candidates");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                var list = []
                Object.values(data).map((project) => {
                    list.push(project)
                });
                setCandidates(list);
            }
        });
    }, []);


  return (
    <div className='w-full h-full pl-32'>
        <div className='font-head font-semibold text-5xl text-onSurface flex justify-start'>
            Candidate List
        </div>
        <div className='w-full mt-16'>
            {
                candidates.map((candidate, index) => {
                    return(
                        <CandidateCard candidate={candidate} index={index+1} key={index} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default CandidateList