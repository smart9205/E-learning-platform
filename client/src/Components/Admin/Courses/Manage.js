import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const Courses = () => {
  return (
    <div className="text-center">
      <div className="navbar bg-base-200 border-b border-neutral">
        <div className="flex-1 flex">
          <a className="normal-case text-xl">Manage Courses</a>
        </div>
        <div className="lg:flex flex-none hidden">
          <ul className="menu menu-compact menu-horizontal p-0">
            <li className='mx-1'>
              <Link to={"/admin/courses/manage"}>Special</Link>
            </li>
            <li className='mx-1'>
              <NavLink
                to={"/admin/courses/manage/language"}
                className="hover:rounded-none"
              >
                Language
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink
                to={"/admin/courses/manage/job"}
                className="hover:rounded-none"
              >
                Job
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink
                to={"/admin/courses/manage/admission"}
                className="hover:rounded-none"
              >
                Admission
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/admin/courses/manage"}>Special</Link>
            </li>
            <li>
              <NavLink
                to={"/admin/courses/manage/language"}
                className="hover:rounded-none"
              >
                Language
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/courses/manage/job"}
                className="hover:rounded-none"
              >
                Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/courses/manage/admission"}
                className="hover:rounded-none"
              >
                Admission
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Courses;
