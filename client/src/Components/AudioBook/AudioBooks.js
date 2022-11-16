import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import useTitle from "../../Hooks/useTitle";
import Loader from "../Shared/Loading/Loading";
import AudioBook from "./AudioBook";

const AudioBooks = () => {
  useTitle("Audio Books");
  const { data: audiobook, isLoading } = useQuery(["audiobook"], () =>
    primaryAxios.get(`/audiobook`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="lg:mx-10 lg:my-10 mx-6 my-6">
        <h1 className="lg:text-3xl md:text-2xl text-xl mb-6 uppercase">
          Latest Audiobooks
        </h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
          {audiobook?.data?.map((audiobook) => (
            <AudioBook key={audiobook._id} audiobook={audiobook}></AudioBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioBooks;
