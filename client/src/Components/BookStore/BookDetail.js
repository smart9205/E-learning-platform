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
import Loading from "../Shared/Loading/Loading";

const BookDetail = () => {
  const { bookId } = useParams();
  const [rating, setRating] = useState(0);
  const { data: skillbook } = useQuery(["skillbook"], () =>
    primaryAxios.get(`/SkillBooks`)
  );

  const { data: academicbook } = useQuery(["academicboook"], () =>
    primaryAxios.get(`/AcadamicBook`)
  );
  const newService =
    skillbook?.data?.find((s) => s._id === bookId) ||
    academicbook?.data?.find((s) => s._id === bookId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      rating,
      courseName: newService?._id,
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
  const {
    data: bookreviews,
    isLoading,
    refetch,
  } = useQuery(["bookreviewsData"], () => primaryAxios.get(`/bookreviews`));
  const reviewData = bookreviews?.data?.filter(
    (allcard) => allcard.courseName === bookId
  );
  const ratingData = reviewData?.map((allcard) => allcard.rating);
  const totalRating = ratingData?.reduce((a, b) => a + b, 0);
  const avgRating = totalRating / ratingData?.length;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="hero bg-base-100 my-6">
      <div className="flex lg:w-full w-11/12 gap-10  justify-center flex-col-reverse lg:flex-row md:flex-row items-start">
        <div className="lg:w-6/12 md:w-full">
          <h1 className="text-3xl uppercase font-bold">{newService?.name}</h1>
          <div className="py-3">
            {avgRating ? (
              <span className="mr-2 font-bold text-[#c48b07]">
                {avgRating?.toString().slice(0, 3)}
              </span>
            ) : (
              <></>
            )}
            <Rating
              className="text-[#FAAF00] mr-2"
              initialRating={avgRating}
              readonly
              emptySymbol={<ImStarEmpty />}
              fullSymbol={<ImStarFull />}
            />
            <span className="opacity-70">({ratingData?.length} ratings)</span>
          </div>
          <h1 className="text-2xl pt-8 pb-4 uppercase">Writers</h1>
          <div className="grid lg:grid-cols-2 lg:pl-8 gap-6">
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img1} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer1}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img2} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer2}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img3} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer3}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
            <div className="flex items-stretch ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={newService?.img4} alt="writers pic" />
                </div>
              </div>
              <div className="ml-2.5">
                <h2 className="text-xl">{newService?.Writer4}</h2>
                <p>Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="border border-neutral rounded-lg px-4 py-3 mt-12">
            <p className="text-2xl pb-4"> A few words about the book</p>
            <p>
              Improve grammar, word choice, and sentence structure in your
              writing. It's free! Grammarly Improve grammar, word choice, and
              sentence structure in your writing. It's free! Grammarly Can Help
              You Write Polished, Effective Book Reports Every Time. Fix
              Punctuation Errors. Find and Add Sources Fast. Easily Improve Any
              Text. AI Writing Assistant. Improve grammar, word choice, and
              sentence structure in your writing. It's free! Grammarly Can Help
              You Write Polished, Effective Book Reports Every Time. Fix
              Punctuation Errors. Find and Add Sources Fast. Easily Improve Any
              Text. AI Writing Assistant
            </p>
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

        <div className="lg:w-1/3 md:w-2/3 w-full bg-[#354795] shadow-xl p-5 card text-white">
          <div className="p-6 grid items-center gap-6 justify-around lg:grid-cols-2">
            <div>
              <figure>
                <img
                  className="w-96 rounded-md"
                  src={newService?.img}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="gap-3">
              <div className="flex items-center">
                <p className="p-2 text-xl bg-green-300 bg-opacity-25 text-center rounded-md mr-4">
                  <i className="fa-solid fa-file-lines  text-green-500"></i>
                </p>
                <p className="uppercase w-6/12 lg:w-full">
                  Pages <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.pages}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-2 text-xl bg-red-300 bg-opacity-25 text-center rounded-md mr-4">
                  <i className="fa-solid fa-database    text-red-500"></i>
                </p>
                <p className="uppercase w-6/12 lg:w-full">
                  Size <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.file}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-2 text-xl bg-pink-300 bg-opacity-25 text-center rounded-md mr-4">
                  <i className="fa-solid fa-dice-d6    text-pink-500"></i>
                </p>
                <p className="uppercase w-6/12 lg:w-full">
                  Interactive <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.interactive}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="p-2 text-xl bg-yellow-300 bg-opacity-25 text-center rounded-md mr-4">
                  <i className="fa-solid fa-file-pdf text-yellow-500"></i>
                </p>
                <p className="uppercase w-6/12 lg:w-full">
                  Format <br />{" "}
                  <span className="uppercase text-[#efad1e]">
                    {newService?.format}
                  </span>
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
                <p className="text-2xl">${newService?.price}</p>
              </div>
            </div>
            <Link to={`/bookcheckout/${bookId}`}>
              <button className="text-lg font-bold p-4 rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
