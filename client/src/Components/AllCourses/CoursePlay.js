import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet, useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useCourse from "../../Hooks/useCourse";
import CourseLink from "./CourseLink";

const CoursePlay = () => {
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const [courseData] = useCourse();
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  const myCourseData = myCourse?.data?.find(
    (allcard) => allcard.uname === uname
  );
  const progress =
    (myCourseData?.progress?.length / courseData?.videos?.length) * 100;
  const stringProgress = progress?.toString();
  const stringProgressp = progress?.toString() + "%";

  const { data: userData } = useQuery(["userProfile", user?.email], () =>
    primaryAxios.get(`/user-role?email=${user?.email}`)
  );
  return (
    <div>
      {courseData?.meetLink?.MLink && (
        <div className="hidden lg:flex fixed flex-col top-[20%] left-1">
          <ul>
            <li className="w-[140px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-red-500 rounded">
              <a
                className="flex justify-between mx-3 items-center hover:bg-red-500 w-full text-white font-bold"
                href={courseData?.meetLink?.MLink}
                target="blank"
              >
                LIVE CLASS<i className="fa-solid fa-video"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="hero bg-base-100 py-8">
        <div className="flex justify-center lg:w-full w-11/12 gap-8 flex-col-reverse lg:flex-row-reverse items-start">
          <div className="card rounded-lg lg:w-96 w-full bg-base-200 border border-neutral">
            <div className="card-body p-0">
              <p className="text-lg p-3 border-b border-neutral">
                Course Lesson
              </p>
              {myCourseData && (
                <div className="px-5 flex flex-col gap-2 text-warning font-bold">
                  <p>
                    {myCourseData?.progress?.length
                      ? myCourseData?.progress?.length
                      : "0"}
                    /{courseData?.videos?.length} Module Completed - Progress{" "}
                    {progress ? stringProgress.slice(0, 4) : "0"}%
                  </p>
                  <div>
                    {progress > 0 ? (
                      <div className="bg-neutral rounded-full h-2.5">
                        <div
                          className={`bg-[#3EC65D] h-2.5 rounded-full`}
                          style={{
                            width: `${stringProgressp}`,
                            maxWidth: "100%",
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div className="bg-neutral rounded-full h-2.5">
                        <div
                          className={`bg-[#3EC65D] h-2.5 rounded-full`}
                          style={{
                            width: "0%",
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {myCourseData?.file.map((course) => (
                <CourseLink
                  key={course.id}
                  refetch={refetch}
                  course={course}
                  myCourseData={myCourseData}
                  allCourseData={courseData}
                ></CourseLink>
              ))}
            </div>
            <div>
              {progress === 100 && (
                <>
                  <Link to={`/course/summary/${myCourseData?.uname}`}>
                    <button
                      className="text-center py-2 text-accent border-t border-neutral hover:bg-info hover:text-base-100 rounded-none inline-block
                    btn-block btn-ghost uppercase cursor-pointer mx-auto"
                    >
                      Course Summary
                    </button>
                  </Link>
                  {/* */}
                </>
              )}
            </div>
          </div>
          <div className="lg:w-[640px] w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlay;
