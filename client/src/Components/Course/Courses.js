import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import Course from "../Course/Course";

const Courses = () => {
  const { data: special, isLoading } = useQuery(["specialManage"], () =>
    primaryAxios.get(`/special`)
  );
  if (isLoading) {
    return <div className="mx-auto mt-16" id="preloaders"></div>;
  }
  return (
    <div>
      <div id="courses" className="p-10 bg-base-100  border-b border-neutral">
        <h1 className="lg:text-4xl md:text-3xl mb-16 mt-8 text-2xl uppercase font-sub font-bold text-center">
          Special Courses
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {special?.data
            ?.slice(0, 3)
            .reverse()
            .map((course) => (
              <Course key={course._id} course={course}></Course>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
