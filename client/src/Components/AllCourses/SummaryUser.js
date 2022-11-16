import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useCourse from "../../Hooks/useCourse";
import Loading from "../Shared/Loading/Loading";
import Cirtificate from "./Cirtificate/Cirtificate";

const SummaryUser = () => {
  const [user] = useAuthState(auth);
  const [courseData] = useCourse();
  const { uname } = useParams();
  const { data: myCourse, mcLoading } = useQuery(
    ["myCourses", user?.email],
    () => primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  const myCourseData = myCourse?.data?.find(
    (allcard) => allcard.uname === uname
  );
  const progress =
    (myCourseData?.progress?.length / courseData?.videos?.length) * 100;
  const stringProgress = progress?.toString();
  console.log(stringProgress);
  const {
    data: muser,
    isLoading,
    refetch,
  } = useQuery(["userProfile", user?.email], () =>
    primaryAxios.get(`/user-role?email=${user?.email}`)
  );
  if (isLoading || mcLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-8 lg:mt-0 my-8 pb-8 pt-1">
      <div>
        <img
          src={muser?.data?.image}
          className="w-24 my-12 rounded-full mx-auto"
          alt="image"
        />
        <div className="flex justify-between font-mono text-lg">
          <div>
            <p>Name</p>
            <p>Email</p>
            <p>Status</p>
          </div>
          <div>
            <p>{muser?.data?.name}</p>
            <p className="text-warning">{user?.email}</p>
            <p className="text-green-600">Completed</p>
          </div>
        </div>
      </div>
      <div className=" my-8">
        <p className="text-lg font-mono text-blue-400">{myCourseData?.name}</p>
        <p className="text-lg font-mono uppercase">Finished Lessons</p>
        <div className="border border-neutral border-t-0">
          {myCourseData?.file.map((course) => (
            <div
              tabIndex="0"
              className="collapse collapse-plus bg-base-200 border-t border-neutral"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-md font-medium peer-checked:bg-info peer-checked:text-white peer-checked:font-bold">
                {course?.title}
              </div>
              <ul className="menu px-0 collapse-content peer-checked:text-warning">
                {course.details.map((detail) => (
                  <li>
                    <a className="border-t border-neutral text-warning justify-between">
                      <div className="flex gap-2">
                        <i className="fa-solid text-xl text-info fa-circle-play"></i>
                        <p>{detail?.name}</p>
                      </div>
                      <i className="fa-solid fa-circle-check text-green-500"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between font-mono">
        <p className="text-xl">Certificate</p>
        {myCourseData?.certificate ? (
          <>
            <a
              href={myCourseData?.certificate?.certificate}
              target="_blank"
              className="btn btn-sm font-header btn-primary"
              rel="noreferrer"
            >
              Download
            </a>
          </>
        ) : (
          <>
            <label
              for="my-modal-4"
              className="btn modal-button btn-sm font-header btn-primary"
            >
              Apply for certificate
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" className="modal cursor-pointer">
              <label
                className="modal-box rounded-lg border border-neutral relative"
                for=""
              >
                <Cirtificate
                  userData={muser?.data}
                  courseData={myCourseData}
                ></Cirtificate>
              </label>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default SummaryUser;
