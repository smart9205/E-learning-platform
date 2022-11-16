import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoPrimitiveDot } from "react-icons/go";
import { MdDoNotDisturbOff } from "react-icons/md";
import Swal from "sweetalert2";
import primaryAxios from "../../../Api/primaryAxios";

const AdmissionTable = ({ index, admissions, isLoading, refetch }) => {
  const { _id, uname, img, name } = admissions;
  const [loading, setLoading] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (MLink) => {
    (async () => {
      const { data } = await primaryAxios.put(`/admission/${_id}`, MLink);
      if (data.success) {
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
  const handleDelete = (id) => {
    setLoading(true);
    (async () => {
      const { data } = await primaryAxios.put(`/admission/${_id}`, {
        meetLink: "",
      });
      if (data.success) {
        Swal.fire(`${name} Live Class Stopped!`, {
          icon: "success",
          className: "rounded-xl",
        });
        refetch();
      }
    })();
  };
  return (
    <tr>
      <td>{index + 9}</td>
      <td className="uppercase">{name}</td>
      <td>
        {admissions?.meetLink?.MLink ? (
          <a
            href={admissions?.meetLink?.MLink}
            target="blank"
            className="btn text-base-100 font-thin pr-4 hover:bg-green-700 btn-xs bg-green-500"
          >
            <GoPrimitiveDot className="text-xl" />
            Join
          </a>
        ) : (
          <button className="btn text-base-100 font-thin pr-4 hover:bg-gray-500 btn-xs bg-gray-400 line-through">
            <MdDoNotDisturbOff className="text-sm" />
            Join
          </button>
        )}
      </td>
      <td>
        <label
          htmlFor={_id}
          className="btn modal-button btn-xs btn-outline btn-info hover:text-white"
        >
          Post Link
        </label>
        <input type="checkbox" id={_id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box p-0">
            <div className="px-3 pt-3 pb-2 bg-info flex justify-between">
              <p className="text-xl text-white">
                <i className="fa-solid fa-paper-plane"></i> Post Your google
                meet link
              </p>
              <label
                htmlFor={_id}
                className="btn btn-sm btn-ghost text-white btn-square hover:bg-rose-600"
              >
                ✕
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body px-6 py-3">
                <div className="flex items-center">
                  <div className="px-1">
                    <div className="avatar ">
                      <div className="w-16 mask mask-squircle ">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full font-semibold">
                    <p className=" text-info rounded-lg text-left whitespace-normal ">
                      <span className="uppercase  text-bold   "> {name}</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="form-control">
                  <label className="input-group input-group-sm pt-2">
                    <span className="bg-info text-white uppercase">
                      Google Meet Link
                    </span>
                    <input
                      {...register(`MLink`)}
                      className="input bg-base-300 input-sm w-full"
                      placeholder="Google meet link"
                      type="link"
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group input-group-sm pt-2">
                    <span className="bg-info text-white uppercase">
                      Teacher
                    </span>
                    <input
                      {...register(`teacher`)}
                      type="text"
                      placeholder="Teacher name"
                      className="input bg-base-300 input-sm w-full"
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group input-group-sm pt-2">
                    <span className="bg-info text-white uppercase">
                      Subject
                    </span>
                    <input
                      {...register(`title`)}
                      type="text"
                      placeholder="Subject here"
                      className="input bg-base-300 input-sm w-full"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-2  pt-2">
                  <div>
                    <label className="input-group input-group-sm ">
                      <span className="bg-info text-white uppercase ">
                        Time
                      </span>
                      <select
                        className="rounded bg-base-300"
                        {...register("time")}
                        required
                      >
                        <option value=""></option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label className="input-group input-group-sm">
                      <span className="bg-info text-white uppercase">Date</span>
                      <input
                        {...register(`date`)}
                        className="input input-bordered input-sm w-full  bg-base-300 max-w-xs"
                        placeholder="Google meet link"
                        type="Date"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="card-actions justify-end pt-3">
                  <button
                    type="submit"
                    className=" btn font-thin btn-sm btn-info text-white hover:bg-green-600"
                  >
                    <i className="fa-solid fa-paper-plane mr-1"></i>Post
                  </button>
                </div>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className={`btn btn-xs btn-outline ${loading && "loading"}`}
        >
          Stop
        </button>
      </td>
    </tr>
  );
};

export default AdmissionTable;
