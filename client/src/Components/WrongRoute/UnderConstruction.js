import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/underconstruction.png'

const UnderConstruction = () => {
    return (
        <div className="text-gray-300 hero min-h-screen bg-gradient-to-l from-[#6B26D8] to-[#0F1729]">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <img src={img} className="rounded-lg max-w-xl" />
        <div className="uppercase whitespace-nowrap text-center lg:text-left">
          <h1 className="py-4 lg:text-5xl md:text-5xl text-4xl font-sub">Page is</h1>
          <h1 className="lg:text-5xl md:text-4xl font-header text-3xl font-bold">Under Construction</h1>
          <p className="text-lg py-6">
          
          </p>
          <Link
            className="btn btn-wide btn-info text-white font-thin"
            to={"/"}
          >
             Go to homepage
          </Link>
        </div>
      </div>
    </div>
    );
};

export default UnderConstruction;