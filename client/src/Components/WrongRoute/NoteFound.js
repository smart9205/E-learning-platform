import React from "react";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src='https://raw.githubusercontent.com/MShafiMS/admission/eeb6c9456e6bec86eeddaf072a43cd089f371637/404.svg' className="max-w-lg rounded-lg" />
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">Page Not Found!</h1>
          <p className="text-lg py-6">
          The page you are looking for could not be found! You can go to your required page by clicking on any of the links shown in the menu above or you can go to the home page of the website by clicking on the Webb School logo above.
          </p>
          <Link
            className="btn btn-wide bg-[#407BFF] text-white font-thin"
            to={"/"}
          >
             Go to homepage
          </Link>
        </div>
      </div>
    </div>
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content text-center">
    //     <div className="max-w-md">
    //       <img className="w-screen" src={img} alt="image" />
    //       <Link className="btn btn-wide bg-[#407BFF] text-white font-thin" to={"/"}>
    //         Go to homepage
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NoteFound;
