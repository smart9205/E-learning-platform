import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import ReviewView from "../AllCourses/ReviewView";
import Loader from "../Shared/Loading/Loading";

const AudioBookDetails = () => {
  const { bookId } = useParams();
  // for Rating
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data: bookreviews, refetch } = useQuery(["bookreviewsData"], () =>
    primaryAxios.get(`/bookreviews`)
  );
  const reviewData = bookreviews?.data?.filter(
    (allcard) => allcard.courseName === bookId
  );
  const ratingData = reviewData?.map((allcard) => allcard.rating);
  const totalRating = ratingData?.reduce((a, b) => a + b, 0);
  const avgRating = totalRating / ratingData?.length;

  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      rating,
      courseName: newDetails?._id,
      reviewDate: new Date(),
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
        photo: auth?.currentUser?.photoURL,
      },
    };
    (async () => {
      const { data } = await primaryAxios.post(`/bookreviews`, reviewData);
      if (data.acknowledged) {
        Swal.fire("Thank You!", "For Your Feedback!", "success");
        reset();
        refetch();
      }
    })();
  };
  // end
  const { data: audiobook, isLoading } = useQuery(["audiobooks"], () =>
    primaryAxios.get(`/audiobook`)
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  const newDetails = audiobook?.data?.find((s) => s._id === bookId);
  return (
    <div className="mb-12">
      <h1 className="text-3xl text-center pt-6 font-bold mb-8">
        Explore Top Rated Podcasts
      </h1>

      <div className="flex lg:w-full w-11/12 gap-10  justify-center flex-col lg:flex-row md:flex-row items-start mx-auto">
        <div className="lg:w-6/12 md:w-full w-full">
          <div className="rounded-2xl mb-8 border border-neutral">
            <div
              className="hero rounded-2xl"
              style={{
                backgroundImage: `url(${newDetails?.img1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="hero-overlay bg-[#0F1729] rounded-2xl bg-opacity-40"></div>
              <div className="flex lg:flex-row flex-col justify-center gap-4 items-center backdrop-blur-md w-full p-4 rounded-2xl">
                <img
                  className="w-48 rounded-lg"
                  src={newDetails?.img}
                  alt="image"
                />
                <h1 className="text-xl">
                  {" "}
                  <span className="text-2xl text-white drop-shadow-lg">
                    {newDetails?.name} AudioBook
                  </span>
                  <div className="flex my-2 items-center gap-3">
                    <div className="avatar">
                      <div className="w-16 rounded-lg">
                        <img src={newDetails?.img2} alt="image" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-white">
                        {newDetails?.speaker}
                      </p>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="border border-neutral rounded-lg px-4">
            <p className="text-2xl p-4"> About podcast</p>
            <p className="p-3">{newDetails?.description}</p>
          </div>
          <div className="lg:block md:block hidden">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-xl mt-3">Rate this book</h2>
                <div className="text-3xl my-2 text-[#FAAF00]">
                  <Rating
                    count={5}
                    onChange={setRating}
                    initialRating={rating}
                    fractions={2}
                    emptySymbol={<ImStarEmpty />}
                    fullSymbol={<ImStarFull />}
                  />
                </div>
                <textarea
                  {...register("review")}
                  className="textarea textarea-bordered h-24 mb-2 bg-base-300 w-full rounded-md"
                  placeholder="Write about this book"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-2 rounded-md btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            <h1 className="text-2xl mt-6 mb-2">
              Reviews({ratingData?.length})
            </h1>
            <div className="flex flex-col">
              {reviewData
                ?.slice(0)
                .reverse()
                .map((review) => (
                  <ReviewView
                    key={review._id}
                    review={review}
                    refetch={refetch}
                  ></ReviewView>
                ))}
            </div>
          </div>
        </div>
        {/* Mp3 information card */}
        <div className="lg:w-1/3 md:w-2/3 w-full  bg-[#354795] shadow-xl p-5 card text-white">
          <div className="p-3 grid items-center  gap-6 justify-around">
            <div className="hidden">
              <figure>
                <img
                  className="rounded-md w-full h-40"
                  src={newDetails?.img1}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-3">
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-file-lines  text-green-400"></i>
                </p>
                <p>
                  Addedate <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.addedate}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-database    text-red-400"></i>
                </p>
                <p>
                  Source <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.source.slice(0, 10)}...
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-dice-d6    text-pink-400"></i>
                </p>
                <p>
                  Listener
                  <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.listener}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-circle-play text-purple-400"></i>
                </p>
                <p>
                  Format <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.format}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-clock text-teal-400"></i>
                </p>
                <p>
                  Duration <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newDetails?.time}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-3 bg-[#495CA9] rounded-md mr-4">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </p>
                <p>
                  Avg Ratings <br />{" "}
                  {avgRating ? (
                    <span className="uppercase text-[#efad1e]">
                      {avgRating?.toString().slice(0, 3)}
                    </span>
                  ) : (
                    <span className="uppercase text-[#efad1e]">0</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div className="flex text-lg font-bold bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
              <div>
                <p>Price</p>
              </div>
              <div>
                <p className="text-2xl">${newDetails?.price}</p>
              </div>
            </div>
            <Link to={`/bookcheckout/${bookId}`}>
              <button className="text-lg font-bold p-4 rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:hidden md:hidden">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xl mt-3">Rate this book</h2>
              <div className="text-3xl my-2 text-[#FAAF00]">
                <Rating
                  count={5}
                  onChange={setRating}
                  initialRating={rating}
                  fractions={2}
                  emptySymbol={<ImStarEmpty />}
                  fullSymbol={<ImStarFull />}
                />
              </div>
              <textarea
                {...register("review")}
                className="textarea textarea-bordered h-24 mb-2 bg-base-300 w-full rounded-md"
                placeholder="Write about this book"
                required
              ></textarea>
              <button
                type="submit"
                className="px-8 py-2 rounded-md btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
          <h1 className="text-2xl mt-6 mb-2">Reviews({ratingData?.length})</h1>
          <div className="flex flex-col">
            {reviewData
              ?.slice(0)
              .reverse()
              .map((review) => (
                <ReviewView
                  key={review._id}
                  review={review}
                  refetch={refetch}
                ></ReviewView>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBookDetails;
