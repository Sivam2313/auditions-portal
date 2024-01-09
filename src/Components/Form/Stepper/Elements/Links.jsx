import React from 'react'
import Input from '../../Input'

const Links = ({setCC,setCF,cf,cc, setLinks, links, isValidcf, isValidcc}) => {
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
            { !isValidcc &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Please enter your valid codechef handle
            </div>}
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head text-xl lg:text-2xl text-left text-white'>
                Codeforces Handle
            </div>
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-onSurface2 pl-1 pb-2'>
                To set up your Codeforces Account log on to https://www.codeforces.com/
            </div>
            <Input setState={setCF} value={cf} type='text' />
            { !isValidcf &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Please enter your valid codeforces handle
            </div>}
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head text-xl lg:text-2xl text-left text-white'>
                Profile links on any other coding platforms (optional) :
            </div>
            <Input setState={setLinks} value={links} type='text' />
        </div>
    </div>
  )
}

export default Links