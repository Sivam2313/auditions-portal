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
  const [git, setGit] = useState("")
  const [drive, setDrive] = useState("")

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
        component:<Domains roles={roles} setAppliedFor={setAppliedFor} appliedFor={appliedFor}/>
    },{
        label:"Domain Info",
        component:<DomainInfo setGit={setGit} git={git} drive={drive} setDrive={setDrive} appliedFor={appliedFor}/>
    },]
  return (
    <div className='w-screen flex flex-col items-center'>
      <Navbar />
      <div className='pt-[20vh] w-8/12 min-w-[1000px] h-fit min-h-screen flex justify-start'>
          <Stepper steps={steps} active={active}/>
          <motion.div layout className='w-full'>
            {steps[active].component}
            <Buttons active={active} setActive={setActive} size={steps.length}/>
          </motion.div>
      </div>
    </div>
  ) 
}

export default Form