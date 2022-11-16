import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import JobTable from "./JobTable";

const Job = () => {
  const {
    data: job,
    refetch,
    isLoading,
  } = useQuery(["jobCourse"], () => primaryAxios.get(`/job`));
  if (isLoading) {
    return <div className="mx-auto" id="preloaders"></div>;
  }
  return (
    <tbody>
      {job?.data?.map((jobs, index) => (
        <JobTable
          key={jobs._id}
          jobs={jobs}
          index={index}
          refetch={refetch}
        ></JobTable>
      ))}
    </tbody>
  );
};

export default Job;
