
import React from 'react'
import Input from '../../Input'
import { motion } from 'framer-motion';

const Contacts = ({setPmail,setImail,setPhone,imail,pmail,phone,isValidpmail,isValidimail,isValidphone}) => {
  return (
    <motion.div 
        initial={{x:50, opacity:0}} animate={{x:0, opacity:1}}
        className='w-full lg:min-w-[800px]'>
        <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Contacts
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Personal Email
            </div>
            <Input setState={setPmail} value={pmail} type='text' />
            { !isValidpmail &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Field cannot be empty
            </div>}
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Institute Email
            </div>
            <Input setState={setImail} value={imail} type='text' />
            { !isValidimail &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Please enter your institute mail id
            </div>}
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Phone Number
            </div>
            <Input setState={setPhone} value={phone} type='text' />
            { !isValidphone &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Field cannot be empty
            </div>}
        </div>
    </motion.div>
  )
}

export default Contacts