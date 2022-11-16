import React from "react";
import Loader from "../Shared/Loading/Loading";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyEbook from "./MyEbook";
const MyEbooks = () => {
  const [user] = useAuthState(auth);
  const { data: MyEbooks, isLoading } = useQuery(
    ["myEBooks", user?.email],
    () => primaryAxios.get(`/mybooks?email=${user?.email}`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div id="admission" className="lg:mb-40">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">My eBooks</h1>
        <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mb-10">
          {MyEbooks?.data?.map((allcard) => (
            <MyEbook key={allcard._id} allcard={allcard}></MyEbook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEbooks;
