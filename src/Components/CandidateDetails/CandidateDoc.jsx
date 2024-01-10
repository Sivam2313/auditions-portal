import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../Hooks/useAuth';
import Plus from '../Icons/Plus';
import Tab from './Tab';
import { onValue, ref, set } from 'firebase/database';
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
    const [pastReviews, setPastReviews] = useState([])


    function handelDelete(id){
        // console.log(id);
        const query = ref(realTimeDB, "Reviews/"+active+"/"+round[active]+"/"+candidateId+"/"+id);
        set(query,null).then(()=>{
            // console.log("deleted");
        })
        .catch(()=>{
            // console.log("error");
        })
    }

    useEffect(() => {
        function fetchReview(roundNo){
            const query = ref(realTimeDB, "Reviews/"+active+"/"+roundNo+"/"+candidateId);
            return onValue(query, (snapshot) => {
                const data = snapshot.val();
                if (snapshot.exists()) {
                    var list = []
                    Object.entries(data).map((project,idx) => {
                        var val = project[1];
                        val.id = project[0];
                        list.push(val)
                    });
                    // console.log(list);
                    let data = [...list]

                }
                else{
                    setReviews([])
                }
            });
        }
        
    }, [round,active])
    


    useEffect(() => {
        // console.log(active);
        const query = ref(realTimeDB, "Reviews/"+active+"/"+round[active]+"/"+candidateId);
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                var list = []
                Object.entries(data).map((project,idx) => {
                    var val = project[1];
                    val.id = project[0];
                    list.push(val)
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
    <div className='w-[90%] md:w-7/12 mx-auto border-2 border-outline h-fit min-h-[600px] mt-6 rounded-xl'>
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
                <motion.div layout className='pb-12'>
                    {
                        reviews?.map((review,idx)=>{
                            return (
                                <ReviewCard key={idx} review={review} idx={idx} handelDelete={handelDelete}/>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default CandidateDoc