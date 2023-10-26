import React from 'react'
import qrCode from '../../../../Assets/qr.png'
const ShowQr = () => {
  return (
    <div className='w-full lg:min-w-[800px] pt-12'>
        <div className='font-head text-center pl-3 mx-3 lg:mx-0 text-2xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline '>
            Best of Luck for the Auditions!
        </div>
        <div className='pt-12 lg:pl-3 pl-6'>
            <div className='font-head pb-3 lg:text-2xl text-xl text-left text-white text-center'>
                Scan this Qr code to Join the whatsapp Group
            </div>
            <img src={qrCode} alt="QR Code" className='w-[250px] pt-6 lg:pt-12 mx-auto'/>
        </div>
    </div>
  )
}

export default ShowQr