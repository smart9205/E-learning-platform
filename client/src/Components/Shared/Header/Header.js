import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiBell } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import wslogo from "../../../Assets/wslogo.png";
import auth from "../../../firebase.init";
import useRole from "../../../Hooks/useRole";
import Messages from "../../Messages/Messages";
import "./Header.css";

import primaryAxios from "../../../Api/primaryAxios";

import useAllCourse from "../../../Hooks/useAllCourse";
import useMessage from "../../../Hooks/useMessage";

const Header = ({ handleThemeChange, theme }) => {
  const [user, loading] = useAuthState(auth);
  const [role, roleLoading, userName] = useRole();
  
  const [admission, job, language] = useAllCourse();
  const { data: myCourse } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  
  const myCourseData = myCourse?.data.find((s) => s.uname);

  const courseData =
    admission?.data?.find((s) => s.uname === myCourseData?.uname) ||
    language?.data?.find((s) => s.uname === myCourseData?.uname) ||
    job?.data?.find((s) => s.uname === myCourseData?.uname);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [message, isLoading, refetch] = useMessage();

  const userMessageData = message?.data?.filter(
    (allcard) => allcard?.email === user?.email
  );
  const logout = () => {
    signOut(auth);
    //Token Remove
    localStorage.removeItem("accessToken");
  };
  let activeClassName = "relative text-white bg-red-600";
  let deactiveClassName = "relative text-green-600";
  const manuItems = (
    <>
      <li>
        <Link className="hover:rounded-none" to="/">
          Home
        </Link>
      </li>
      <li>
        <NavLink to="courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="bookstore">Book Store</NavLink>
      </li>
      <li>
        <NavLink to="audiobook">AudioBook</NavLink>
      </li>
      {/* <li>
        <NavLink to="admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="jobs">Jobs</NavLink>
      </li> */}
      <li>
        <NavLink to="blogs">Blog</NavLink>
      </li>

      {courseData?.meetLink?.MLink && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : deactiveClassName
            }
            to="LiveClasses"
          >
            Live Class
            <div className="inline-flex absolute -top-1.5 -right-1.5 justify-center items-center text-xs font-bold border-2 border-base-200 rounded-full text-green-600">
              <i className="fa-solid fa-circle"></i>
            </div>
          </NavLink>
        </li>
      )}

      {role === "admin" && (
        <li>
          <NavLink to="admin/courses/manage">Admin</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed top-0 w-full z-50 lg:px-10  bg-base-200 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b-[0.5px] border-neutral">
      <div className="navbar-start">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div>
            <ul tabIndex="0" className="bg-base-200 h-screen">
              <Link to="/">
                <div className="flex items-center p-2 w-full">
                  <img className="w-9 ml-3" src={wslogo} alt="image" />
                  <div className="ml-1 text-md font-sub font-bold mt-1">
                    <p>Webb</p>
                    <p className="-mt-2">School</p>
                  </div>
                </div>
              </Link>
              <ul className="menu menu-compact">
                <li>
                  <NavLink className="hover:rounded-none" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:rounded-none" to="courses">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:rounded-none" to="bookstore">
                    Book Store
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:rounded-none" to="audiobook">
                    AudioBook
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className='hover:rounded-none' to="admission">Admission</NavLink>
                </li>
                <li>
                  <NavLink className='hover:rounded-none' to="jobs">Jobs</NavLink>
                </li> */}
                <li>
                  <NavLink className="hover:rounded-none" to="blogs">
                    Blog
                  </NavLink>
                </li>

                {role === "admin" && (
                  <li>
                    <NavLink
                      className="hover:rounded-none"
                      to="admin/courses/manage"
                    >
                      Admin
                    </NavLink>
                  </li>
                )}
              </ul>
              <li>
                {user ? (
                  <div>
                    <div className="flex flex-nowrap items-center cursor-pointer border-b border-neutral w-full">
                      <label className="avatar">
                        <div className="w-7 mx-2 my-2 rounded-full border border-gray-200">
                          <img
                            src={`${
                              user?.photoURL
                                ? user?.photoURL
                                : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                            }`}
                          />
                        </div>
                      </label>
                      <p className="whitespace-nowrap">
                        {userName ? userName : "User"}
                        <i className="ml-2 fa-solid fa-angle-down"></i>
                      </p>
                    </div>
                    <ul className="menu menu-compact">
                      <li>
                        <NavLink className="hover:rounded-none" to={"profile"}>
                          <i className="ml-4 fa-solid fa-user" />
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="hover:rounded-none" to={"mycourse"}>
                          <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="hover:rounded-none" to={"mybooks"}>
                          <i className="ml-4 fa-solid fa-book"></i>My Books
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? activeClassName : deactiveClassName
                          }
                          to={"liveclasses"}
                        >
                          {courseData?.meetLink?.MLink ? (
                            <>
                              <i className="ml-4 fa-solid fa-video "></i>
                              <span>Live Class</span>
                            </>
                          ) : (
                            <>
                              <i className="ml-4 fa-solid fa-video"></i>
                              <span>Live Class</span>
                            </>
                          )}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="hover:rounded-none" to={"/orders"}>
                          <i className="ml-4 fa-solid fa-clock"></i>Payment
                          History
                        </NavLink>
                      </li>
                      <li>
                        <a className=" hover:rounded-none" onClick={logout}>
                          <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="border-t border-neutral">
                    <li>
                      <Link
                        className="mt-3 mx-3 w-56 btn-info btn-sm btn rounded-full text-white hover:rounded-full font-thin"
                        to="Login"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-[#494FC1] hover:bg-[#4a4e94] my-3 mx-3 w-56 hover:rounded-full btn-sm btn rounded-full text-white font-thin"
                        to="Signup"
                      >
                        Register
                      </Link>
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </Drawer>
        <Link to="/">
          <div className="flex items-center">
            <img className="w-9 ml-3" src={wslogo} alt="image" />
            <div className="ml-1 text-md font-header font-bold">
              <p>Webb</p>
              <p className="-mt-2">School</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal menu-compact p-0 gap-3 uppercase">
          {manuItems}
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex="0" className="pr-6 mt-3">
              <div className="indicator">
                <span className="indicator-item badge right-1 badge-xs w-[16px] h-[16px] bg-red-600 text-white">
                  {userMessageData?.length > 9 ? (
                    <span>9+</span>
                  ) : (
                    <span>{userMessageData?.length}</span>
                  )}
                </span>
                <FiBell className="text-xl" />
              </div>
            </button>
            <div
              tabIndex="0"
              className="dropdown-content  rounded-lg bg-base-200 border border-neutral mt-6 w-72 "
            >
              <div className="card-body p-1">
                <h3 className="text-xl px-3 pt-2">
                  Notifications!{" "}
                  <i className="text-yellow-500 fa-solid fa-bell"></i>
                </h3>
                <Messages></Messages>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={handleThemeChange}
          className="rounded-full lg:mx-2 pr-5"
        >
          {theme ? (
            <svg
              aria-hidden="true"
              id="theme-toggle-light-icon"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              id="theme-toggle-dark-icon"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                <img
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                  }`}
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 shadow menu menu-compact dropdown-content rounded-md w-56 bg-base-100 text-warning"
            >
              <div className="mx-auto mt-3">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src={`${
                        user?.photoURL
                          ? user?.photoURL
                          : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="border-b border-neutral">
                <h1 className="text-lg text-center">
                  {userName ? userName.slice(0, 14) : "User"}
                </h1>
                <p className="text-xs mb-2 text-center">Student</p>
              </div>
              <li>
                <NavLink to={"profile"} className=" hover:rounded-none">
                  <i className="ml-4 fa-solid fa-user" />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"mycourse"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:rounded-none" to={"mybooks"}>
                  <i className="ml-4 fa-solid fa-book"></i>My Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                  to={"liveclasses"}
                >
                  {courseData?.meetLink?.MLink ? (
                    <>
                      <i className="ml-4 fa-solid fa-video  "></i>
                      <span className="">Live Class</span>
                    </>
                  ) : (
                    <>
                      <i className="ml-4 fa-solid fa-video"></i>
                      <span>Live Class</span>
                    </>
                  )}
                </NavLink>
              </li>
              {/* <li>
                <NavLink to={"dashboard"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-chart-line"></i>Dashboard
                </NavLink>
              </li> */}
              <li>
                <NavLink to={"/orders"} className="hover:rounded-none">
                  <i className="ml-4 fa-solid fa-clock"></i>Payment History
                </NavLink>
              </li>
              <li>
                <a
                  onClick={logout}
                  className="hover:rounded-b-md hover:rounded-none text-red-600"
                >
                  <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex">
            <a className="btn-accent btn-sm btn rounded-md text-white font-thin">
              <Link to="Login">Login</Link>
            </a>
            <div className="divider lg:divider-horizontal"></div>
            <a className="bg-[#494FC1] hover:bg-[#4a4e94] btn-sm btn rounded-md text-white font-thin">
              <Link to="SignUp">Register</Link>
            </a>
          </div>
        )}
      </div>
      <div className="navbar-end lg:hidden flex">
        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex="0" className="pr-3 mt-3">
              <p>
                <FiBell className="text-xl" />
                <span className="inline-flex absolute text-xs text-left bg-red-600 rounded-full w-3 h-3 z-0 left-[8px] bottom-[18px] justify-center text-white">
                  <span className="text-xs -mt-[1.8px]">
                    {userMessageData?.length}
                  </span>
                </span>
              </p>
            </button>
            <div
              tabIndex="0"
              className="dropdown-content  rounded-lg bg-base-200 border border-neutral mt-6 w-72  -mr-14"
            >
              <div className="card-body p-1">
                <h3 className="text-xl px-3 pt-2">
                  Notifications!{" "}
                  <i className="text-yellow-500 fa-solid fa-bell"></i>
                </h3>
                <Messages></Messages>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={handleThemeChange}
          className="rounded-full lg:mx-2 font-bold px-2"
        >
          {theme ? (
            <svg
              aria-hidden="true"
              id="theme-toggle-light-icon"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              id="theme-toggle-dark-icon"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
        </button>
        <div className="dropdown">
          <label
            onClick={toggleDrawer}
            tabIndex="0"
            className="mx-4 text-2xl lg:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
