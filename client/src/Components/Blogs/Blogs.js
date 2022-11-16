import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import Loader from "../Shared/Loading/Loading";
import Blog from "./Blog";

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery(["blogs"], () =>
    primaryAxios.get(`/blogs`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center my-10">Our site Blogs</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-10 gap-5 my-10">
        {blogs?.data?.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
