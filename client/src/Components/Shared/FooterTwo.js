import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <div className="bg-base-200 border-t font-sub border-neutral">
      <section>
        <div className="container py-16 mx-auto">
          <div className="flex flex-wrap pl-10 ">
            <div className="p-4  lg:w-1/4 sm:w-1/2 w-full ">
              <h2 className="tracking-widest font-header mb-4 text-lg sm:text-left ">
                Language Learning
              </h2>
              <nav className="flex flex-col  items-start -mb-1 space-y-2.5 ">
                <Link to={'/course/english-for-career-development'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  English for Career Development
                </Link>
                <Link  to={'/course/improve-english-communcation-skills'}> 
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Improve English Communication 
                </Link >
                <Link to={'/course/chinese-for-beginners'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Chinese For Beginners
                </Link>
                <Link to={'course/grammar-and-punctuation'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Grammar and Punctuation
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="tracking-widest font-header mb-4 text-lg sm:text-left">
                Job Recruitment
              </h2>
              <nav className="flex flex-col text-cestarttems-center -mb-1 space-y-2.5">
                <Link  to={'/course/bank-job'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Bank Job
                </Link >
                <Link to={'/course/developer-job'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Complete Web Development skills
                </Link>
                <Link  to={'/course/corporate-job'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Govt Job
                </Link>
                <Link  to={'/course/freelancer-job'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  BCS Preliminary
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="tracking-widest font-header mb-4 text-lg sm:text-left">
                Prepare For The Admission
              </h2>
              <nav className="flex flex-col text-cestarttems-center -mb-1 space-y-2.5">
                <Link to={'/course/varsity-admission-course'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  University Admission
                </Link>
                <Link  to={'/course/medical-admission-course'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Medical Admission
                </Link>
                <Link  to={'/course/medical-admission-q-solve'}> 
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Medical Q.Sol
                </Link>
                <Link to={'/course/varsity-admission-q-solve'}>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center o">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  University Q.Sol
                </Link>
              </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="tracking-widest font-header mb-4 text-lg sm:text-left">
                New Courses
              </h2>
              <nav className="flex flex-col text-cestarttems-center -mb-1 space-y-2.5">
                <a>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Coming Soon
                </a>
                <a>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Coming Soon
                </a>
                <a>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Coming Soon
                </a>
                <a>
                  <span className="bg-base-300 text-primary w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Coming Soon
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterTwo;
