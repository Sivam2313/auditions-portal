import React from 'react'
import Input from '../../Input'

const Links = ({setCC,setCF,cf,cc}) => {
  return (
    <div className='w-full lg:min-w-[800px]'>
        <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Links
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head text-xl lg:text-2xl text-left text-white'>
                CodeChef Handle
            </div>
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-onSurface2 pl-1 pb-2'>
                To set up your Codechef Account log on to https://www.codechef.com/
            </div>
            <Input setState={setCC} value={cc} type='text' />
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head text-xl lg:text-2xl text-left text-white'>
                Codeforces Handle
            </div>
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-onSurface2 pl-1 pb-2'>
                To set up your Codeforces Account log on to https://www.codeforces.com/
            </div>
            <Input setState={setCF} value={cf} type='text' />
        </div>
    </div>
  )
}

export default Links