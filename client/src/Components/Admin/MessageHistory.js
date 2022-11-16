import React from "react";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";

const MessageHistory = ({ message, refetch }) => {
  const handleDelete = (id) => {
    (async () => {
      const { data } = await primaryAxios.delete(`/message/${id}`);
      if (data.deletedCount > 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "green",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        await Toast.fire({
          icon: "success",
          title: "deleted",
        });
        refetch();
      }
    })();
  };
  return (
    <div className="card p-0 bg-neutral rounded-md">
      <div className="card-body px-2 py-2 flex-row justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{message?.title}</h2>
          <p>{message?.details}</p>
        </div>
        <button
          onClick={() => handleDelete(message?._id)}
          className="btn btn-sm bg-base-300 btn-ghost text-red-500"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageHistory;
