import React from 'react'
import Input from '../../Input'
import Message from './Message'

const DomainInfo = ({setGit,setDrive,appliedFor,drive,git}) => {
  return (
    <div className='w-full min-w-[800px] min-h-[450px]'>
        <div className='font-head pl-3 text-5xl text-left text-white font-semibold pb-6 border-b-2 border-outline'>
            Domain Info
        </div>
        {
            ((appliedFor.indexOf("Web/App Development")<=-1) && (appliedFor.indexOf("Graphics Design")<=-1)) && <Message />
        }
        <div className='pt-12 pl-3'
        style={{
            display: (appliedFor.indexOf("Web/App Development")<=-1)?"none":"block",
        }}
        >
            <div className='font-head pb-3 text-2xl text-left text-white'>
                Provide the link to your Github profile:
            </div>
            <Input setState={setGit} value={git} type='text' />
        </div>
        <div className='pt-12 pl-3'
        style={{
            display: (appliedFor.indexOf("Graphics Design")<=-1)?"none":"block",
        }}
        >
            <div className='font-head pb-3 text-2xl text-left text-white'>
                Provide the drive link to your artworks:
            </div>
            <Input setState={setDrive} value={drive} type='text' />
        </div>
    </div>
  )
}

export default DomainInfo