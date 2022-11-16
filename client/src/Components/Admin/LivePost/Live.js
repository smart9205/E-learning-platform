import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../Shared/Loading/Loading";
import Admission from "./Admission";
import Job from "./Job";
import LanguagesTable from "./LanguagesTable";

const Live = () => {
  const {
    data: language,
    refetch,
    isLoading,
  } = useQuery(["languageCourse"], () => primaryAxios.get(`/language`));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="navbar">
        <a className="normal-case text-xl">Post Live Class</a>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Active</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {language?.data?.map((languages, index) => (
              <LanguagesTable
                key={languages._id}
                languages={languages}
                index={index}
                refetch={refetch}
                isLoading={isLoading}
              ></LanguagesTable>
            ))}
          </tbody>
          <Job></Job>
          <Admission></Admission>
        </table>
      </div>
    </div>
  );
};

export default Live;
