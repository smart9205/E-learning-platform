import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";

const AllCourseCard = ({ allcard }) => {
  const { uname } = allcard;
  const { data: reviews } = useQuery(["reviewsData"], () =>
    primaryAxios.get(`/reviews`)
  );
  const reviewData = reviews?.data?.filter(
    (allcard) => allcard.courseName === uname
  );
  const ratingData = reviewData?.map((allcard) => allcard.rating);
  const totalRating = ratingData?.reduce((a, b) => a + b, 0);
  const avgRating = totalRating / ratingData?.length;

  return (
    <Link to={`/course/${uname}`}>
      <div
        className="mx-auto mt-3 card card-compact w-72 bg-base-100 border rounded-md
       hover:-translate-y-3 border-neutral text-warning transform transition duration-300"
      >
        <figure>
          <img src={allcard?.img} alt="Shoes" className="h-full w-full" />
        </figure>
        <div className="">
          <div className="px-2 pt-1 flex justify-between">
            <p className="text-md font-sans">{allcard?.instructor}</p>
            {allcard?.badge ? (
              <div className="badge rounded-none font-bold text-base-100 badge-secondary">
                {allcard?.badge}
              </div>
            ) : (
              <></>
            )}
          </div>
          <h2 className="px-2 py-1 text-xl">{allcard?.name.slice(0, 24)}</h2>
          <div className="px-2">
            {avgRating ? (
              <span className="mr-2 font-bold text-[#c48b07]">
                {avgRating?.toString().slice(0, 3)}
              </span>
            ) : (
              <></>
            )}

            <Rating
              className="text-[#FAAF00]"
              initialRating={avgRating}
              readonly
              emptySymbol={<ImStarEmpty />}
              fullSymbol={<ImStarFull />}
            />
            <span className="opacity-70">({ratingData?.length})</span>
          </div>
          <div className="flex justify-between border-t border-neutral p-2 text-lg font-bold">
            <p>${allcard?.price}</p>
            <p className="text-accent">Buy Now</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCourseCard;
