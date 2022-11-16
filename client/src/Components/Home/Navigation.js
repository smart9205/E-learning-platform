import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import "./Banner/Banner.css";
const Navigation = () => {
  return (
    <div className="lg:px-10 px-3 py-16 bg-base-100 border-b border-neutral">
      <div className="">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
          Discover Your Future With Us
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub">
          Choose your topic from our vast library to get started
        </p>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 lg:grid-cols-4 gap-4 px-3 py-3 rounded-xl">
        <Link
          to={'/bookstore'}
          className="hover:border hover:border-success border border-base-100 hover:text-success text-lg bg-base-100 rounded-xl "
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
              <i className="fa-solid fa-book-open text-4xl lg:pr-3 md:pr-3 lg:block md:block text-sky-500 lg:py-6 md:py-6"></i>
              <br />
              <span className="lg:pt-7 md:pt-7">Book Store</span>
            </p>
          </div>
        </Link>
        <AnchorLink
          href="#admission"
          className="hover:border hover:border-success border border-base-100 hover:text-success text-lg bg-base-100 rounded-xl "
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
              <i className="fa-solid fa-graduation-cap text-4xl lg:pr-3 md:pr-3 lg:block md:block text-green-500 lg:py-6 md:py-6"></i>
              <br />
              <span className="lg:pt-7 md:pt-7">Admission</span>
            </p>
          </div>
        </AnchorLink>
        <AnchorLink
          href="#job"
          className="hover:border hover:border-success border border-base-100 hover:text-success text-lg bg-base-100 rounded-xl "
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
              <i className="fa-solid fa-briefcase text-4xl lg:pr-3 md:pr-3 lg:block md:block text-purple-500 lg:py-6 md:py-6"></i>
              <br />
              <span className="lg:pt-7 md:pt-7">Job Exam</span>
            </p>
          </div>
        </AnchorLink>
        <AnchorLink
          href="#courses"
          className="hover:border hover:border-success border border-base-100 hover:text-success text-lg bg-base-100 rounded-xl "
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
              <i className="fa-solid fa-rocket text-4xl lg:pr-3 md:pr-3 lg:block md:block text-orange-500 lg:py-6 md:py-6"></i>
              <br />
              <span className="lg:pt-7 md:pt-7">Courses</span>
            </p>
          </div>
        </AnchorLink>
      </div>
      <div className="flex flex-col justify-center w-full lg:flex-row mt-14 mb-8  lg:text-left text-center font-sub">
        <h1 className="text-3xl font-bold lg:mx-8 mx-4 lg:text-left text-center">
          <span className="text-info">Webb School</span> is the great platform
          for distance learning.
        </h1>
        <div className="lg:divider divide-primary lg:divider-horizontal"></div>
        <p className="text-lg mt-4 hidden lg:block md:block">
          Here is our amazing teaching method thad suits for you. Read our
          features and know the best.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 md:grid-cols-4 lg:grid-cols-5 lg:mx-8 my-8">
        <div className="card transform transition duration-500 hover:scale-110">
          <div className="card-body p-0 mt-9">
            <div className="avatar mx-auto lg:my-3 mb-3">
              <div className="w-18 rounded bg-[#D65B40] shadow-[#D65B40] shadow-lg">
                <i className="fa-solid fa-briefcase lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 className="text-md lg:text-lg text-center">
              An Easy Study Aproach
            </h2>
          </div>
        </div>
        <div className="card transform transition duration-500 hover:scale-110">
          <div className="card-body p-0 mt-9">
            <div className="avatar mx-auto lg:my-3 mb-3">
              <div className="w-18 rounded bg-[#59D7FC] shadow-[#59D7FC] shadow-lg">
                <i className="fa-solid fa-school-flag lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 className="text-md lg:text-lg text-center">
              An Accredited School
            </h2>
          </div>
        </div>
        <div className="card transform transition duration-500 hover:scale-110">
          <div className="card-body p-0 mt-9">
            <div className="avatar mx-auto lg:my-3 mb-3">
              <div className="w-18 rounded bg-[#8070FE] shadow-[#8070FE] shadow-lg">
                <i className="fa-solid fa-comment-dollar lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 className="text-md lg:text-lg text-center">
              An Easy Payment Credit
            </h2>
          </div>
        </div>
        <div className="card transform transition duration-500 hover:scale-110 md:col-span-3/2">
          <div className="card-body p-0 mt-9">
            <div className="avatar mx-auto lg:my-3 mb-3">
              <div className="w-18 rounded bg-[#00AAA0] shadow-[#00AAA0] shadow-lg">
                <i className="fa-solid fa-brain lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 className="text-md lg:text-lg text-center">
              An Skill Development Platform
            </h2>
          </div>
        </div>
        <div className="card transform transition duration-500 hover:scale-110 col-span-2 lg:col-span-1 md:col-start-2 md:col-end-4">
          <div className="card-body p-0 mt-9">
            <div className="avatar mx-auto lg:my-3 mb-3">
              <div className="w-18 rounded bg-[#77E13C] shadow-[#77E13C] shadow-lg">
                <i className="fa-solid fa-leaf lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 className="text-md lg:text-lg text-center">
              An Amazing Study Environment
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
