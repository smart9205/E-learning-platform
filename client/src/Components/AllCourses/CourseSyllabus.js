import React from "react";

const CourseSyllabus = ({ course }) => {
  return (
    <>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border-t border-neutral px-2"
      >
        <input type="checkbox" />
        <div className="collapse-title font-bold text-lg">{course?.title}</div>
        <ul className="menu collapse-content px-0">
          {course.details.map((detail) => (
            <li key={detail.id}>
              <p className="border-t border-neutral hover:rounded-none">
                <p className="text-md">
                  <i className="fa-solid fa-play mr-2"></i>
                  {detail?.fileName}
                </p>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseSyllabus;
