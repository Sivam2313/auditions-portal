import React from "react";

const Option = ({ value, children }) => {
  return (
    <option
      className="h-[6vh] w-5/6 fomt-bold font-head bg-inputBackground font-head font-semibold pl-6 mb-6 text-white focus:bg-primary focus:text-onPrimary"
      value={value}
    >
      {children}
    </option>
  );
};

export default Option;
