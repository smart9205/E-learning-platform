import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useCourse from "../../Hooks/useCourse";
import NoteFound from '../WrongRoute/NoteFound';
import AddReview from "./AddReview";
import SummaryUser from "./SummaryUser";
const Summary = () => {
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
  return (
    <>
      {stringProgress === "100" ? (
        <div className="hero bg-base-300 py-4">
          <div className="hero-content items-start lg:flex-row md:flex-row flex-col flex gap-4">
            <div className="lg:w-7/12 md:w-9/12 shadow-xl bg-base-100 rounded-lg">
              <SummaryUser></SummaryUser>
            </div>
            <div className="w-full lg:w-full">
              <AddReview></AddReview>
            </div>
          </div>
        </div>
      ) : (
        <NoteFound></NoteFound>
      )}
    </>
  );
};

export default Summary;
