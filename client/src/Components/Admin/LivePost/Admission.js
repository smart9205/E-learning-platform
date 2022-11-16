import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import AdmissionTable from "./AdmissionTable";

const Admission = () => {
  const {
    data: admission,
    refetch,
    isLoading,
  } = useQuery(["admissionCourses"], () => primaryAxios.get(`/admission`));
  if (isLoading) {
    return <div className="mx-auto" id="preloaders"></div>;
  }
  return (
    <tbody>
      {admission?.data?.map((admissions, index) => (
        <AdmissionTable
          key={admissions._id}
          admissions={admissions}
          index={index}
          refetch={refetch}
        ></AdmissionTable>
      ))}
    </tbody>
  );
};

export default Admission;
