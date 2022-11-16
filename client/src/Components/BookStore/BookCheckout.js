import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import BookStripe from "./BookStripe";

const BookCheckout = () => {
  const { bookId } = useParams();
  const { data: acadamicbook } = useQuery(["acadamicbook"], () =>
    primaryAxios.get(`/AcadamicBook`)
  );
  const { data: skillbook } = useQuery(["skillbook"], () =>
    primaryAxios.get(`/SkillBooks`)
  );
  const { data: audiobook } = useQuery(["audiobook"], () =>
    primaryAxios.get(`/audiobook`)
  );

  const bookData =
    audiobook?.data?.find((s) => s._id === bookId) ||
    skillbook?.data?.find((s) => s._id === bookId) ||
    acadamicbook?.data?.find((s) => s._id === bookId);
  return (
    <div className="hero bg-base-100 py-8">
      <div className="flex justify-between w-full flex-col md:flex-row lg:flex-row items-start">
        <div className="text-center w-11/12 lg:w-7/12 md:w-6/12 lg:text-left mx-auto">
          <p className="text-2xl mb-4 font-bold">
            The book you are purchasing :
          </p>
          <div className="p-6 bg-base-300 border-[0.5px] border-neutral rounded-2xl">
            <div className="lg:flex gap-6 items-center">
              <img
                src={bookData?.img}
                className="h-96 mx-auto rounded-lg"
                alt="image"
              />
              <div className="card-body p-0 mx-auto w-full">
                <h1 className="text-2xl font-bold my-2">{bookData?.name}</h1>
                <div className="grid lg:grid-cols-2 gap-3">
                  {bookData?.pages && (
                    <div className="flex items-center">
                      <p className="p-3 text-2xl bg-green-300 bg-opacity-25 text-center rounded-md mr-4">
                        <i className="fa-solid fa-file-lines  text-green-500"></i>
                      </p>
                      <p className="uppercase w-6/12 lg:w-full">
                        Pages <br />{" "}
                        <span className="uppercase text-[#efad1e]">
                          {bookData?.pages}
                        </span>
                      </p>
                    </div>
                  )}
                  {bookData?.addedate && (
                    <div className="flex items-center">
                      <p className="p-3 text-2xl bg-green-300 bg-opacity-25 text-center rounded-md mr-4">
                        <i className="fa-solid fa-file-lines  text-green-500"></i>
                      </p>
                      <p className="uppercase w-6/12 lg:w-full">
                        Addedate <br />{" "}
                        <span className="uppercase text-[#efad1e]">
                          {bookData?.addedate}
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="flex items-center">
                    <p className="p-3 text-2xl bg-red-300 bg-opacity-25 text-center rounded-md mr-4">
                      <i className="fa-solid fa-database    text-red-500"></i>
                    </p>
                    <p className="uppercase w-6/12 lg:w-full">
                      Size <br />{" "}
                      <span className="uppercase text-[#efad1e]">
                        {bookData?.file}
                      </span>
                    </p>
                  </div>
                  {bookData?.interactive && (
                    <div className="flex items-center">
                      <p className="p-3 text-2xl bg-pink-300 bg-opacity-25 text-center rounded-md mr-4">
                        <i className="fa-solid fa-dice-d6    text-pink-500"></i>
                      </p>
                      <p className="uppercase w-6/12 lg:w-full">
                        Interactive <br />{" "}
                        <span className="uppercase text-[#efad1e]">
                          {bookData?.interactive}
                        </span>
                      </p>
                    </div>
                  )}
                  {bookData?.listener && (
                    <div className="flex items-center">
                      <p className="p-3 text-2xl bg-pink-300 bg-opacity-25 text-center rounded-md mr-4">
                        <i className="fa-solid fa-dice-d6    text-pink-500"></i>
                      </p>
                      <p className="uppercase w-6/12 lg:w-full">
                        Listener <br />{" "}
                        <span className="uppercase text-[#efad1e]">
                          {bookData?.listener}
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="flex items-center">
                    <p className="p-3 text-2xl bg-yellow-300 bg-opacity-25 text-center rounded-md mr-4">
                      <i className="fa-solid fa-file-pdf text-yellow-500"></i>
                    </p>
                    <p className="uppercase w-6/12 lg:w-full">
                      Format <br />{" "}
                      <span className="uppercase text-[#efad1e]">
                        {bookData?.format}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex text-lg font-bold bg-opacity-20 bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
                  <div>
                    <p>Price</p>
                  </div>
                  <div>
                    <p className="text-2xl">${bookData?.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-4/12 md:w-5/12 w-11/12 mx-auto    mt-4 border border-neutral bg-base-300">
          <BookStripe bookData={bookData}></BookStripe>
        </div>
      </div>
    </div>
  );
};

export default BookCheckout;
