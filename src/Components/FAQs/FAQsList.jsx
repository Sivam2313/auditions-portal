import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import {onValue,ref,push, set} from "firebase/database";
import { db,realTimeDB } from '../../db/firebase'
import FAQCard from './FAQCard'
import {motion} from 'framer-motion'
import Loader from '../Load/Loader'
import backgroungImg from '../../Assets/pageBackground.png'
import mobilepng from '../../Assets/mobile bg.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FAQsList = () => {
    const [FAQsList, setFAQsList] = useState([])
    const [isValidQuestion, setIsValidQuestion] = useState(true);
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(true);

    const handlePostQuestion = async () =>{
        try {
            if (!question.trim()) {
                setIsValidQuestion(false);
                return;
            }
            const newQuestionRef = await push(ref(realTimeDB, 'FAQs'));
            const newQuestionKey = newQuestionRef.key;
            
            if (newQuestionKey) {
                await set(ref(realTimeDB, `FAQs/${newQuestionKey}`), {
                    questionAsked: question,
                    answer: ''
                });
                setQuestion('');
                setIsValidQuestion(true);
                toast.success("Your question has been successfully posted, will be answered soon!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    theme: "colored",
                    className: "FAQ-toast"
                });
            }
        } catch (error) {
            toast.error("Error posting Question!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                theme: "colored",
                className: "FAQ-toast"
              });
        }

    }

    useEffect(() => {

        async function fetchData() {
            const query = ref(realTimeDB, "FAQs");
            return onValue(query, (snapshot) => {
                const data = snapshot.val();
                if (snapshot.exists()) {
                    const filteredList = Object.entries(data)
                        .filter(([key, value]) => value.answer !== '') 
                        .map(([key, value]) => ({ ...value, id: key }));
        
                    setFAQsList(filteredList);
                }
            });
        }

        fetchData()
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        

    }, [])

    const [mobview, setMobview] = useState(false)
    const variants = {
        closed: { height: "0px", overflow: "hidden", display:'flex !important' },
        open: {  display:'flex !important'},
    }
    
  return (
    loading ? <Loader /> :
    <motion.div layout className='w-full h-full'>
        <div className='hidden sm:flex'>
            <img src={backgroungImg} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0 hidden sm:flex" />
        </div>
        <motion.div className='flex sm:hidden w-full h-full '>
            <img src={mobilepng} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0" />
        </motion.div>
        <Navbar navbarBg={'#151632'} />
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className='pt-[15vh] z-10 absolute w-full'
        >
            <div>
                <div className='flex items-center justify-center mt-12'>
                    <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-primary font-semibold pb-3 lg:pb-6 border-outline '>
                    Have a Question ?
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='pt-12 lg:pl-3 pl-2 flex justify-center items-center w-full md:w-[64%]'>
                        <motion.div layout className="flex w-full justify-start">
                        <input
                            className="h-[6vh] min-h-[50px] w-full fomt-bold font-head bg-black text-xl pl-6 text-white bg-inputBackground border-outline focus:outline-none focus:border-primary "
                            type="text"
                            value={question}
                            placeholder="Ask your question"
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        </motion.div>

                        <motion.div layout className='flex justify-between font-head text-xl mr-1'>
                            <button  className='bg-primary p-3 rounded-full w-32 text-onPrimary rounded-tl-none rounded-bl-none' onClick={handlePostQuestion}>
                            Post
                            </button>
                        </motion.div>
                    </div>
                    { !isValidQuestion &&
                        <div className='font-head w-full md:w-[64%] text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                            Please enter your question
                        </div>
                    }
                </div>
            </div>

            <div>
                <div className='font-title lg:text-6xl text-5xl text-primary pt-6 '>
                   FAQs
                </div>
            </div>
            {
                FAQsList.length === 0? <div className='text-center text-2xl font-head font-semibold text-onSurface mt-20 z-10'>No Questions Yet!!</div> : 
                <div>
                    <ul className='flex flex-col justify-center items-center w-full pt-12 '>        
                        {
                            FAQsList.map((faq, index) => {
                                return(
                                    <FAQCard faq={faq} idx={index+1}/>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </motion.div>
        <ToastContainer />
    </motion.div>
  )
}

export default FAQsList