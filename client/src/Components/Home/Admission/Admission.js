import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import primaryAxios from "../../../Api/primaryAxios";
import AdmissionCard from "./AdmissionCard";

const Admission = () => {
  const { data: admission } = useQuery(["admissionCourse"], () =>
    primaryAxios.get(`/admission`)
  );

  return (
    <div id="admission" className="bg-base-100 border-b border-neutral py-16">
      <div className="">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
          Admission Preparation
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub">
          Prepare for your dreams university
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-8 mb-10 ">
        {admission?.data?.slice(0, 4).map((admission) => (
          <AdmissionCard
            key={admission._id}
            admission={admission}
          ></AdmissionCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={"admission"}
          className="p-3 border-2 border-info  hover:bg-base-300 rounded-full text-center font-bold text-info btn-wide uppercase"
        >
          Explore All Programs
        </Link>
      </div>
    </div>
  );
};

export default Admission;
