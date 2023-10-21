import React from 'react'

const Sidebar = ({links,selected,setSelected}) => {
    
  return (
    <div className='w-1/6 min-w-[300px] bg-secondary h-screen flex flex-col fixed justify-center'>
            {
                links.map((link, index) => {
                    return(
                        <div key={index} className='pl-6 w-full h-[10vh] flex items-center border-surfaceOutline border-b-2 font-head font-semibold text-onSurface text-xl cursor-pointer'
                        style={{
                            borderTop: (index === 0) ? '2px solid #3f484b' : 'none',
                        }}
                        onClick={()=>{setSelected(index)}}
                        >
                            {link.name}
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Sidebar