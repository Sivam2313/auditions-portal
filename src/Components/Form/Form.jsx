import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Stepper from './Stepper/Stepper'
import Buttons from './Buttons'
import Basic from './Stepper/Elements/Basic'
import Contacts from './Stepper/Elements/Contacts'
import Links from './Stepper/Elements/Links'
import Domains from './Stepper/Elements/Domains'

const Form = () => {

  const [active, setActive] = useState(3)
  const [name, setName] = useState()
  const [roll, setRoll] = useState()
  const [branch, setBranch] = useState()
  const [pmail, setPmail] = useState("");
  const [imail, setImail] = useState("");
  const [phone, setPhone] = useState("");
  const [cc, setCC] = useState("");
  const [cf, setCF] = useState("");
  const [check, setCheck] = useState(new Array(4).fill(false));
  const [git, setgit] = useState("");
  const roles = [
    "Teaching",
    "Problem Setting",
    "WebD/AppD",
    "Graphic Designing",
  ];
  const [rangeof, setRangeof] = useState(new Array(4).fill(1));
  const [total, setTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [drive, setDrive] = useState("");
  const values = [1, 2, 3, 4];

  const [isValidname, setIsValidname] = useState(true);
  const [isValidroll, setIsValidroll] = useState(true);
  const [isValidbranch, setIsValidbranch] = useState(true);
  const [isValidpmail, setIsValidpmail] = useState(true);
  const [isValidimail, setIsValidimail] = useState(true);
  const [isValidphone, setIsValidphone] = useState(true);
  const [isValidcc, setIsValidcc] = useState(true);
  const [isValidcf, setIsValidcf] = useState(true);
  const [isValidgit, setIsValidgit] = useState(true);
  const [isValidcheck, setIsValidcheck] = useState(true);
  const [isValidrank, setIsValidrank] = useState(true);
  const [isValiddrive, setIsValiddrive] = useState(true);

  const steps = [{
        label:"Basic Info",
        component:<Basic name={name} setName={setName} roll={roll} setRoll={setRoll} branch={branch} setBranch={setBranch}/>
    },{
        label:"Contacts",
        component:<Contacts setImail={setImail} setPmail={setPmail} setPhone={setPhone}/>
    },{
        label:"Links",
        component:<Links setCC={setCC} setCF={setCF} />
    },{
        label:"Domain",
        component:<Domains />
    },{
        label:"Domain Info",
        component:<Basic name={name} setName={setName} roll={roll} setRoll={setRoll} branch={branch} setBranch={setBranch}/>
    },]
  return (
    <div className='w-screen flex flex-col items-center'>
      <Navbar />
      <div className='pt-[20vh] w-8/12 min-w-[1000px] h-fit min-h-screen flex justify-start'>
          <Stepper steps={steps} active={active}/>
          <div className='w-full'>
            {steps[active].component}
            <Buttons active={active} setActive={setActive} size={steps.length}/>
          </div>
      </div>
    </div>
  )
}

export default Form