import React, { useState } from "react";
import useTitle from '../Hooks/useTitle';

const Developer = () => {
  useTitle("Developers");
  return (
    <div className=" font-mono">
      <h1 className="text-4xl text-center my-10">Meet Our Dedicated Team</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-7 my-7">
        <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
          <figure className="pt-6">
            <div className="avatar">
              <div className="w-24 mask mask-circle">
                <img src="https://avatars.githubusercontent.com/u/96904997?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body py-4 items-center text-center">
            <h2 className="text-xl">Tasmia Islam</h2>
            <p>Chattogram, Bangladesh</p>
          </div>
          <div className="px-16 mb-4 text-center font-mono">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto doloremque, excepturi dolorem ex perspiciatis"</p>
          </div>
          <div>
            <p className="text-center mb-6">
              <i className="fa-brands fa-facebook text-2xl mx-2"></i>
              <i className="fa-brands fa-github text-2xl mx-2"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-2"></i>
              <i className="fa-solid fa-link text-2xl mx-2"></i>
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
          <figure className="pt-6">
            <div className="avatar">
              <div className="w-24 mask mask-circle">
                <img src="https://avatars.githubusercontent.com/u/97064563?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body py-4 items-center text-center">
            <h2 className="text-xl">Shakhawath Hossain Shatu</h2>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="px-16 mb-4 text-center font-mono">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto doloremque, excepturi dolorem ex perspiciatis"</p>
          </div>
          <div>
            <p className="text-center mb-6">
              <i className="fa-brands fa-facebook text-2xl mx-2"></i>
              <i className="fa-brands fa-github text-2xl mx-2"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-2"></i>
              <i className="fa-solid fa-link text-2xl mx-2"></i>
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
          <figure className="pt-6">
            <div className="avatar">
              <div className="w-24 mask mask-circle">
                <img src="https://avatars.githubusercontent.com/u/81031854?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body py-4 items-center text-center">
            <h2 className="text-xl">Muhammad Shafi</h2>
            <p>Chattogram, Bangladesh</p>
          </div>
          <div className="px-16 mb-4 text-center font-mono">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto doloremque, excepturi dolorem ex perspiciatis"</p>
          </div>
          <div>
            <p className="text-center mb-6">
              <i className="fa-brands fa-facebook text-2xl mx-2"></i>
              <i className="fa-brands fa-github text-2xl mx-2"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-2"></i>
              <i className="fa-solid fa-link text-2xl mx-2"></i>
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
          <figure className="pt-6">
            <div className="avatar">
              <div className="w-24 mask mask-circle">
                <img src="https://avatars.githubusercontent.com/u/87720467?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body py-4 items-center text-center">
            <h2 className="text-xl">Rashel Mahomud Raj</h2>
            <p>Chattogram, Bangladesh</p>
          </div>
          <div className="px-16 mb-4 text-center font-mono">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto doloremque, excepturi dolorem ex perspiciatis"</p>
          </div>
          <div>
            <p className="text-center mb-6">
              <i className="fa-brands fa-facebook text-2xl mx-2"></i>
              <i className="fa-brands fa-github text-2xl mx-2"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-2"></i>
              <i className="fa-solid fa-link text-2xl mx-2"></i>
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
          <figure className="pt-6">
            <div className="avatar">
              <div className="w-24 mask mask-circle">
                <img src="https://avatars.githubusercontent.com/u/89705152?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body py-4 items-center text-center">
            <h2 className="text-xl">Amortha Kumar Shill</h2>
            <p>Chattogram, Bangladesh</p>
          </div>
          <div className="px-16 mb-4 text-center font-mono">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto doloremque, excepturi dolorem ex perspiciatis"</p>
          </div>
          <div>
            <p className="text-center mb-6">
              <i className="fa-brands fa-facebook text-2xl mx-2"></i>
              <i className="fa-brands fa-github text-2xl mx-2"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-2"></i>
              <i className="fa-solid fa-link text-2xl mx-2"></i>
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
          <figure className="pt-6">
            <div className="avatar">
              <div className="w-24 mask mask-circle">
                <img src="https://avatars.githubusercontent.com/u/96870077?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body py-4 items-center text-center">
            <h2 className="text-xl">Md Badsha</h2>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="px-16 mb-4 text-center font-mono">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto doloremque, excepturi dolorem ex perspiciatis"</p>
          </div>
          <div>
            <p className="text-center mb-6">
              <i className="fa-brands fa-facebook text-2xl mx-2"></i>
              <i className="fa-brands fa-github text-2xl mx-2"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-2"></i>
              <i className="fa-solid fa-link text-2xl mx-2"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
