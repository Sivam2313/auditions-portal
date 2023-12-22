import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../db/firebase'
import UpdateCards from './UpdateCards'
import {motion} from 'framer-motion'
import Loader from '../Load/Loader'

const UpdatesList = () => {
    const [updatesList, setUpdatesList] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData(){
            const querySnapshot = await getDocs(collection(db, "Updates"));
            setUpdatesList(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})) )
        }
        fetchData()
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        

    }, [])
    
  return (
    loading ? <Loader /> :
    <div className='w-full h-full'>
        <Navbar />
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className='pt-[8vh]'
        >
            <div>
                <div className='font-title lg:text-6xl text-5xl text-primary pt-6'>
                    Updates
                </div>
            </div>
            {
                updatesList.length === 0? <div className='text-center text-2xl font-head font-semibold text-onSurface mt-20'>No Updates Yet!!</div> : 
                <div>
                    <ul className='flex flex-col justify-center items-center w-full pt-12'>        
                        {
                            updatesList.map((update, index) => {
                                return(
                                    <UpdateCards update={update} idx={index+1}/>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </motion.div>
    </div>
  )
}

export default UpdatesList