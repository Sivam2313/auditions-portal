
import React from 'react'
import Input from '../../Input'

const Contacts = ({setPmail,setImail,setPhone}) => {
  return (
    <div className='w-full min-w-[800px]'>
        <div className='font-head pl-3 text-5xl text-left text-white font-semibold pb-6 border-b-2 border-outline'>
            Contacts
        </div>
        <div className='pt-12 pl-3'>
            <div className='font-head pb-3 text-2xl text-left text-white'>
                Personal Email
            </div>
            <Input setState={setPmail} type='text' />
        </div>
        <div className='pt-12 pl-3'>
            <div className='font-head pb-3 text-2xl text-left text-white'>
                Institute Email
            </div>
            <Input setState={setImail} type='text' />
        </div>
        <div className='pt-12 pl-3'>
            <div className='font-head pb-3 text-2xl text-left text-white'>
                Phone Number
            </div>
            <Input setState={setPhone} type='text' />
        </div>
        
    </div>
  )
}

export default Contacts