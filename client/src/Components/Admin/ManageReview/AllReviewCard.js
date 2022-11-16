import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import Rating from "react-rating";
import swal from "sweetalert";
import primaryAxios from "../../../Api/primaryAxios";

const AllReviewCard = ({ allcard, index, refetch }) => {
  const deleteItems = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Deleted,This Process Can't Be Undone",
      icon: "warning",
      className: "rounded-xl",
      buttons: ["Cancle", "Yes, delete it!"],
      confirmButtonColor: "#000000",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const { data } = await primaryAxios.delete(`/allreviews/${id}`);
          if (data.deletedCount > 0) {
            swal("The review has been successfully deleted", {
              icon: "success",
              className: "rounded-xl",
            });

            refetch();
          }
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
          data-tip={allcard?.review.slice(0, 40)}
        >
          View Review
        </label>
        <input type="checkbox" id={allcard?._id} className="modal-toggle" />
        <label htmlFor={allcard?._id} className="modal cursor-pointer">
          <label
            className="modal-box relative whitespace-normal p-4"
            htmlFor=""
          >
            <label
              htmlFor={allcard?._id}
              className="btn btn-xs btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <p className="py-4">{allcard?.review}</p>
          </label>
        </label>
      </td>
      <td>
        <button
          onClick={() => deleteItems(allcard?._id)}
          className="btn text-red-500 hover:bg-red-500 hover:border-red-500 btn-outline btn-xs"
        >
          Delete Review
        </button>
      </td>
    </tr>
  );
};

export default AllReviewCard;
