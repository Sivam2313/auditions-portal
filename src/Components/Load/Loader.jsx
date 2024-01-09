import React from "react";
import "./loader.css"
import logo from "../../Assets/logoInverted.webp";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loading-spinner">
        <img className="loading-logo" alt="loading" src={logo} />
      </div>
    </div>
  );
};

export default Loader;
