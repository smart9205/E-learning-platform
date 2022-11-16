import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import Loading from "../Shared/Loading/Loading";

const UpdateProfile = () => {
  const [{ email }] = useAuthState(auth);
  const [role, roleLoading] = useRole();
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const navigate = useNavigate();
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
  if (roleLoading || isLoading || updating) {
    return <Loading></Loading>;
  }
  const onSubmit = async (updatedInfo) => {
    await updateProfile({
      displayName: updatedInfo?.name,
      photoURL: updatedInfo?.image,
    });
    (async () => {
      const { data } = await primaryAxios.put(
        `/update-user?qEmail=${email}`,
        updatedInfo
      );
      if (data) {
        toast.success("User Updated Successfully");
        refetch();
        navigate("/profile");
      }
    })();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="profile">
      <div className="justify-end card-actions mx-4 mt-2">
        <Link to={"/profile"} className="btn btn-primary btn-sm mt-2 ">
          Profile
        </Link>
      </div>
      <h1 className="text-xl font-semibold mx-5">User Information</h1>
      {/* <div>
        <div className="m-8 rounded-xl bg-[url('https://placeimg.com/1000/800/arch')]">
          <div className="justify-start pt-8 pl-4 card-actions">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Full Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              minLength: {
                value: 8,
                message: "Minimum Eight Characters",
              },
            })}
            defaultValue={user?.data?.name && user?.data?.name}
            placeholder="Stephen Brown"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profession</span>
          </label>
          <input
            type="text"
            {...register("profession")}
            defaultValue={user?.data?.profession && user?.data?.profession}
            placeholder="Student"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input
            type="url"
            {...register("image")}
            defaultValue={user?.data?.image && user?.data?.image}
            placeholder="www.profile.photo.com"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Photo</span>
          </label>
          <input
            type="url"
            {...register("coverPhoto")}
            defaultValue={user?.data?.coverPhoto && user?.data?.coverPhoto}
            placeholder="www.cover.photo.com"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            {...register("gender")}
            className="select select-bordered w-full font-thin"
            defaultValue={user?.data?.gender ? user?.data?.gender : "Male"}
            placeholder="Gender"
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            {...register("education")}
            defaultValue={user?.data?.education && user?.data?.education}
            type="text"
            placeholder="Bachelor of Business Administration"
            required
            className="input input-bordered"
          />
        </div>
      </div>
      <h1 className="text-xl font-semibold m-5 mt-[-20px]">
        Contact Information
      </h1>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-2 mt-[-50px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            {...register("address")}
            defaultValue={user?.data?.address && user?.data?.address}
            type="text"
            placeholder="92, Lawrence View Streets"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            {...register("phone")}
            defaultValue={user?.data?.phone && user?.data?.phone}
            type="tel"
            placeholder="123-456-789"
            required
            className="input input-bordered"
          />
        </div>
      </div>
      <h1 className="text-xl font-semibold m-5 mt-[-20px]">Social Links</h1>
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-3 mt-[-50px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Facebook</span>
          </label>
          <input
            {...register("facebookLink")}
            defaultValue={user?.data?.facebookLink && user?.data?.facebookLink}
            type="url"
            placeholder="www.facebook.com/id"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instagram</span>
          </label>
          <input
            type="url"
            {...register("instaLink")}
            defaultValue={user?.data?.instaLink && user?.data?.instaLink}
            placeholder="www.instagram.com/id"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linked In</span>
          </label>
          <input
            type="url"
            {...register("linkedInLink")}
            defaultValue={user?.data?.linkedInLink && user?.data?.linkedInLink}
            placeholder="www.linkedin.com/id"
            required
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="form-control m-5 mt-[-25px]">
        <label className="label">
          <span className="label-text">About Me</span>
        </label>
        <textarea
          {...register("bio")}
          defaultValue={user?.data?.bio && user?.data?.bio}
          className="textarea textarea-bordered"
          placeholder="Tell us about yourself"
          required
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end mx-8 mb-5">
        <button type="submit" className="btn btn-primary btn-md">
          Save Changes
        </button>
        <button className="btn btn-outline btn-md">Cancel</button>
      </div>
    </form>
  );
};

export default UpdateProfile;
