import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import Loader from "../Shared/Loading/Loading";

const BlogDetails = () => {
  const { detailsId } = useParams();
  const { data: blogs, isLoading } = useQuery(["blogs"], () =>
    primaryAxios.get(`/blogs`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  const newBlogs = blogs?.data?.filter((blog) => blog._id == detailsId);

  return (
    <div className="hero">
      <div className="hero-content items-start lg:flex-row flex-col lg:px-20 my-2 lg:my-20">
        <div className="lg:mx-20 w-full">
          <h1 className="text-2xl font-bold my-2">{newBlogs[0]?.title}</h1>{" "}
          <br />
          <div className="flex">
            <i className="fa-solid fa-user-astronaut mr-2 text-secondary"></i>
            <h1 className="text-sm ">{newBlogs[0]?.name}</h1>
          </div>
          <div className="flex">
            <i className="fa-solid fa-house-user mr-2 text-primary"></i>
            <h1 className="text-sm">{newBlogs[0]?.address}</h1>
          </div>
          <div>
            <div className="flex-col lg:flex-row">
              <img className="my-3" src={newBlogs[0]?.img} />
              <div>
                <h1 className="text-3xl font-bold">{newBlogs[0]?.title2}</h1>
                <p className="py-6">{newBlogs[0]?.add}</p>
                <h1 className="text-2xl font-bold">{newBlogs[0]?.title3}</h1>
                <p className="py-6">{newBlogs[0]?.add1}</p>
                <h1 className="text-2xl font-bold">{newBlogs[0]?.title4}</h1>
                <p className="py-6">{newBlogs[0]?.add2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-9/12">
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Recent Post</h2>
              {blogs?.data
                ?.slice(0, 6)
                .reverse()
                .map((blog) => (
                  <div key={blog._id} blog={blog}>
                    <Link to={`/blogdetails/${blog?._id}`}>
                      <i className="fa-solid fa-circle-arrow-right text-primary"></i>{" "}
                      <span>{blog?.title}</span>
                    </Link>
                  </div>
                ))}
              <p></p>
              <div className="card bg-base-200 rounded-xl shadow-xl mt-2">
                <div className="card-body p-5">
                  <h2 className="card-title">Categories</h2>
                  <p>
                    <i className="fa-solid fa-circle-arrow-right text-primary"></i>{" "}
                    <Link to={"/blogs"}>Tips and Tricks</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
