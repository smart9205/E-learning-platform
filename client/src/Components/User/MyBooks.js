import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const MyBooks = () => {
  useTitle("My Books");
  return (
    <div id="admission" className="lg:mb-40">
      <div className="lg:mx-8 mx-4 pt-10">
        <h1 className="text-3xl pb-5 ">My Books</h1>
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <Link to={"/audiobooks"}>
            <div
              className="mx-auto p-6 mt-3 bg-base-200 shadow-lg rounded-2xl
            hover:-translate-y-3 border-neutral  transform transition duration-300 text-warning"
            >
              <figure>
                <img
                  src="https://img.freepik.com/premium-vector/neon-icon-audio-book-flat-style-white-background-vector-isometric-design_123447-2345.jpg"
                  alt="Shoes"
                  className="rounded-xl w-full"
                />
              </figure>
              <div className="w-full content-between grid">
                <h2 className="px-2 py-1 text-xl">Audio Books</h2>
                <div className="mx-2 mt-2 w-36 text-sm">
                  <p className="text-white p-[5px] h-8 rounded-full text-center btn-secondary">
                    Continue Listening
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/ebooks"}>
            <div
              className="mx-auto p-6 mt-3 bg-base-200 shadow-lg rounded-2xl
            hover:-translate-y-3 border-neutral  transform transition duration-300 text-warning"
            >
              <figure className="">
                <img
                  src="https://img.freepik.com/free-vector/ebook-graphic-illustration_24908-54739.jpg?t=st=1661585692~exp=1661586292~hmac=75f956243628066f1af8d468e92cb1d09d85871b549cb6bf7e147002f4f98c9f"
                  alt="Shoes"
                  className="rounded-xl w-full"
                />
              </figure>
              <div className="w-full content-between grid">
                <h2 className="px-2 py-1 text-xl">eBooks</h2>
                <div className="mx-2 mt-2 w-36 text-sm">
                  <p className="text-white p-[5px] h-8 rounded-full text-center btn-secondary">
                    Continue Reading
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
