import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";

const AudioBook = ({ audiobook }) => {
  const { _id, name, img, price, deal } = audiobook;
  const navigate = useNavigate();
  const navigateToAudioBookDetail = (id) => {
    navigate(`/audiobook/${id}`);
  };
  const { data: bookreviews, refetch } = useQuery(["bookreviewsData"], () =>
    primaryAxios.get(`/bookreviews`)
  );
  const reviewData = bookreviews?.data?.filter(
    (allcard) => allcard.courseName === _id
  );
  const ratingData = reviewData?.map((allcard) => allcard.rating);
  const totalRating = ratingData?.reduce((a, b) => a + b, 0);
  const avgRating = totalRating / ratingData?.length;
  return (
    <div
      onClick={() => navigateToAudioBookDetail(_id)}
      className="btn-ghost bg-base-300 rounded-lg position relative p-0 shadow-lg cursor-pointer mb-4"
    >
      <figure className=" px-2 pt-5">
        <img className="mx-auto w-11/12 rounded-lg" src={img} alt="Books" />
      </figure>
      <div className="card-body p-0">
        <div className="card-body p-4">
          <div className=" gap-3">
            {name?.length >= 18 ? (
              ((<p className="text-xl font-bold">{name.slice(0, 18)}...</p>),
              (<p className="text-xl font-bold">{name?.slice(0, 18)}...</p>))
            ) : (
              <p className="text-xl font-bold">{name}</p>
            )}
            <div className="">
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
            <p className="font-serif text-xl">
              New Deal at {deal}{" "}
              <span className="text-green-500 ml-2 font-serif text-2xl">
                ${price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBook;
