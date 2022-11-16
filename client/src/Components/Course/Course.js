import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, img } = course;
  return (
    <div className="mb-8 lg:w-11/12">
      <Link
        to={`/course/${course?.uname}`}
        className="card bg-base-100 border border-neutral h-full transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-[#0B3456] hover:text-white"
      >
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body p-0">
          <p className="text-xl px-4 py-2 font-header">{name}</p>
          <div className="px-4 text-md">
            <p>
              <i className="fa-solid text-red-400 fa-house-signal"></i> Live
              classes, with model tests
            </p>
            <p>
              <i className="fa-solid text-primary fa-circle-play"></i> Recorded
              Videos
            </p>
          </div>
          <button className="border-t text-primary border-neutral p-2 text-lg">
            Enroll Course
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Course;
