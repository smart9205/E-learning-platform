import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";

const NestedFieldArray = ({ nestIndex, control, register, errors }) => {
  const [value, setValue] = useState(0)
  const { fields, remove, append } = useFieldArray({
    control,
    name: `file[${nestIndex}].details`,
  });
  return (
    <div>
      <div className="ml-16">
        {fields.map((item, k) => {
          return (
            <div key={item.id}>
              <label className="input-group my-2">
                <input
                  type="text"
                  {...register(`file[${nestIndex}].details[${k}].name`)}
                  placeholder="Module Name"
                  onChange={setValue}
                  className="input input-bordered bg-base-300 w-full"
                />
                <input
                  type="text"
                  {...register(`file[${nestIndex}].details[${k}].fileName`)}
                  placeholder="fileName"
                  className="input input-bordered bg-base-300 w-full"
                />
                <input
                  type="text"
                  {...register(`file[${nestIndex}].details[${k}].vurl`)}
                  placeholder="Video Url"
                  className="input input-bordered bg-base-300 w-full"
                />
                <button
                  type="button"
                  onClick={() => remove(k)}
                  className="btn btn-outline"
                >
                  Delete
                </button>
              </label>
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => append()}
          className="btn mt-3 mb-6 btn-sm btn-outline btn-primary"
        >
          <i className="fa-solid fa-plus mr-2"></i>Add Lesson
        </button>
      </div>
    </div>
  );
};

export default NestedFieldArray;
