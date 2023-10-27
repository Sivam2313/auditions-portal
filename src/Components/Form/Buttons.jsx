import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import validator from 'validator'

const Buttons = ({active,setActive,size,submitHandler, name, roll, branch, pmail, imail, phone, setIsValidname, setIsValidroll, setIsValidbranch, setIsValidpmail, setIsValidimail, setIsValidphone }) => {

  const nextBtn = useRef(null)

  useEffect(() => {
      const keyDownHandler = event => {
          if(event.key === 'Enter' && !event.shiftKey){
            event.preventDefault();
            nextBtn.current.click();
          }
      };
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
  }, []);

  const nextHandler = ()=>{
    if(active===0){
      if(name.trim()==="")
      {
        setIsValidname(false);
        return;
      }
      else{
        setIsValidname(true);
      }
      if(roll.trim()===""){
        setIsValidroll(false);
        return;
      }
      else{
        setIsValidroll(true);
      }
      if(branch===""){
        setIsValidbranch(false);
        return;
      }
      else{
        setIsValidbranch(true);
        setActive(active+1);
      }
    }
    else if(active===1){
      if(pmail.trim()==="" || !validator.isEmail(pmail.trim()))
      {
        setIsValidpmail(false);
        return;
      }
      else{
        setIsValidpmail(true);
      }
      const [, domain] = imail.split("@");
      const isValidDomain = domain === "btech.nitdgp.ac.in";
      if(imail.trim()==="" || !validator.isEmail(imail.trim()) || !isValidDomain)
      {
        setIsValidimail(false);
        return;
      }
      else{
        setIsValidimail(true);
      }
      if(phone.trim()==="" || !validator.isMobilePhone(phone.trim())){
        setIsValidphone(false);
        return;
      }
      else{
        setIsValidphone(true);
        setActive(active+1);
      }
    }
    else if(active<size-2){
      setActive(active+1)
    }
    else if(parseInt(active)===size-2){
      submitHandler();
    }
  }

  const backHandler = ()=>{
    if(active>0){
      setActive(active-1)
    }
  }

  return (
    <motion.div layout className='w-11/12 flex justify-between lg:pl-3 pl-6 font-head text-xl mt-16'>
        <button className='bg-surface p-2 rounded-full w-32 text-onSurface' onClick={backHandler}
        style={{
          visibility: (parseInt(active)===0)? 'hidden':'visible'
        }}
        >
            Back
        </button>
        <button ref={nextBtn} className='bg-primary p-3 rounded-full w-32 text-onPrimary' onClick={nextHandler}>
            {(parseInt(active)===size-2)? "Submit" : "Next"}
        </button>
    </motion.div>
  )
}

export default Buttons