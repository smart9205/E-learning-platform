import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import primaryAxios from "../../Api/primaryAxios";

const AddBlogs = (e) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newReview = {
        ...data
      };
    (async () => {
      const { data } = await primaryAxios.post(`/blogs`, newReview);
      if (data.acknowledged) {
        swal("The blogs has been successfully posted", {
          icon: "success",
          className: "rounded-xl",
        });

        reset();
      }
    })();
  };

  return (
    // blogs sites here
    <div>
      <div className="card lg:w-3/5 md:w-3/4 mx-auto w-80 bg-base-300 shadow-xl lg:m-10 m-5">
        <div className="card-body">
          <h2 className="card-title text-2xl text-center my-10">
            Add Your Blog
          </h2>
          <div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="blogs title"
                  className="input input-bordered w-full"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "blogs Is Required",
                    },
                  })}
                />{" "}
                <br />
                <input
                  placeholder="Img URL"
                  className="input input-bordered w-full  mt-3"
                  type="text"
                  {...register("img")}
                />
                <br />
                <textarea
                  type="TextField"
                  placeholder="blog Descriptions"
                  className="input input-bordered w-full mt-3"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "TextField Is Required",
                    },
                  })}
                />{" "}
                <br />
                <input type="submit" className="btn w-full mt-3 bg-blue-600 " />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
