import React from "react";
import {motion} from 'framer-motion'

const Input = ({ setState, type }) => {
  return (
    <motion.div layout className="flex w-full justify-start">
      <input
        className="h-[6vh] w-11/12 fomt-bold font-head bg-black font-head text-xl pl-6 text-white bg-inputBackground border-b-2 border-outline focus:outline-none focus:border-primary"
        type={type}
        onChange={(e) => setState(e.target.value)}
      />
    </motion.div>
  );
};

export default Input;
