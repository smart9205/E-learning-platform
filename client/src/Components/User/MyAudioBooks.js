import React from "react";
import Loader from "../Shared/Loading/Loading";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyAudioBook from "./MyAudioBook";

const MyAudioBooks = () => {
  const [user] = useAuthState(auth);
  const { data: MyEbooks, isLoading } = useQuery(
    ["myEBooks", user?.email],
    () => primaryAxios.get(`/mybooks?email=${user?.email}`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="lg:mx-8 mx-4 pt-10">
      <h1 className="text-3xl pb-5 ">My Audio Books</h1>
      <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mb-10">
        {MyEbooks?.data?.map((allcard) => (
          <MyAudioBook key={allcard._id} allcard={allcard}></MyAudioBook>
        ))}
      </div>
    </div>
  );
};

export default MyAudioBooks;
