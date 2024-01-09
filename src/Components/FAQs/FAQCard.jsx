import React from 'react'
import { Link } from 'react-router-dom'

const FAQCard = ({ faq, idx }) => {
  return (
    <div className='font-title text-xl lg:pl-6 lg:w-10/12 w-11/12 mb-12 text-onSecondary bg-durface text-left p-3 border rounded-md backdrop-blur-lg' >
        <div className='font-title sm:text-2xl text-xl pl-6 flex justify-between'>
            <div>
                {idx}.{ " "+faq.questionAsked }
            </div>
            <div className='font-title text-outline sm:text-lg text-sm'>
                {faq.createdAt}
            </div>
        </div>
        <div className='pl-6 pt-3 sm:text-lg text-sm'>
            {faq.answer}
        </div>
    </div>
  )
}

export default FAQCard