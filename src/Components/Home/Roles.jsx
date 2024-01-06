import React from 'react'
import RolesCard from './RolesCard'
import green from '../../Assets/greenery.svg';
import blue from '../../Assets/blue.svg';
import yellow from '../../Assets/yellow.svg';
import brown from '../../Assets/brown.svg';
import appweb from '../../Assets/appweb.svg';
import ps from '../../Assets/ps.svg';
import teaching from '../../Assets/teaching.svg';
import gd from '../../Assets/gd.svg';

const Roles = () => {
    const roles = [{
      key: 1,
      title: "Teaching",
      background: blue,
      image: teaching,
    },
    {
      key: 2,
      title: "Problem Setting",
      background: yellow,
      image: ps,
      color:"#06A8F9",
    },
    {
      key: 3,
      title: "Web/App Development",
      background: green,
      image: appweb,
    },
    {
      key: 4,
      title: "Graphics Design",
      background: brown,
      image: gd,
    },
  ]
  return (
    <div className="lg:h-[150vh] pb-12 w-screen flex flex-col bg-black items-center">
        <div className="text-primary font-title text-5xl lg:text-7xl pt-32 lg:mb-12 mb-6">
          ROLES
        </div>
        {/* <div className='w-11/12 h-[5px] bg-primary'></div> */}
        <div className='flex h-fit  lg:h-fit lg:flex-row flex-col mt-6 lg:mt-32 justify-evenly items-center w-full bg-black'>
            {
                roles.map((role,idx)=>{
                    return (
                      <div>
                        <RolesCard label={role.title} timeout={(idx+1)*0.5} background={role.background} image={role.image}/>
                      </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Roles