import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../Shared/Loading/Loading";
import JobCard from "./JobCard";

const Job = () => {
  const {
    data: job,
    isLoading,
    refetch,
  } = useQuery(["jobManage"], () => primaryAxios.get(`/job`));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="text-center">
      <div className="lg:mx-8 mx-4 mt-4">
        <h1 className="text-3xl pb-5 ">Job Learning</h1>
        <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {job?.data?.map((allcard) => (
            <JobCard
              key={allcard._id}
              allcard={allcard}
              refetch={refetch}
            ></JobCard>
          ))}
        </div>
      </div>
      <div>
        <Link className="btn btn-primary normal-case" to={"/admin/addjob"}>
          <i className="fa-solid fa-folder-plus mr-2"></i>Add Job Course
        </Link>
      </div>
    </div>
  );
};

export default Job;
