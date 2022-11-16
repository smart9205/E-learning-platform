import React from "react";
import { Link } from "react-router-dom";

const AdmissionCard = ({ admission }) => {
  const { name, img, link, instructor } = admission;
  const { uname } = admission;

  return (
    <div className="rounded-lg mx-auto w-11/12">
      <Link to={`/course/${uname}`} className="group rounded h-20 lg:h-32 min-w-fit card card-side bg-base-200 transform transition duration-500 hover:scale-110 hover:shadow-xl">
        <figure>
          <img className="lg:w-48 w-28 h-20  lg:h-32 object-cover" src={img} alt="Movie" />
        </figure>
        <div className="card-body px-5 py-8 border border-neutral">
          <h2 className="text-sm lg:text-xl -mt-5 md:-mt-4 lg:mt-0">{name}</h2>
          <h2 className="text-xs lg:text-md text-gray-500 -mt-2 lg:mt-0">{instructor}</h2>
        </div>
        </Link>
    </div>
  );
};

export default AdmissionCard;
