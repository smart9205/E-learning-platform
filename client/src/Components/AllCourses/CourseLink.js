import React from "react";
import { useParams } from "react-router-dom";
import LinkChild from "./LinkChild";

const CourseLink = ({ course, allCourseData, myCourseData, refetch }) => {
  const { uname } = useParams();
  return (
    <>
      <div
        tabIndex="0"
        className="collapse collapse-plus border-t border-neutral mx-4"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-md font-medium peer-checked:bg-info peer-checked:text-white peer-checked:font-bold">
          {course?.title}
        </div>
        <ul className="menu px-0 collapse-content peer-checked:text-warning">
          {course.details.map((detail) => (
            <li>
              <LinkChild detail={detail} refetch={refetch} uname={uname} myCourseData={myCourseData} allCourseData={allCourseData}></LinkChild>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseLink;
