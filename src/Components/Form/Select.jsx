import React from "react";

const Select = ({ value, children, setState }) => {
  return (
    <div className="flex w-full justify-start">
      <select className="h-[6vh] min-h-[60px] w-11/12 text-lg font-head bg-inputBackground font-head pl-6 text-white"
        value={value}
        onChange={(e) => setState(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
