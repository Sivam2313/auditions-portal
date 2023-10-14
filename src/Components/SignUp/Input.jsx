import React from 'react'

const Input = ({setState,placeholder,type}) => {
  return (
    <input className='h-[6vh] w-5/6 fomt-bold font-head bg-surface font-head font-semibold pl-6 mb-6 text-white' type={type} placeholder={placeholder} onChange={(e) => setState(e.target.value)} />
  )
}

export default Input