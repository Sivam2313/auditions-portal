import React from "react";
import { motion } from "framer-motion";
import "./slider.css";

const Domains = ({
  roles,
  setAppliedFor,
  appliedFor,
  slidervalue,
  setSlidervalue,
  isValidcheck,
  isValidrank
}) => {
  const variants = {
    shown: { opacity: 1, height: "fit-content" },
    hidden: { opacity: 0, height: "0px" },
  };

  const value = [1, 2, 3, 4];
  const handleSliderChange = (index, value) => {
    let newSliderValues = [...slidervalue];
    newSliderValues[index] = parseInt(value);
    setSlidervalue(newSliderValues);
    console.log(slidervalue);
    console.log(value);
    console.log(index);
    console.log(value);
    console.log((appliedFor.length-1)*100);
    console.log((((value - 1) * 100) / (appliedFor.length - 1)));
    console.log(Math.min((appliedFor.length-1)*100,(((value - 1) * 100) / (appliedFor.length - 1))));
  };

  function handleChange(e) {
    var arr = [...appliedFor];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      const index = arr.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    setAppliedFor(arr);
  }

  return (
    <motion.div layout className="w-full lg:min-w-[800px]">
      <div className="font-head pl-3 mx-3 lg:mx-0 text-4xl lg:text-5xl text-left text-white font-semibold pb-3 lg:pb-6 border-b-2 border-outline ">
        Domains
      </div>
      <div className="pt-8">
        <div className="lg:pl-3 pl-6 font-head pb-3 text-lg lg:text-xl text-left text-white">
          Select the domains you are applying for:
        </div>
        <div className="pb-6 lg:pl-6 pl-12">
          {roles.map((role, idx) => {
            return (
              <div key={idx} className="flex items-center">
                <input
                  type="checkbox"
                  value={role}
                  className="appearance-none -webkit-appearance-none -moz-appearance-none w-4 h-4 border-onSurface2 border-2 rounded-sm cursor-pointer checked:border-primary z-10"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={appliedFor.indexOf(role) >= 0 ? true : false}
                />
                {appliedFor.indexOf(role) >= 0 && (
                  <label className="text-white text-xs font-bold relative right-1 -ml-2 text-primary cursor-pointer">
                    ✓
                  </label>
                )}
                <div className="ml-3 text-white font-head lg:text-lg flex items-center">
                  {role}
                </div>
              </div>
            );
          })}
          { !isValidcheck &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Please select atleast one domain
            </div>}
        </div>
      </div>
      <motion.div
        className="pt-8 border-t-2 border-outline mx-3 lg:mx-0"
        animate={appliedFor.length <= 1 ? "hidden" : "shown"}
        variants={variants}
      >
        <div className="font-head pb-3 text-lg lg:text-xl text-left pl-3 mx-3 lg:mx-0 text-white">
          Rank these domains <strong> distinctively</strong>, according to your priority :
        </div>
        <div className='font-head w-11/12 text-xs lg:text-sm text-left text-onSurface2 pl-3 pb-2'>
            Drag the thumb to slide across the range
        </div>
        <div className="flex-col w-full pl-6">
          {roles.map((role, idx) => {
            return (
              appliedFor.indexOf(role) > -1 && (
                <div key={idx} className="flex w-full pl-3 pt-3">
                  <div className="ml-3 text-white font-head lg:text-lg pr-5 w-4/12 lg:w-3/12 text-left">
                    {role}
                  </div>
                  <div key={idx}>
                    <input
                      type="range"
                      min={1}
                      max={appliedFor.length}
                      step={1}
                      value={slidervalue[idx]}
                      onChange={(event) =>
                        handleSliderChange(idx, event.target.value)
                      }
                      list={`values-${idx}`}
                      className="slider custom-slider bg-onSurface2"
                    />
                    <div
                      className="custom-track-fill"
                      style={{
                        width: `${((slidervalue[idx] - 1) * 100) / (appliedFor.length - 1)}%`,
                      }}  
                    ></div>
                    <datalist id={`values-${idx}`}>
                      {value.slice(0, appliedFor.length).map((value, i) => (
                        <option key={i} value={value} label={value} />
                      ))}
                    </datalist>
                  </div>
                </div>
              )
            );
          })}
          { !isValidrank &&
            <div className='font-head w-11/12 text-xs lg:text-sm text-left text-red-300 pl-1 pb-2 mt-2'>
                Domains should be ranked distinctively
            </div>}
        </div>
      </motion.div>
      <br></br>
      <br></br>
      <br></br>
    </motion.div>
  );
};

export default Domains;
