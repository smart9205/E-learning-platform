import React from "react";
import wslogo from '../../../Assets/wslogo.png';
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div id="main" className="hero min-h-screen">
      <div className="main-loader">
    <div className="loader">
      <div className="logo-loader">
      <div to={"/"} className="flex items-center lg:mx-0 md:mx-0 mx-auto">
            <img className="w-14" src={wslogo} alt="image" />
            <div className="ml-1 text-2xl font-header font-bold">
              <p>Webb</p>
              <p className="-mt-2">School</p>
            </div>
          </div>
        <div className="dots-row">
          <div className="dot border-2 border-warning"></div>
          <div className="dot border-2 border-warning"></div>
          <div className="dot border-2 border-warning"></div>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default PreLoader;
