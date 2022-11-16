import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";
import useMessage from "../../Hooks/useMessage";
import MessageHistory from "./MessageHistory";

const MessageRow = ({ user, prefetch, index }) => {
  const { register, handleSubmit, reset } = useForm({});
  const { name, email, role, _id, image } = user;
  const [message, isLoading, refetch] = useMessage();

  const onSubmit = (data) => {
    const newReview = {
      ...data,
      email: email,
      // email: user?.email,
      // name: user?.displayName,
      // image: user?.photoURL,
    };
    (async () => {
      const { data } = await primaryAxios.post(`/message`, newReview);
      if (data.acknowledged) {
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
          title: "Success",
        });
        reset();
        refetch();
      }
    })();
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`${
                  image
                    ? image
                    : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                }`}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <label
          htmlFor={_id}
          className="btn modal-button btn-xs btn-outline btn-primary hover:text-white"
        >
          Send
        </label>
        <input type="checkbox" id={_id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-primary flex justify-between">
              <p className="text-xl text-white">
                <i className="fa-solid fa-bell"></i> Send Notification
              </p>
              <label
                htmlFor={_id}
                className="btn btn-sm btn-ghost hover:bg-red-600 text-white btn-square"
              >
                ✕
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body px-6 py-3">
                <h2 className="text-lg">
                  <p><span className="ml-1 font-bold">{name}</span></p>
                  <p className="badge">{email}</p>
                </h2>
                <div className="form-control">
                  <label className="input-group input-group-sm">
                    <span className="bg-primary text-white uppercase">
                      Subject
                    </span>
                    <input
                      {...register(`title`)}
                      type="text"
                      placeholder="Subject here"
                      className="input bg-base-300 input-sm w-full"
                    />
                  </label>
                </div>
                <textarea
                  {...register(`details`)}
                  className="textarea textarea-bordered"
                  placeholder="Type here..."
                ></textarea>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn font-thin btn-sm btn-primary"
                  >
                    <i className="fa-solid fa-paper-plane mr-1"></i>Send
                  </button>
                </div>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </td>
      <td>
        <label
          htmlFor={email}
          className="btn modal-button btn-xs btn-outline btn-primary hover:text-white"
        >
          History
        </label>
        <input type="checkbox" id={email} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-primary flex justify-between">
              <p className="text-xl text-white">
                <i className="fa-solid fa-bell"></i> All Notification
              </p>
              <label
                htmlFor={email}
                className="btn btn-sm btn-ghost  hover:bg-red-600 text-white btn-square"
              >
                ✕
              </label>
            </div>
            <div>
              <div className="card-body px-6 py-3">
                <h2 className="text-lg">
                  <span className="ml-1 font-bold">{name}</span>
                  <span className="ml-2 badge">{email}</span>
                </h2>
                <div className="bg-base-200 rounded-md">
                  {message?.data?.slice(0).reverse().map((message, index) => (
                    <div>
                      {message?.email === email && 
                      <MessageHistory key={message?._id} message={message} refetch={refetch}></MessageHistory>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MessageRow;
