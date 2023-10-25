
import React from 'react'
import Input from '../../Input'

const Contacts = ({setPmail,setImail,setPhone,imail,pmail,phone}) => {
  return (
    <div className='w-full lg:min-w-[800px]'>
        <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Contacts
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Personal Email
            </div>
            <Input setState={setPmail} value={pmail} type='text' />
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Institute Email
            </div>
            <Input setState={setImail} value={imail} type='text' />
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Phone Number
            </div>
            <Input setState={setPhone} value={phone} type='text' />
        </div>
    </div>
  )
}

export default Contacts