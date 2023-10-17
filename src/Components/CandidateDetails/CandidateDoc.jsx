import React, { useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import Plus from '../Icons/Plus';
import Tab from './Tab';

const CandidateDoc = ({candidate}) => {

    const {user} = useAuth();
    const [setSelected, setSetSelected] = useState(0)

  return (
    <div className='w-7/12 mx-auto border-2 border-outline h-fit min-h-[600px] mt-6 rounded-xl'>
        <Tab candidate={candidate} />
        <div className='h-full'>
            <div className='flex justify-between items-center w-11/12 mx-auto h-1/6'>
                <div className='w-full p-3 text-onBackground font-head text-2xl font-semibold text-left mt-4'>
                    Round : {candidate?.currRound}
                </div>
                <div>
                    <button className='flex bg-primary itmes-center text-onPrimary rounded-lg p-2'>
                        <Plus />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CandidateDoc