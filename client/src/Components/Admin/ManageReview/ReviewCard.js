import React from "react";
import Rating from "react-rating";
import swal from "sweetalert";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import primaryAxios from "../../../Api/primaryAxios";

const ReviewCard = ({ allcard, index, refetch }) => {
  const handleAddToSpecial = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you add this in the homepage!",
      icon: "warning",
      className: "rounded-xl",
      buttons: ["Cancle", "Ok"],
      confirmButtonColor: "#4A4E94",
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const { data } = await primaryAxios.post(`/allreviews`, {
            rating: allcard?.rating,
            review: allcard?.review,
            reviewDate: allcard?.reviewDate,
            author: allcard?.author,
          });
          if (data.success) {
            refetch();
          }
          swal("The review has been successfully added to homepage", {
            icon: "success",
            className: "rounded-xl",
          });
        })();
      } else {
        swal("Action Canclled", {
          icon: "success",
          className: "rounded-xl",
        });
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  allcard?.author?.photo
                    ? allcard?.author?.photo
                    : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{allcard?.author?.name}</div>
            <div className="">
              <Rating
                className="text-[#FAAF00]"
                initialRating={allcard?.rating}
                readonly
                emptySymbol={<ImStarEmpty />}
                fullSymbol={<ImStarFull />}
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <label
          htmlFor={allcard?._id}
          className="btn modal-button py-[5px] btn-xs btn-primary tooltip tooltip-bottom tooltip-base-300 font-thin"
          data-tip={allcard?.review.slice(0,40)}
        >
          View Review
        </label>
        <input type="checkbox" id={allcard?._id} className="modal-toggle" />
        <label htmlFor={allcard?._id} className="modal cursor-pointer">
          <label className="modal-box relative whitespace-normal p-4" htmlFor="">
          <label htmlFor={allcard?._id} className="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
            <p className="py-4">
              {allcard?.review}
            </p>
          </label>
        </label>
      </td>
      <td>
        <button onClick={() => handleAddToSpecial(allcard?._id)} className="btn btn-xs btn-outline">
          Add To Homepage
        </button>
      </td>
    </tr>
  );
};

export default ReviewCard;
