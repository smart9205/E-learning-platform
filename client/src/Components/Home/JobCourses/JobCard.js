import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ jobCourse }) => {
  const { name, img, uname } = jobCourse;

  return (
    <div>
      <Link
        to={`/course/${uname}`}
        className="card card-compact rounded-lg w-72 my-8 bg-base-100 hover:shadow-xl border hover:-translate-y-5 border-neutral  transform transition duration-300 mx-auto"
      >
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div>
          <h2 className="text-xl text-left px-4 py-2">{name.slice(0, 21)}</h2>

          <div className="card-actions justify-center">
            <div className="text-center text-md uppercase text-primary border-t w-full border-neutral p-2">
              See Details
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
