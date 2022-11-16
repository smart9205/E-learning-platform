import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../Assets/wslogo.png";
import auth from "../../firebase.init";

const Footer = () => {
  const [user, loading, error] = useAuthState(auth);
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-base-200 border-t border-neutral">
      <footer className="footer p-10 text-base-content">
        <div className="md:w-60">
          <Link to={"/"} className="flex items-center lg:mx-0 md:mx-0 mx-auto">
            <img className="w-11" src={logo} alt="image" />
            <div className="ml-1 text-lg font-header font-bold">
              <p>Webb</p>
              <p className="-mt-2">School</p>
            </div>
          </Link>
          <div className="text-center lg:text-start md:text-start">
            <p className="font-bold text-xl ">
              Create your free account and start learning
            </p>
            {user ? (
              <Link to={'courses'}>
                <button className="btn mt-2 btn-accent font-thin text-white btn-sm">
                  Enroll Now
                </button>
              </Link>
            ) : (
              <Link to={"signup"}>
                <button className="btn mt-2 btn-accent font-thin text-white btn-sm">
                  Join Now
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="lg:block md:block hidden">
          <p className="text-lg font-bold  mb-2">Services</p>
          <Link to={"bookstore"} className="link link-hover block">
            Book Store
          </Link>
          <Link to={"courses"} className="link link-hover block">
            Courses
          </Link>
          <Link to={"admission"} className="link link-hover block">
            Admission Help
          </Link>
          <Link to={"jobs"} className="link link-hover block">
            Job Preparation
          </Link>
        </div>
        <div className="lg:block md:block hidden">
          <p className="text-lg font-bold  mb-2">Company</p>
          <Link to={"coming"} className="link link-hover block">
            About us
          </Link>
          <Link to={"blogs"} className="link link-hover block">
            Blogs
          </Link>
          <Link to={"coming"} className="link link-hover block">
            Privacy policy
          </Link>
          <Link to={"developer"} className="link link-hover block">
            Developer
          </Link>
        </div>
        {/* for mobile */}
        <div className="lg:hidden md:hidden flex mx-auto gap-10">
          <div>
            <p className="text-lg font-bold  mb-2">Services</p>
            <Link to={"bookstore"} className="link link-hover block">
              Book Store
            </Link>
            <Link to={"courses"} className="link link-hover block">
              Courses
            </Link>
            <Link to={"admission"} className="link link-hover block">
              Admission Help
            </Link>
            <Link to={"jobs"} className="link link-hover block">
              Job Preparation
            </Link>
          </div>
          <div>
            <p className="text-lg font-bold  mb-2">Company</p>
            <Link to={"coming"} className="link link-hover block">
              About us
            </Link>
            <Link to={"blogs"} className="link link-hover block">
              Blogs
            </Link>
            <Link to={"coming"} className="link link-hover block">
              Privacy policy
            </Link>
            <Link to={"developer"} className="link link-hover block">
              Developer
            </Link>
          </div>
        </div>
        <div className="lg:block md:block hidden">
          <span className="text-lg font-bold ">Keep up with us at</span>
          <p className="text-md">
            <span className="font-bold">Contact:</span> 00000 (8AM - 11PM)
          </p>
          <p className="text-md">
            <span className="font-bold">SMS:</span> WSHelp to 00000 (24X7)
          </p>
          <p className="text-md">
            <span className="font-bold">Email:</span> webbschool2023@gmail.com
          </p>
          <div className="hidden lg:inline md:inline pt-2">
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://web.facebook.com/rashelmahomudf/"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.instagram.com/rashel_mahomud/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.linkedin.com/in/rashelmahomud/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              className="text-2xl mr-4"
              href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center mb-2 lg:hidden md:hidden">
        <div className="grid grid-flow-col gap-4 mx-auto">
          <a
            target="_blank"
            className="text-2xl"
            href="https://web.facebook.com/rashelmahomudf/"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.instagram.com/rashel_mahomud/"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.linkedin.com/in/rashelmahomud/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            className="text-2xl"
            href="https://www.youtube.com/channel/UC34_bPGvxSQLNb8D8OcPRbA/videos"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </footer>
      <div className="border-t border-neutral lg:mx-10">
        <footer className="footer footer-center lg:py-4 lg:p-0 p-4">
          <div>
            <p>2022 - {year} Copyright © Webb School. All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
