import React from 'react'

const Alert = ({message,setShowAlert}) => {
  return (
    <div class="flex-1 justify-start fixed right-6 bottom-0 bg-error rounded-lg w-2/12">
        <div className='flex justify-start pl-6 text-lg pt-3 font-head text-onError font-semibold'>
            Error
        </div>
        <div className='text-sm font-head text-onError font-semibold text-left pl-6'>
            {message}
        </div>
        <div className='flex justify-start pt-3 pb-3'>
            <button className='text-sm font-head text-onError font-semibold text-left pl-6' onClick={(e)=>{setShowAlert(false)}}>
                Dismiss
            </button>
        </div>
    </div>
  )
}

export default Alert