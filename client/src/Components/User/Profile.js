import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import Loading from "../Shared/Loading/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { NavHashLink } from "react-router-hash-link";
import "./Profile.css";
import useTitle from "../../Hooks/useTitle";
const Profile = () => {
  useTitle("Profile");
  const [{ email }] = useAuthState(auth);
  const [isEdit, setIsEdit] = useState(null);
  const [role, roleLoading] = useRole();
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery(["userProfile", email], () =>
    primaryAxios.get(`/user-role?email=${email}`)
  );
  if ( isLoading || updating ) {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-10">
      <div
        className="hero"
        style={{  
          backgroundImage: `url(${user?.data?.coverPhoto ? user?.data?.coverPhoto : "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-opacity-70 hero-overlay"></div>
        <div className="text-left text-warning lg:pt-32 lg:pb-60 px-4 pt-20 pb-52">
          <h1 className="text-left text-5xl font-bold">
            Hello, {user?.data?.name ? user?.data?.name : "- - -"}
          </h1>
          <p className="my-5 font-serif text-lg">
            This is your profile page. You can see the progress you've made with
            your work and manage your projects or assigned tasks
          </p>
          <NavHashLink
            to={"/profile/update#profile"}
            className="mt-5 btn btn-primary rounded-md"
          >
            Edit profile
          </NavHashLink>
        </div>
      </div>
      <div className="lg:flex justify-between lg:mx-8">
        <div className=" lg:w-4/12 w-11/12 md:w-10/12 mx-auto mt-[-170px] mb-6">
          <div className="card shadow-2xl bg-base-100">
            <NavHashLink
              to={"/profile/update#profile"}
            >
              <p className="text-right pr-3 pt-2">
                <i className="fa-solid fa-pen-to-square"></i>
              </p>
            </NavHashLink>
            <div>
              <div className="items-center form-control">
                <div>
                  <img
                    src={`${user?.data?.image
                        ? user?.data?.image
                        : "https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png"
                      }`}
                      className="w-32 h-32 rounded-full m-2"
                    />
                </div>
                <h1 className="text-2xl font-bold">{user?.data?.name ? user?.data?.name : "- - -"}{user?.data?.gender === 'Male' && (<i className="fa-solid fa-mars text-primary ml-2"></i>)}{user?.data?.gender === 'Female' && (<i className="fa-solid fa-venus text-secondary ml-2"></i>)}</h1>
                <h1 className="text-sm opacity-60">{user?.data?.email ? user?.data?.email : "- - -"}</h1>
                <h1 className="text-lg">{user?.data?.profession ? user?.data?.profession : "- - -"}</h1>
                <div className="stats form-control">
                  <div className="stat place-items-center">
                    <div className="stat-value">1</div>
                    <div className="stat-desc">Course</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-value text-secondary">20</div>
                    <div className="stat-desc text-secondary">Video</div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-value">50</div>
                    <div className="stat-desc">Quiz</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-1 m-4">
                <button className="btn btn-info btn-xs mb-4">Message</button>
                <button className="btn btn-info btn-xs">Connect</button>
              </div>
            </div>
            <div className="card-body py-2 flex-row">
              <div>
                <h1><i className="fa-solid fa-clock"></i></h1>
                <h1><i className="fa-solid fa-square-phone"></i></h1>
                <h1><i className="fa-solid fa-location-dot"></i></h1>
                <h1><i className="fa-solid fa-graduation-cap"></i></h1>
                <h1><i className="fa-solid fa-heart text-red-500"></i></h1>
                <h1><i className="fa-solid text-yellow-600 fa-bookmark"></i></h1>
              </div>
              <div>
                <h1>Joined</h1>
                <h1>Phone</h1>
                <h1>Address</h1>
                <h1>Education</h1>
                <h1>Reputation</h1>
                <h1>Rank</h1>
              </div>
              <div>
                <h1 className="ml-8">{user?.data?.joinDate ? user?.data?.joinDate : "- - -"}</h1>
                <h1 className="ml-8">{user?.data?.phone ? user?.data?.phone : "- - -"}</h1>
                <h1 className="ml-8">{user?.data?.address ? user?.data?.address : "- - -"}</h1>
                <h1 className="ml-8">{user?.data?.education ? user?.data?.education : "- - -"}</h1>
                <h1 className="ml-8">000</h1>
                <h1 className="ml-8 capitalize">{role ? role : "Newbie"}</h1>
              </div>
            </div>
            <div className="card-body py-2 gap-0">
              <h1><i className="fa-solid fa-user-tie mr-1 text-red-500"></i>About Me</h1>
              <p>{user?.data?.bio ? user?.data?.bio : "- - -"}</p>
            </div>
            <div className="card-body flex-row gap-5 justify-center py-5 text-2xl">
              <a href={user?.data?.facebookLink ? user?.data?.facebookLink : "- - -"} target='_blank'><i className="fa-brands fa-facebook"></i></a>
              <a href={user?.data?.instaLink ? user?.data?.instaLink : "- - -"} target='_blank'><i className="fa-brands fa-instagram"></i></a>
              <a href={user?.data?.linkedInLink ? user?.data?.linkedInLink : "- - -"} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        {/* new form */}
        <div className="card shadow-2xl bg-base-100 mb-6 lg:w-7/12 w-11/12 mx-auto md:w-11/12 lg:mt-[-170px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Profile;
