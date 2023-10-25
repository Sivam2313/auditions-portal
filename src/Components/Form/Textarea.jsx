import React from "react";
import { motion } from "framer-motion";

const Input = ({ setState, type, value }) => {
  const wordLimit = 5;
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(" ");
    if (words.length <= wordLimit) {
      setState(inputValue);
    }
  };
  return (
    <motion.div layout className="flex flex-col w-full">
      <textarea
        className="w-11/12 fomt-bold font-head bg-black font-head text-xl pl-6 text-white bg-inputBackground border-b-2 border-outline focus:outline-none focus:border-primary"
        type={type}
        value={value}
        onChange={handleInputChange}
        rows={4}
      />
      <br></br>
      <p className="p-1 ml-auto mr-20 w-3/12 border-onSurface2 rounded-full px-2 text-white border-2 font-head text-s">
        Word count: {value.trim().split(" ").length}/{wordLimit}
      </p>
    </motion.div>
  );
};

export default Input;
