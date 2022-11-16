import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../Shared/Loading/Loading";
import AllReviewCard from "./AllReviewCard";

const AllReviews = () => {
    const {
        data: allreviews,
        isLoading,
        refetch,
      } = useQuery(["allreviewsData"], () =>
        primaryAxios.get(`/allreviews`)
      );
      if (isLoading) {
        return <Loading></Loading>;
      }
    return (
        <div className="mt-4 text-center">
      <h1 className="text-3xl pb-5 ">All Reviews</h1>
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
            {allreviews?.data?.map((allcard, index) => (
              <AllReviewCard
                key={allcard._id}
                allcard={allcard}
                index={index}
                refetch={refetch}
              ></AllReviewCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllReviews;