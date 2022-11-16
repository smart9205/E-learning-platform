import React from "react";
import JobCard from "./JobCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Banner/Banner.css";

// import required modules
import { Pagination } from "swiper";
import useAllCourse from "../../../Hooks/useAllCourse";

const JobCourses = () => {
  const [ job ] = useAllCourse()
  return (
    <div className="pt-12 bg-base-100 border-b border-neutral" id="job">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
        Job Exam Preparation
      </h1>
      <h2 className="lg:text-2xl md:text-xl text-lg mt-6 text-center font-sub">
        Which job are you preparing for?
      </h2>
      <div className="my-4 mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={-25}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: -80,
            },
            "@0.25": {
              slidesPerView: 1,
              spaceBetween: -70,
            },
            "@0.60": {
              slidesPerView: 2,
              spaceBetween: -80,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: -64,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: -84,
            },
            "@1.25": {
              slidesPerView: 4,
              spaceBetween: -20,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: -20,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: -10,
            },
            "@2.00": {
              slidesPerView: 4,
              spaceBetween: -10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {job?.data.map((jobCourse) => (
            <SwiperSlide key={jobCourse._id}>
              <JobCard key={jobCourse._id} jobCourse={jobCourse}></JobCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JobCourses;
