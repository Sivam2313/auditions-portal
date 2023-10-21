import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Logout from './Logout'
import CandidateList from './CandidateList/CandidateList';
import DomainList from './DomainList/DomainList';

const Dashboard = () => {
    const [selected, setSelected] = useState(0);
    const domains=[ "","Web Developement","Design","Teaching and PS"];
    const links = [
    {
        name:'Candidate List',
        component: <CandidateList />
    },
    {
        name:'Web Development',
        component: <DomainList domains={domains} selected={selected} />
    },
    {
        name:'Design',
        component: <DomainList domains={domains} selected={selected} />
    },
    {
        name:'Teaching and PS',
        component: <DomainList domains={domains} selected={selected} />
    }]
  return (
    <div className='flex'>
        <Sidebar links={links} selected={selected} setSelected={setSelected}/>
        <div className='w-5/6 ml-[16.66%] h-full min-h-screen'>
            <Logout />
            <div className='mt-20'>
                {links[selected].component}
            </div>
        </div>
    </div>
  )
}

export default Dashboard