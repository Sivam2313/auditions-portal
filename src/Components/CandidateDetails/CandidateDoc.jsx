import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import Plus from '../Icons/Plus';
import Tab from './Tab';
import { onValue, ref } from 'firebase/database';
import { realTimeDB } from '../../db/firebase';
import { useRound } from '../../Hooks/useRound';
import CreateReview from './CreateReview';
import ReviewCard from './ReviewCard';

const CandidateDoc = ({candidate, candidateId}) => {

    const [active, setActive] = useState(0)
    const [reviews, setReviews] = useState(null)
    const {round} = useRound();
    const [show, setShow] = useState(false)
    const {userId} = useAuth();


    useEffect(() => {
        console.log(active);
        const query = ref(realTimeDB, "Reviews/"+active+"/"+round[active]+"/"+candidateId);
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                var list = []
                Object.values(data).map((project,idx) => {
                    list.push(project)
                });
                // console.log(list);
                setReviews(list);
            }
            else{
                setReviews([])
            }
        });
    }, [active,userId])

  return (
    <div className='w-7/12 mx-auto border-2 border-outline h-fit min-h-[600px] mt-6 rounded-xl'>
        <Tab active={active} setActive={setActive}/>
        <div className='h-full'>
            <div className='flex justify-between items-center w-11/12 mx-auto h-1/6'>
                <div className='w-full p-3 text-onBackground font-head text-2xl font-semibold text-left mt-4'>
                    Round : {round[active]}
                </div>
                <div>
                    <button className='flex bg-primary itmes-center text-onPrimary rounded-lg p-2' onClick={(e)=>{setShow(true)}}>
                        <Plus />
                    </button>
                </div>
            </div>
            <div className='mt-6'>
                {show && <CreateReview candidateId={candidateId} active={active} setShow={setShow}/>}
                <div className='pb-12'>
                    {
                        reviews?.map((review,idx)=>{
                            return (
                                <ReviewCard key={idx} review={review} idx={idx}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CandidateDoc