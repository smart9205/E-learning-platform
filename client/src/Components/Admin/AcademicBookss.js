import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import primaryAxios from "../../Api/primaryAxios";

const AcademicBookss = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const booksData = {
      ...data
    };
    (async () => {
      const { data } = await primaryAxios.post(`/AcadamicBook`, booksData);
      if (data.acknowledged) {
        swal("The book has been successfully posted", {
          icon: "success",
          className: "rounded-xl",
        });

        reset();
      }
    })();
  };
  return (
    <div className="pb-12">
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          Add your Academic Books
        </h1>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 px-24 gap-4 justify-around">
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">Books img</span>
              </label>
              <input
                placeholder="Books Img URL"
                className="input  bg-base-300 w-full max-w-xs m-4"
                type="text"
                {...register("img")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4 font-bold">Book Name</span>
              </label>
              <input
                type="text"
                placeholder="Books Name"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4 font-bold">Proprietor</span>
              </label>
              <input
                type="text"
                placeholder="name of Proprietor"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Proprietor Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">Book price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("price", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">total pages</span>
              </label>
              <input
                type="text"
                placeholder="pages"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("pages", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold"> Format Name</span>
              </label>
              <input
                type="text"
                placeholder="format"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("format", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">File Name</span>
              </label>
              <input
                type="text"
                placeholder="file"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("file", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">interactive</span>
              </label>
              <input
                type="text"
                placeholder="interactive"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("interactive", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  1.Book Writer Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Writer name"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("Writer1", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  1.Book Writer img
                </span>
              </label>
              <input
                placeholder="writer Img URL"
                className="input  bg-base-300 w-full max-w-xs m-4"
                type="text"
                {...register("img1")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  2.Book Writer Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Writer name"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("Writer2", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  2.Book Writer img
                </span>
              </label>
              <input
                placeholder="writer Img URL"
                className="input  bg-base-300 w-full max-w-xs m-4"
                type="text"
                {...register("img2")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  3.Book Writer Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Writer name"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("Writer3", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  3.Book Writer img
                </span>
              </label>
              <input
                placeholder="writer Img URL"
                className="input  bg-base-300 w-full max-w-xs m-4"
                type="text"
                {...register("img3")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  4.Book Writer name
                </span>
              </label>
              <input
                type="text"
                placeholder="Writer name"
                className="input    bg-base-300 w-full max-w-xs m-4"
                {...register("Writer4", {
                  required: {
                    value: true,
                    message: "price Is Required",
                  },
                })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text ml-4  font-bold">
                  4.Book Writer img
                </span>
              </label>
              <input
                placeholder="writer Img URL"
                className="input  bg-base-300 w-full max-w-xs m-4"
                type="text"
                {...register("img4")}
              />
            </div>
          </div>
          <br></br>
          <input
            type="submit"
            className="btn btn-primary  ml-28  text-base-100"
          />
        </form>
      </div>
    </div>
  );
};

export default AcademicBookss;
