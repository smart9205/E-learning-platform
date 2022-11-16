import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";

const AddReview = () => {
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  const courseData = myCourse?.data?.find((allcard) => allcard.uname === uname);
  console.log(courseData);
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
      courseName: courseData?.uname,
      reviewDate: new Date(),
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
        photo: auth?.currentUser?.photoURL,
      },
    };
    (async () => {
      const { data } = await primaryAxios.post(`/reviews`, reviewData);
      if (data.acknowledged) {
        Swal.fire("Thank You!", `You Give ${rating} Stars!`, "success");
        reset();
        refetch();
      }
    })();
  };

  return (
    <div className="bg-base-100 rounded-lg  shadow-xl card-body items-start p-4">
      <div className="lg:flex items-center gap-4">
        <img src={courseData?.img} className="lg:w-72 mx-auto rounded-md" alt="image" />
        <div className="w-full">
          <p className="text-2xl my-1">{courseData?.name}</p>
          <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6">
              <h2 className="text-lg font-bold">Feedback Rating</h2>
              <div className="text-xl mt-1 text-[#FAAF00]">
                <Rating
                  count={5}
                  onClick={setRating}
                  initialRating={rating}
                  fractions={2}
                  emptySymbol={<ImStarEmpty />}
                  fullSymbol={<ImStarFull />}
                />
              </div>
            </div>
            <textarea
              {...register("review")}
              className="textarea mb-2 textarea-primary w-full"
              placeholder="Write about course"
              required
            ></textarea>
            <div className="card-actions justify-end">
            <button type="submit" className="px-8 py-2 rounded-md btn-primary">
              Update
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
