import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import reset from '../../Assets/reset.svg';
import auth from '../../firebase.init';

const Reset = () => {
    const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm();

      const handleResetPassword = async () => {
        const email = getValues("email");
        if (email) {
          if (sending) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: '#3fc3ee',
                customClass: {
                  popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
              await Toast.fire({
                icon: 'info',
                title: 'Email is sending'
              })
            // toast("Email is sending");
          }
          if (resetError) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: '#f27474',
                customClass: {
                  popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
              await Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong, Try Again'
              })
            // toast.error("Something Went Wrong, Try Again");
          }
          await sendPasswordResetEmail(email);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: '#a5dc86',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
          await Toast.fire({
            icon: 'success',
            title: 'Email Sent , Please Check !'
          })
        //   toast.success("Email Sent , Please Check !");
        }
        if (!email) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: '#f27474',
                customClass: {
                  popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
              await Toast.fire({
                icon: 'warning',
                title: 'Please Provide Your Email !'
              })
        //   toast.warning("Please Provide Your Email !");
        }
      };
    return (
        <div >
      <div className="flex items-center min-h-screen p-4  lg:justify-center">
        <div
          className="flex flex-col overflow-hidden mx-auto bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl"
        >
          <div
            className="hidden p-4 py-6 text-white  bg-gradient-to-r from-[#4828A9] to-[#A25BF7] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >
            <img className=' ' src={reset} alt="image" />
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-3xl font-bold text-[#A25BF7] text-center ">Forgot your password ?</h3>
            <p className='text-center text-gray-500 mb-6'>To reset your password, enter the email address that you used to set up your account. We'll send you a link to help you get back into your account.</p>
            <div className="flex flex-col space-y-5">
            <div className="form-control w-full">
            <label className="input-group w-full">
              <span className="bg-gradient-to-r from-[#4828A9] to-[#A25BF7] text-xs lg:text-md font-normal uppercase text-center text-white w-1/4">
                Email
              </span>
              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please Provide Valid Email",
                  },
                })}
                placeholder="Enter your email"
                className="input text-black input-bordered border-[#A25BF7] w-3/4 bg-white"
              />
            </label>
            {errors?.email && <p className="error">{errors.email.message}</p>}
          </div>
          <button onClick={handleResetPassword} className='btn border-[#A25BF7] hover:border-[#A25BF7] text-white bg-gradient-to-r from-[#4828A9] to-[#A25BF7]'>Send</button>
          <Link to={'/login'} className='link link-hover text-center text-[#A25BF7]'>back to login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Reset;