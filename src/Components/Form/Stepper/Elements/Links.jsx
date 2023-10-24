import React from 'react'
import Input from '../../Input'

const Links = ({setCC,setCF,cf,cc}) => {
  return (
    <div className='w-full min-w-[800px]'>
        <div className='font-head pl-3 text-5xl text-left text-white font-semibold pb-6 border-b-2 border-outline'>
            Links
        </div>
        <div className='pt-12 pl-3'>
            <div className='font-head text-2xl text-left text-white'>
                CodeChef Handle
            </div>
            <div className='font-head text-sm text-left text-onSurface2 pl-1 pb-2'>
                To set up your Codechef Account log on to https://www.codechef.com/
            </div>
            <Input setState={setCC} value={cc} type='text' />
        </div>
        <div className='pt-12 pl-3'>
            <div className='font-head text-2xl text-left text-white'>
                Codeforces Handle
            </div>
            <div className='font-head text-sm text-left text-onSurface2 pl-1 pb-2'>
                To set up your Codeforces Account log on to https://www.codeforces.com/
            </div>
            <Input setState={setCF} value={cf} type='text' />
        </div>
    </div>
  )
}

export default Links