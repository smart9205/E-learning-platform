import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useRole from "../../Hooks/useRole";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import BookStripeForm from "./BookStripeForm";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";

const BookStripe = ({ bookData }) => {
  const stripePromise = loadStripe(
    "pk_test_51LWltUCPn2JHPi081EFxPygcOJOvtghmISJBIxeobWbHIH1BT7TgPBEQoF6YZ75OqiFMJVXZEbfBGwefP5I2InKr005L3Un3xL"
  );
  const [role] = useRole();
  const [{ email }] = useAuthState(auth);
  const { data: user } = useQuery(["userProfile", email], () =>
    primaryAxios.get(`/user-role?email=${email}`)
  );
  return (
    <div className="hero bg-base-300">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0">
        <div className="card-body lg:w-96 p-5">
            <h1 className="text-xl font-mono uppercase border-b border-gray-500 pb-1 mb-2">
              <i className="fa-solid fa-circle-info"></i> Account Info
            </h1>
            <div className="flex">
              <div>
                <h1>
                  <i className="fa-solid mr-2 fa-id-card-clip"></i>
                </h1>
                <h1>
                  <i className="fa-solid mr-2 fa-envelope"></i>
                </h1>
                <h1>
                  <i className="fa-solid mr-2 fa-bookmark"></i>
                </h1>
                <h1>
                  <i className="fa-solid mr-2 fa-square-phone"></i>
                </h1>
              </div>
              <div>
                <h1 className="mr-6">Name</h1>
                <h1 className="mr-6">Email</h1>
                <h1 className="mr-6">Role</h1>
                <h1 className="mr-6">Phone</h1>
              </div>
              <div>
                <h1 className="mr-2">:</h1>
                <h1 className="mr-2">:</h1>
                <h1 className="mr-2">:</h1>
                <h1 className="mr-2">:</h1>
              </div>
              <div>
                <h1>{user?.data.name}</h1>
                <h1>{user?.data.email}</h1>
                <h1>{role === "admin" ? "Admin" : "User"}</h1>
                <h1>{user?.data?.phone ? user?.data?.phone : "- - -"}</h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-lg border-b border-gray-500 font-mono mt-4 uppercase">
          Fully secured payment guarantee{" "}
          <i className="fa-solid text-primary fa-credit-card"></i>
        </h1>
        <div className="card rounded-lg flex-shrink-0 w-full border border-neutral bg-base-100">
          <Elements stripe={stripePromise}>
            <BookStripeForm
              totalAmount={bookData?.price}
              orderInfo={bookData}
            ></BookStripeForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default BookStripe;
