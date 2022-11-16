import React from "react";
import swal from "sweetalert";
import primaryAxios from "../../../Api/primaryAxios";

const LanguageCard = ({ allcard, refetch }) => {
  const { _id } = allcard;

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
          const { data } = await primaryAxios.delete(`/language/${id}`);
          if (data.deletedCount > 0) {
            swal("The course has been successfully deleted", {
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
  const handleAddToSpecial = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you add this in the special!",
      icon: "warning",
      className: "rounded-xl",
      buttons: ["Cancle", "Ok"],
      confirmButtonColor: "#000000",
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const { data } = await primaryAxios.post(`/special`, {
            name: allcard?.name,
            uname: allcard?.uname,
            img: allcard?.img,
            instructor: allcard?.instructor,
          });
          if (data.success) {
            refetch();
          }
          swal("The course has been successfully added to special", {
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
    <div className="mx-auto mt-3 card card-compact lg:w-48 w-10/12 bg-base-100 border rounded-md border-neutral">
      <figure>
        <img src={allcard?.img} alt="Shoes" className="lg:h-32 w-full" />
      </figure>
      <div className="">
        <div className="px-2 pt-1 flex justify-between">
          <p className="text-md font-sans">{allcard?.instructor}</p>
          {allcard?.badge ? (
            <div className="badge badge-secondary">{allcard?.badge}</div>
          ) : (
            <></>
          )}
        </div>
        {allcard?.name.length >= 20 ? (
          <h2 className="text-left pl-1 py-1 text-md hover:text-info">
            {allcard?.name.slice(0, 20)}...
          </h2>
        ) : (
          <h2 className="text-left pl-1 py-1 text-md hover:text-info">
            {allcard?.name}
          </h2>
        )}
        <div>
          <button
            onClick={() => handleAddToSpecial(_id)}
            className="btn btn-block text-green-600 hover:bg-green-600 hover:text-base-100 rounded-none lg:btn-sm btn-ghost border-t-neutral"
          >
            Add To Special
          </button>
          <button
            onClick={() => deleteItems(_id)}
            className="btn btn-block hover:bg-red-600 hover:text-base-100 text-red-600 rounded-none rounded-b-md btn-ghost border-t-neutral lg:btn-sm hover:rounded-b-md"
          >
            Delete Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
