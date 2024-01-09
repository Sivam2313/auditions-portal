import React from 'react'

const Sidebar = ({links,selected,setSelected}) => {
    
  return (
    // <div className='w-1/6 min-w-[300px] bg-secondary h-screen flex flex-col fixed justify-center'>
    //         {
    //             links.map((link, index) => {
    //                 return(
    //                     <div key={index} className='pl-6 w-full h-[10vh] flex items-center border-surfaceOutline border-b-2 font-head font-semibold text-onSurface text-xl cursor-pointer'
    //                     style={{
    //                         borderTop: (index === 0) ? '2px solid #3f484b' : 'none',
    //                     }}
    //                     onClick={()=>{setSelected(index)}}
    //                     >
    //                         {link.name}
    //                     </div>
    //                 )
    //             })
    //         }
    // </div>

    <div className=' hidden lg:flex w-1/6 min-w-[300px] bg-secondary h-screen flex flex-col fixed justify-center'>
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





    // <div className='lg:flex lg:flex-col lg:w-1/6 lg:min-w-[300px]'>
    //   {/* For large screens (sidebar layout) */}
    //   <div className='hidden lg:block bg-secondary h-screen flex flex-col fixed'>
    //     {links.map((link, index) => (
    //       <div
    //         key={index}
    //         className={`pl-6 w-full h-[10vh] flex items-center border-surfaceOutline border-b-2 font-head font-semibold text-onSurface text-xl cursor-pointer ${index === 0 ? 'border-t-2 border-surfaceOutline' : ''} ${selected === index ? 'bg-gray-300' : ''}`}
    //         onClick={() => { setSelected(index) }}
    //       >
    //         {link.name}
    //       </div>
    //     ))}
    //   </div>

    //   {/* For small screens (navbar layout) */}
    //   <div className='lg:hidden bg-secondary w-full'>
    //     <div className='flex justify-around'>
    //       {links.map((link, index) => (
    //         <div
    //           key={index}
    //           className={`flex items-center h-[10vh] font-head font-semibold text-onSurface text-xl cursor-pointer ${selected === index ? 'bg-gray-300' : ''}`}
    //           onClick={() => { setSelected(index) }}
    //         >
    //           {link.name}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
  
}

export default Sidebar