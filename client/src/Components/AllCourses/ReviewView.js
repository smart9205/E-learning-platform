import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import Rating from "react-rating";
import ReactTimeAgo from "react-time-ago";

const ReviewView = ({ review, refetch }) => {
  TimeAgo.addLocale(en);
  TimeAgo.addLocale(ru);
  return (
    <div>
      <div className="flex mb-6">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src={review?.author.photo} />
          </div>
        </div>
        <div className="ml-3">
          <h1 className="text-lg font-bold">{review?.author.name}</h1>
          <div>
            <Rating
              className="text-[#FAAF00]"
              initialRating={review?.rating}
              readonly
              emptySymbol={<ImStarEmpty />}
              fullSymbol={<ImStarFull />}
            />
            <span className="text-gray-500 mx-2">-</span>
            <span>
              <ReactTimeAgo
                date={Date.parse(review?.reviewDate)}
                locale="en-US"
              />
            </span>
          </div>
          <p>{review?.review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewView;
