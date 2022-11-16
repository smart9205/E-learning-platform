import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import Loader from "../Shared/Loading/Loading";
import LiveCard from "./LiveCard";

import useTitle from "../../Hooks/useTitle";

const LiveClass = () => {
  useTitle("Live Classes");
  const [user, loading] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div id="admission" className="lg:mb-40">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">Live Classes</h1>
        <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mb-10">
          {myCourse?.data?.map((allcard) => (
            <LiveCard key={allcard._id} allcard={allcard}></LiveCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
