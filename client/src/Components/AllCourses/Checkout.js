import React from "react";
import { useParams } from "react-router-dom";
import useAllCourse from "../../Hooks/useAllCourse";
import Stripe from "../Payments/Stripe";

const Checkout = () => {
  const { uname } = useParams();
  const [admission, job, language] = useAllCourse();
  const courseData =
    admission?.data?.find((allcard) => allcard.uname === uname) ||
    language?.data?.find((allcard) => allcard.uname === uname) ||
    job?.data?.find((allcard) => allcard.uname === uname);

  return (
    <div className="hero bg-base-100 py-8">
      <div className="flex justify-between w-full flex-col md:flex-row lg:flex-row items-start">
        <div className="text-center w-11/12 lg:w-7/12 md:w-6/12 lg:text-left mx-auto">
          <p className="text-2xl mb-4 font-bold">
            The course you are purchasing :
          </p>
          <div className="p-6 bg-base-300 border-[0.5px] border-neutral rounded-2xl">
            <div className="lg:flex items-center">
              <img
                src={courseData?.img}
                className="lg:h-60 w-full lg:w-96 rounded-lg"
                alt="image"
              />
              <div className="card-body p-0 px-4 lg:block w-full">
                <div className="text-left">
                  <p className="text-2xl font-bold lg:my-0 my-2">
                    {courseData?.name}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-left">
                  <p>
                    <i className="fa-solid fa-video pr-2 text-[#efad1e]"></i>
                    120H Videos
                  </p>
                  <p>
                    <i className="fa-solid fa-users pr-2 text-[#efad1e]"></i>758
                    Students
                  </p>
                  <p>
                    <i className="fa-solid fa-headset pr-2 text-[#efad1e]"></i>
                    Support
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
                    <i className="fa-solid fa-clock pr-2 text-[#efad1e]"></i>6
                    Month
                  </p>
                </div>
                <div className="flex text-lg font-bold bg-opacity-20 bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
                  <div>
                    <p>Price</p>
                  </div>
                  <div>
                    <p className="text-2xl">${courseData?.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-4/12 md:w-5/12 w-11/12 mx-auto    mt-4 border border-neutral bg-base-300">
          <Stripe courseData={courseData}></Stripe>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
