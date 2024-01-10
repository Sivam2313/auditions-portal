import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../Hooks/useAuth'
import { child, onValue, push, ref, set } from 'firebase/database';
import { realTimeDB } from '../../db/firebase';
import { useRound } from '../../Hooks/useRound';
import useAutosizeTextArea from '../../Hooks/useAutosizeTextArea';
import { motion } from 'framer-motion';

const CreateReview = ({active,candidateId,setShow}) => {

    const {round} = useRound();
    const { email } = useAuth();
    const [review, setReview] = useState('')
    const submitBtn = useRef(null)
    const textAreaRef = useRef(null);

    useAutosizeTextArea(textAreaRef.current, review);
    

    function handleSubmit() {
        // console.log(review);
        var data = review
        if(review===''){
            setShow(false)
            return;
        }
        const newPostKey = push(child(ref(realTimeDB), "Reviews/"+active+"/"+round[active]+"/"+candidateId+"/")).key;

        set(ref(realTimeDB, "Reviews/"+active+"/"+round[active]+"/"+candidateId+"/"+newPostKey), {
            email: email,
            review: data,
        });
        setShow(false)
    }
  

    useEffect(() => {
        const keyDownHandler = event => {
            if(event.key === 'Enter' && !event.shiftKey){
                event.preventDefault();
                submitBtn.current.click();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);


  return (
    <motion.div layout className='flex min-h-[150px] justify-between mx-auto flex-col w-11/12 border-error border-2 rounded-lg mb-6'
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{duration:0.4,delay:0.1}}>
        <div className='h-full mb-0 h-auto'>
            <textarea placeholder='write your review here' className='bg-transparent text-white font-head w-full p-4 focus:outline-none h-auto whitespace-pre-line' 
            onChange={(e)=>{setReview(e.target.value)}}
            ref={textAreaRef} />
        </div>
        <div className='flex justify-end'>
            <button ref={submitBtn} className='border-outline border-2 text-white p-1 px-5 font-head font-semibold m-3 rounded-sm hover:bg-white hover:text-black' onClick={(e)=>{handleSubmit()}}>
                Send
            </button>
        </div>
    </motion.div>
  )
}

export default CreateReview