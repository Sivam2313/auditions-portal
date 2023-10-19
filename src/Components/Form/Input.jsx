import React from "react";

const Input = ({ setState, placeholder, type }) => {
  return (
    <input
      className="h-[6vh] w-5/6 fomt-bold font-head bg-black font-head font-semibold pl-6 mb-6 text-white border-2 border-teal-200 border-outline rounded-2xl"
      type={type}
      placeholder={placeholder}
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export default Input;
