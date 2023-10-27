import React from 'react'
import Input from '../../Input'
import Select from '../../Select'
import Option from '../../Option'

const Basic = ({name,setName,branch,setBranch,roll,setRoll, isValidname, setIsValidname, isValidroll, setIsValidroll, isValidbranch, setIsValidbranch}) => {
  return (
    <div className='w-full lg:min-w-[800px]'>
        <div className='font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Basic Info
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Name
            </div>
            <Input setState={setName} value={name} type='text' />
            { !isValidname &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Field cannot be empty
            </div>}
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white'>
                Roll Number
            </div>
            <Input setState={setRoll} value={roll} type='text' />
            { !isValidroll &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Field cannot be empty
            </div>}
        </div>
        <div className='pt-16 lg:pl-3 pl-6'>
            <Select value={branch} setState={setBranch}>
                <Option value="Select Branch">Select Branch</Option>
                <Option value="Biotechnology">Biotechnology</Option>
                <Option value="Chemical">Chemical Engineeirng</Option>
                <Option value="Chemistry">Chemistry</Option>
                <Option value="Civil">Civil Engineering</Option>
                <Option value="Computer Science">
                    Computer Science & Engineering
                </Option>
                <Option value="Electrical">Electrical Engineering</Option>
                <Option value="Electronics">
                    Electronics & Communication Engineering
                </Option>
                <Option value="Mechanical">Mechanical Engineering</Option>
                <Option value="Metallurgy">
                    Metallurgical & Materials Engineering
                </Option>
            </Select>
            { !isValidbranch &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Select your branch
            </div>}
        </div>
    </div>
  )
}

export default Basic