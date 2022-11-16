import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import useTitle from "../../Hooks/useTitle";
import AllCourseCard from "../AllCourses/AllCourseCard";
import Loader from "../Shared/Loading/Loader";

const AllJobCourse = () => {
  useTitle("Job Recruiment");
  const { data: job, isLoading } = useQuery(["jobCourse"], () =>
    primaryAxios.get(`/job`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Job Recruitment</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {job?.data?.map((allcard) => (
            <AllCourseCard key={allcard._id} allcard={allcard}></AllCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobCourse;
