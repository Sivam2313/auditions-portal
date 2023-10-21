import React from "react";

const Option = ({ value, children }) => {
  return (
    <option
      className="h-[6vh] w-5/6 fomt-bold font-head bg-black font-head font-semibold pl-6 mb-6 text-white border-2 border-teal-200 border-outline rounded-2xl"
      value={value}
    >
      {children}
    </option>
  );
};

export default Option;
