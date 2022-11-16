import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../Shared/Loading/Loading";
import ReviewCard from "./ReviewCard";

const CourseReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery(["reviewsData"], () => primaryAxios.get(`/reviews`));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-4 text-center">
      <h1 className="text-3xl pb-5 ">Course Reviews</h1>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name & Rating</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.data
              ?.slice(0)
              .reverse()
              .map((allcard, index) => (
                <ReviewCard
                  key={allcard._id}
                  allcard={allcard}
                  index={index}
                  refetch={refetch}
                ></ReviewCard>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseReview;
