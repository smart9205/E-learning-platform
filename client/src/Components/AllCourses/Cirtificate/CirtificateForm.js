import React from "react";
import "./Cirtificate.css";

const CirtificateForm = ({ userData, courseData }) => {
  return (
    <form className="font-header">
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Awarded to</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={userData?.name}
            value={userData?.name}
            disabled
            className="input input-bordered"
          />
        </div>
      </div>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">For completing</span>
          </label>
          <input
            id="course"
            name="course"
            disabled
            placeholder={
              courseData?.name === "" && "No Course Showing"
            }
            value={courseData?.name}
            className="input input-bordered"
          />
        </div>
      </div>
    </form>
  );
};

export default CirtificateForm;
