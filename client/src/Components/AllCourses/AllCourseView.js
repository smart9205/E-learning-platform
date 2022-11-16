import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import useAllCourse from "../../Hooks/useAllCourse";
import Loading from "../Shared/Loading/Loading";
import CourseSyllabus from "./CourseSyllabus";
import ReviewView from "./ReviewView";

const AllCourseView = () => {
  const { uname } = useParams();
  const [admission, job, language] = useAllCourse();
  const courseData =
    admission?.data?.find((allcard) => allcard.uname === uname) ||
    language?.data?.find((allcard) => allcard.uname === uname) ||
    job?.data?.find((allcard) => allcard.uname === uname);
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery(["reviewsData"], () => primaryAxios.get(`/reviews`));
  const reviewData = reviews?.data?.filter(
    (allcard) => allcard.courseName === uname
  );
  const ratingData = reviewData?.map((allcard) => allcard.rating);
  const totalRating = ratingData?.reduce((a, b) => a + b, 0);
  const avgRating = totalRating / ratingData?.length;
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="hero bg-base-100 my-10">
      <div className="flex justify-center lg:w-full w-11/12 gap-10 flex-col-reverse lg:flex-row-reverse md:flex-row-reverse items-start">
        <div className="lg:hidden md:hidden">
          <h1 className="text-2xl mt-6 mb-2">Reviews({ratingData?.length})</h1>
          <div className="flex flex-col">
            {reviewData
              ?.slice(0)
              .reverse()
              .map((review) => (
                <ReviewView
                  key={review._id}
                  review={review}
                  refetch={refetch}
                ></ReviewView>
              ))}
          </div>
        </div>
        <div className="card lg:w-1/3 md:w-2/3 bg-[#354795] lg:sticky lg:top-24 md:sticky md:top-20 shadow-xl text-white">
          <div className="card-body">
            <h2 className="text-2xl pb-2">
              Everything that is included in this course
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <p>
                <i className="fa-solid fa-video pr-2 text-[#efad1e]"></i>
                {courseData?.videos.length} Videos
              </p>
              <p>
                <i className="fa-solid fa-users pr-2 text-[#efad1e]"></i>758
                Students
              </p>
              <p>
                <i className="fa-solid fa-headset pr-2 text-[#efad1e]"></i>
                Mentor Support
              </p>
              <p>
                <i className="fa-solid fa-circle-question pr-2 text-[#efad1e]"></i>
                Quizzes
              </p>
              <p>
                <i className="fa-solid fa-certificate pr-2 text-[#efad1e]"></i>
                Certificate
              </p>
              <p>
                <i className="fa-solid fa-clock pr-2 text-[#efad1e]"></i>6 Month
              </p>
            </div>
            <div className="flex text-lg font-bold bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
              <div>
                <p>Course Price</p>
              </div>
              <div>
                <p className="text-2xl">${courseData?.price}</p>
              </div>
            </div>
            <Link to={`/checkout/${uname}`}>
              <button className="text-lg font-bold p-4 rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Course
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-full">
          <h1 className="text-4xl font-bold text-warning">
            {courseData?.name}
          </h1>
          <p className="pt-3 text-lg">{courseData?.desc}</p>
          <div className="py-3">
            {courseData?.badge ? (
              <div className="badge rounded-none font-bold text-base-100 bg-info mr-2">
                Bestseller
              </div>
            ) : (
              <></>
            )}
            {avgRating ? (
              <span className="mr-2 font-bold text-[#c48b07]">
                {avgRating?.toString().slice(0, 3)}
              </span>
            ) : (
              <></>
            )}
            <Rating
              className="text-[#FAAF00] mr-2"
              initialRating={avgRating}
              readonly
              emptySymbol={<ImStarEmpty />}
              fullSymbol={<ImStarFull />}
            />
            <span className="opacity-70">({ratingData?.length} ratings)</span>
          </div>
          <div className="lg:h-80 h-48 md:h-96 w-full border border-neutral">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              light={true}
              url={courseData?.introvdo}
              playing
            />
          </div>
          <h1 className="text-2xl mt-6 mb-2">Instructor:</h1>
          <div className="w-full border border-neutral rounded-md mb-4 grid lg:grid-cols-2 md:grid-cols-2">
            <div className="p-3 flex items-center gap-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={courseData?.instructorimg} />
                </div>
              </div>
              <div>
                <p className="text-lg">{courseData?.instructor}</p>
                <p>Ctg, Bangladesh</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={courseData?.instructorbimg} />
                </div>
              </div>
              <div>
                <p className="text-lg">{courseData?.instructorb}</p>
                <p>Ctg, Bangladesh</p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl mt-6 mb-2">
            What will you learn from this course
          </h1>
          <div className="w-full border border-neutral rounded-md">
            <div className="border-b border-neutral px-5 py-6">
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>
                {courseData?.topica}{" "}
              </p>
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>
                {courseData?.topicb}{" "}
              </p>
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>
                {courseData?.topicc}{" "}
              </p>
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>
                {courseData?.topicd}{" "}
              </p>
            </div>
            <div className="px-5 py-6">
              <p className="text-lg font-bold mb-2">About this course</p>
              <p className="text-lg mb-3">{courseData?.abouta}</p>
              <p className="text-lg mb-3">{courseData?.aboutb}</p>
              <p className="text-lg mb-3">{courseData?.aboutc}</p>
            </div>
          </div>
          <h1 className="text-2xl mt-6 mb-2">Course Syllabus</h1>
          <div className="card rounded-md w-full border-t-0 border border-neutral">
            {courseData?.file ? (
              <div className="card-body gap-0 p-0">
                {courseData?.file.map((course) => (
                  <CourseSyllabus
                    key={course.id}
                    course={course}
                  ></CourseSyllabus>
                ))}
              </div>
            ) : (
              <div>Coming Soon</div>
            )}
          </div>
          {/* <h1 className="text-2xl mt-6 mb-2">Student Feedback</h1>
          <div className="flex items-center gap-3">
            <div className="text-center font-bold ">
              <h1 className="text-7xl">5.0</h1>
              <h1 className="text-yellow-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </h1>
              <h1 className="whitespace-nowrap">Course Rating</h1>
            </div>
            <div className="w-full">
              <div className="flex items-center">
                <h1 className=" font-bold">
                  <span className="ml-2">5</span>
                </h1>
                <div className="mx-4 lg:w-10/12 md:w-8/12 w-7/12 h-4 bg-base-300 rounded">
                  <div className="h-4 bg-yellow-400 rounded w-[70%]"></div>
                </div>
                <h1 className=" font-bold">
                  <span className="ml-2">70%</span>
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className=" font-bold">
                  <span className="ml-2">4</span>
                </h1>
                <div className="mx-4 lg:w-10/12 md:w-8/12 w-7/12 h-4 bg-base-300 rounded">
                  <div className="h-4 bg-yellow-400 rounded w-[17%]"></div>
                </div>
                <h1 className=" font-bold">
                  <span className="ml-2">17%</span>
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className=" font-bold">
                  <span className="ml-2">3</span>
                </h1>
                <div className="mx-4 lg:w-10/12 md:w-8/12 w-7/12 h-4 bg-base-300 rounded">
                  <div className="h-4 bg-yellow-400 rounded w-[8%]"></div>
                </div>
                <h1 className=" font-bold">
                  <span className="ml-2">8%</span>
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className=" font-bold">
                  <span className="ml-2">2</span>
                </h1>
                <div className="mx-4 lg:w-10/12 md:w-8/12 w-7/12 h-4 bg-base-300 rounded">
                  <div className="h-4 bg-yellow-400 rounded w-[3%]"></div>
                </div>
                <h1 className=" font-bold">
                  <span className="ml-2">4%</span>
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className=" font-bold">
                  <span className="ml-2">1</span>
                </h1>
                <div className="mx-4 lg:w-10/12 md:w-8/12 w-7/12 h-4 bg-base-300 rounded">
                  <div className="h-4 bg-yellow-400 rounded w-[1%]"></div>
                </div>
                <h1 className=" font-bold">
                  <span className="ml-2">1%</span>
                </h1>
              </div>
            </div>
          </div> */}
          <div className="lg:block md:block hidden">
            <h1 className="text-2xl mt-6 mb-2">
              Reviews({ratingData?.length})
            </h1>
            <div className="flex flex-col">
              {reviewData
                ?.slice(0)
                .reverse()
                .map((review) => (
                  <ReviewView
                    key={review._id}
                    review={review}
                    refetch={refetch}
                  ></ReviewView>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseView;
