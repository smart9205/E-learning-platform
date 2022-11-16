import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import swal from "sweetalert";
import primaryAxios from "../../../Api/primaryAxios";
import NestedFieldArray from "./NestedFieldArray";

const AddLanguage = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "file",
  });

  const onSubmit = (data) => {
    const rvw = data?.file?.find((s) => s.details)
    const newReview = {
      ...data,
      videos: rvw?.details
      // email: user?.email,
      // name: user?.displayName,
      // image: user?.photoURL,
    };
    (async () => {
      const { data } = await primaryAxios.post(`/language`, newReview);
      if (data.acknowledged) {
        swal("The course has been successfully posted", {
          icon: "success",
          className: "rounded-xl",
        });

        reset();
      }
    })();
  };

  return (
    <div className="">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">
          Add Language Course{" "}
          <i className="fa-solid fa-folder-plus text-primary"></i>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-6 lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Content is required",
                },
                maxLength: {
                  value: 180,
                  message: `Maximum 180 Characters`,
                },
              })}
              placeholder="Language Course"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control lg:col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">URL Name</span>
            </label>
            <input
              type="text"
              {...register("uname", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="please-add-an-url-link-here"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text">Course Poster Link</span>
            </label>
            <input
              type="text"
              {...register("img", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="https://www.courseposterimage.com/poster.jpg"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Type</span>
            </label>
            <input
              type="text"
              {...register("list", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="bangla"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text">Course Description</span>
            </label>
            <input
              type="text"
              {...register("desc", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="description....."
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Intro Video URL</span>
            </label>
            <input
              type="text"
              {...register("introvdo", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="https://www.instructorimagelink.com/instructor.png"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">About Course(Part: A)</span>
            </label>
            <textarea
              type="text"
              {...register("abouta", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="about course...."
              className="textarea textarea-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">About Course(Part: B)</span>
            </label>
            <textarea
              type="text"
              {...register("aboutb", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="about course...."
              className="textarea textarea-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">About Course(Part: C)</span>
            </label>
            <textarea
              type="text"
              {...register("aboutc", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="about course...."
              className="textarea textarea-neutral bg-base-300"
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-x-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Topic A</span>
              </label>
              <input
                type="text"
                {...register("topica", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                placeholder="bangla"
                className="input input-neutral bg-base-300"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Topic B</span>
              </label>
              <input
                type="text"
                {...register("topicb", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                placeholder="bangla"
                className="input input-neutral bg-base-300"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Topic C</span>
              </label>
              <input
                type="text"
                {...register("topicc", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                placeholder="bangla"
                className="input input-neutral bg-base-300"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Topic D</span>
              </label>
              <input
                type="text"
                {...register("topicd", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                placeholder="bangla"
                className="input input-neutral bg-base-300"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              {...register("instructor", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="Muhammad Shafi"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Address</span>
            </label>
            <input
              type="text"
              {...register("instructoraddress", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="Patiya, Chattogram"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Image URL</span>
            </label>
            <input
              type="text"
              {...register("instructorimg", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="https://www.instructorimagelink.com/instructor.png"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name(2)</span>
            </label>
            <input
              type="text"
              {...register("instructorb", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="Muhammad Shafi"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Address</span>
            </label>
            <input
              type="text"
              {...register("instructorbaddress", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="Patiya, Chattogram"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Image URL</span>
            </label>
            <input
              type="text"
              {...register("instructorbimg", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
              placeholder="https://www.instructorimagelink.com/instructor.png"
              className="input input-neutral bg-base-300"
            />
          </div>
          <div className="form-control lg:col-span-3 md:col-span-2">
            <label className="label">
              <span className="label-text">Course Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                placeholder="1000"
                className="input input-neutral bg-base-300 w-full"
              />
              <span>BDT</span>
            </label>
          </div>
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Course Module</span>
            </label>
            <label>
              <div>
                <ul>
                  {fields.map((item, index) => {
                    return (
                      <li key={item.id}>
                        <label className="input-group">
                          <input
                            {...register(`file.${index}.title`)}
                            placeholder="Introduction"
                            className="input input-neutral bg-base-300 w-full"
                          />
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn btn-outline"
                          >
                            Delete
                          </button>
                        </label>
                        <NestedFieldArray
                          nestIndex={index}
                          {...{ control, register, errors, getValues }}
                        ></NestedFieldArray>
                      </li>
                    );
                  })}
                </ul>
                <section>
                  <button
                    type="button"
                    onClick={() => {
                      append();
                    }}
                    className="btn btn-sm btn-outline mr-3 btn-primary"
                  >
                    <i className="fa-solid fa-plus mr-2"></i>Add Module
                  </button>
                </section>
              </div>
            </label>
          </div>
          {/* {errors?.name && <p className="text-error">{errors.name.message}</p>}
          {errors?.img && <p className="text-error">{errors.img.message}</p>} */}
          <div className="form-control my-6">
            <button className="btn btn-primary text-white">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddLanguage;
