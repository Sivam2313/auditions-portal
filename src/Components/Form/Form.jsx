import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Stepper from './Stepper/Stepper'
import Buttons from './Buttons'
import Basic from './Stepper/Elements/Basic'
import Contacts from './Stepper/Elements/Contacts'
import Links from './Stepper/Elements/Links'
import Domains from './Stepper/Elements/Domains'

import {motion} from 'framer-motion'
import DomainInfo from './Stepper/Elements/DomainInfo'
import background from '../../Assets/homepage_gif.gif'
import { ref, set } from 'firebase/database'
import { realTimeDB } from '../../db/firebase'
import Loader from '../Load/Loader'
import ShowQr from './Stepper/Elements/ShowQr'

const Form = () => {

  const [active, setActive] = useState(0)
  const [name, setName] = useState("")
  const [roll, setRoll] = useState("")
  const [branch, setBranch] = useState("")
  const [pmail, setPmail] = useState("");
  const [imail, setImail] = useState("");
  const [phone, setPhone] = useState("");
  const [cc, setCC] = useState("");
  const [cf, setCF] = useState("");
  const [appliedFor, setAppliedFor ] = useState([])
  const [slidervalue,setSlidervalue] = useState([1,1,1,1])
  const [git, setGit] = useState("")
  const [exp, setExp] = useState("")
  const [stack, setStack] = useState("")
  const [drive, setDrive] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [loading, setLoading] = useState(false)

  function submitHandler(){
    setLoading(true);
    console.log(name);
    set(ref(realTimeDB, "candidates/"+phone), {
      name:name,
      roll:roll,
      branch:branch,
      pmail:pmail,
      imail:imail,
      phone:phone,
      cc:cc,
      cf:cf,
      appliedFor:appliedFor,
      github:git,
      drive:drive,
      currRound:[0,0,0],
      exp:exp,
      stack:stack,
    }).then(()=>{
      setLoading(false);
      setActive(5);
      console.log("Candidate Added");
    }).catch((error)=>{
      console.log(error);
    });
  }

  const roles = ['Teaching','Problem Setting','Web/App Development','Graphics Design']
  const steps = [{
        label:"Basic Info",
        component:<Basic setName={setName} name={name} setRoll={setRoll} roll={roll} setBranch={setBranch} branch={branch}/>
    },{
        label:"Contacts",
        component:<Contacts setImail={setImail} imail={imail} setPmail={setPmail} pmail={pmail} setPhone={setPhone} phone={phone}/>
    },{
        label:"Links",
        component:<Links setCC={setCC} setCF={setCF} cc={cc} cf={cf}/>
    },{
        label:"Domain",
        component:<Domains roles={roles} setAppliedFor={setAppliedFor} appliedFor={appliedFor} slidervalue={slidervalue} setSlidervalue={setSlidervalue} />
    },{
        label:"Domain Info",
        component:<DomainInfo setGit={setGit} git={git} drive={drive} setDrive={setDrive} appliedFor={appliedFor} stack={stack} setStack={setStack} exp={exp} setExp={setExp}/>
    },{
        label:"Done",
        component:<ShowQr />
    }]
  return (loading)? <Loader /> : (
    <div className='w-screen flex flex-col items-center pb-12'>
      <Navbar />
      <div className='pt-[20vh] w-full lg:w-8/12 lg:min-w-[1000px] h-fit min-h-screen flex justify-center lg:justify-start'>
          <Stepper steps={steps} active={active}/>
          <motion.div layout className='w-full backdrop-blur'>
            {steps[active].component}
            {(active!=steps.length-1) && <Buttons active={active} setActive={setActive} size={steps.length} submitHandler={submitHandler}/>}
          </motion.div>
      </div>
    </div>
  ) 
}

export default Form