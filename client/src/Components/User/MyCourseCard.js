import React from "react";
import { Link } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import useAllCourse from "../../Hooks/useAllCourse";

const MyCourseCard = ({ allcard, refetch }) => {
  const cardIndex = allcard?.file[0].details[0].fileName;

  const [admission, job, language] = useAllCourse();

  const courseData =
    admission?.data?.find((s) => s.uname === allcard?.uname) ||
    language?.data?.find((s) => s.uname === allcard?.uname) ||
    job?.data?.find((s) => s.uname === allcard?.uname);
  // const meetData = courseData?.filter((s) => s.meetLink)
  const progress =
    (allcard?.progress?.length / courseData?.videos?.length) * 100;
  const stringProgress = progress?.toString();
  const stringProgressp = progress?.toString() + "%";

  const fileName = allcard?.progress?.find((s) => s.i === cardIndex);
  const handleStatus = (_id) => {
    if (fileName) {
      refetch();
    } else {
      (async () => {
        const { data } = await primaryAxios.put(`/mycourse/${_id}`, {
          i: cardIndex,
          // progress: {i: detail?.fileName} + {i: myCourseData?.progress?.i}
        });
        if (data.success) {
          refetch();
        }
      })();
    }
  };
  return (
    <Link
      onClick={() => handleStatus(allcard?._id)}
      to={`/course/${allcard?.uname}/${allcard?.list}/${cardIndex}`}
      className="justify-self-center"
    >
      <div
        className="mx-auto p-6 lg:flex bg-base-200 shadow-lg rounded-2xl
       hover:-translate-y-3 border-neutral  transform transition duration-300 text-warning h-full"
      >
        <figure className="">
          <img
            src={allcard?.img}
            alt="Shoes"
            className="h-full md:h-48 lg:h-36 rounded-xl w-96"
          />
        </figure>
        <div className="w-full content-between grid">
          <h2 className="px-2 py-1 text-xl">{allcard?.name.slice(0, 30)}</h2>
          <div className="px-2">
            {progress > 0 ? (
              <div className="flex justify-between items-center gap-3">
                <div className="w-full bg-neutral rounded-full h-2.5">
                  <div
                    className={`bg-[#3EC65D] h-2.5 rounded-full`}
                    style={{
                      width: `${stringProgressp}`,
                    }}
                  ></div>
                </div>
                <p>{progress ? stringProgress?.slice(0, 4) : "0"}%</p>
              </div>
            ) : (
              <div className="flex justify-between items-center gap-3">
                <div className="w-full bg-neutral rounded-full h-2.5">
                  <div
                    className={`bg-[#3EC65D] h-2.5 rounded-full`}
                    style={{
                      width: `0%`,
                    }}
                  ></div>
                </div>
                <p>{progress ? progress : "0"}%</p>
              </div>
            )}
            <div className="mt-2 w-32 text-sm">
              <p className="text-white p-[5px] h-8 rounded-full text-center btn-secondary">
                Continue Course
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyCourseCard;
