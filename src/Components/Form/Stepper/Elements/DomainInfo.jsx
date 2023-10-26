import React from 'react'
import Input from '../../Input'
import Message from './Message'
import  Textarea from '../../Textarea'

const DomainInfo = ({setGit,setDrive,appliedFor,drive,git,exp,setExp,stack,setStack}) => {
  return (
    <div className='w-full lg:min-w-[800px] min-h-[450px]'>
        <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Domain Info
        </div>
        {
            ((appliedFor?.indexOf("Web/App Development")<=-1) && (appliedFor?.indexOf("Graphics Design")<=-1)) && <Message />
        }
        <div className='pt-12 lg:pl-3 pl-6'
        style={{
            display: (appliedFor.indexOf("Web/App Development")<=-1)?"none":"block",
        }}
        >
            <div className='font-head mx-3 lg:mx-0 lg:text-2xl text-left text-white font-semibold lg:pb-6 border-b-2 mt-1 border-outline mb-5'>
            ➤ WebD/AppD :
            </div>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Link to your Github profile:
            </div>
            <Input setState={setGit} value={git} type='text' />
            <br></br>
            <div className='font-head pb-3 text-2xl text-left text-white'>
                What is your go-to tech stack:
            </div>
            <Input setState={setStack} value={stack} type='text' />
            <br></br>
            <div className='font-head pb-3 text-2xl text-left text-white'>
                Explain in brief about your best contribution to any project:
            </div>
            <Textarea setState={setExp} value={exp} rows={4}/>
        </div>
        <div className='pt-12 lg:pl-3 pl-6'
        style={{
            display: (appliedFor.indexOf("Graphics Design")<=-1)?"none":"block",
        }}
        >
            <div className='font-head mx-3 lg:mx-0 lg:text-2xl text-left text-white font-semibold lg:pb-6 border-b-2 mt-1 border-outline mb-5'>
            ➤ GFX :
            </div>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Link to your Artworks:
            </div>
            <Input setState={setDrive} value={drive} type='text' />
        </div>
    </div>
  )
}

export default DomainInfo