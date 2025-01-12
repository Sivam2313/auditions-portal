import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import validator from 'validator'

const Buttons = ({active,setActive,size,submitHandler, name, roll, branch, pmail, imail, phone, cc, cf, appliedFor, slidervalue, roles, git, stack, exp, drive, setIsValidname, setIsValidroll, setIsValidbranch, setIsValidpmail, setIsValidimail, setIsValidphone, setIsValidcc, setIsValidcf, setIsValidcheck, setIsValidrank, setIsValidgit, setIsValidstack, setIsValidcontri, setIsValiddrive}) => {

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
    roll=roll.trim();
    if(active===0){
      if(name.trim()==="")
      {
        setIsValidname(false);
        return;
      }
      else{
        setIsValidname(true);
      }
      if(roll==="" || roll.length!==8 || roll[0]!=='2' || roll[1]!=='3'){
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
      var [registration, domain] = imail.split("@");
      registration = registration.trim().toLowerCase();
      const isValidDomain = domain === "nitdgp.ac.in";
      // console.log(registration);
      // console.log();
      
      
      if(imail.trim()==="" || !validator.isEmail(imail.trim()) || !isValidDomain || registration[registration.length-7]!=='3' || registration[registration.length-8]!=='2')
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
    else if(active===2){
      if(cc.trim()==="" || !validator.isURL(cc.trim()))
      {
        setIsValidcc(false);
        return;
      }
      else{
        setIsValidcc(true);
      }
      if(cf.trim()===""|| !validator.isURL(cf.trim())){
        setIsValidcf(false);
        return;
      }
      else{
        setIsValidcf(true);
        setActive(active+1);
      }
    }
    else if(active===3){
      if(appliedFor.length===0){
        setIsValidcheck(false);
        return;
      }
      else{
        setIsValidcheck(true);
        if(appliedFor.length>=2){
          var temp=[];
          for(var i=0;i<4;i++){
            if(appliedFor.indexOf(roles[i]) >= 0)
              temp.push(slidervalue[i]);
          }
          var uniqueValues = [...new Set(temp)];
          if (uniqueValues.length !== appliedFor.length) {
              setIsValidrank(false);
          }
          else{
            setIsValidrank(true);
            uniqueValues=null;
            setActive(active+1);
          }
        }
        else{
          setIsValidrank(true);
          setActive(active+1);
        }
      }
    }
    else if(active===4){
      if(appliedFor.indexOf("Web/App Development")>=0){
        if(git.trim()==="" || !validator.isURL(git.trim())){
          setIsValidgit(false);
          return;
        }
        else{
          setIsValidgit(true);
        }
        if(stack.trim()===""){
          setIsValidstack(false);
          return;
        }
        else{
          setIsValidstack(true);
        }
        if(exp.trim()===""){
          setIsValidcontri(false);
          return;
        }
        else{
          setIsValidcontri(true);
        }
      }
      if(appliedFor.indexOf("Graphics Design")>=0){
        if(drive.trim()==="" || !validator.isURL(drive.trim())){
          setIsValiddrive(false);
          return;
        }
        else{
          setIsValiddrive(true);
          submitHandler();
        }
      }
      else{
        submitHandler();
      }
    }
  }

  const backHandler = ()=>{
    if(active>0){
      setActive(active-1)
    }
  }

  return (
    <motion.div layout className='w-11/12 flex justify-between lg:pl-3 pl-6 font-head text-xl mt-16'>
        <button className='bg-surface p-2 rounded-full w-32 text-black' onClick={backHandler}
        style={{
          visibility: (parseInt(active)===0)? 'hidden':'visible'
        }}
        >
            Back
        </button>
        <button ref={nextBtn} className='bg-primary p-3 rounded-full w-32 text-black' onClick={nextHandler}>
            {(parseInt(active)===size-2)? "Submit" : "Next"}
        </button>
    </motion.div>
  )
}

export default Buttons