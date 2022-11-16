import React from "react";

const Admins = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-7 my-7">
    <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
      <figure className="pt-6">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src="https://avatars.githubusercontent.com/u/87720467?v=4" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Rashel Mahomud</h2>
        <p>Chattogram, Bangladesh</p>
      </div>
    </div>
    <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
      <figure className="pt-6">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src="https://avatars.githubusercontent.com/u/96904997?v=4" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Tasmia Ishika</h2>
        <p>Chattogram, Bangladesh</p>
      </div>
    </div>
      <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
        <figure className="pt-6">
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/89705152?v=4" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Amit Sharma</h2>
          <p>Chattogram, Bangladesh</p>
        </div>
      </div>
      <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
        <figure className="pt-6">
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/97064563?v=4" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shakhawath Hossain</h2>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
        <figure className="pt-6">
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/96870077?v=4" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Md Badsha</h2>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="card w-full bg-base-300 hover:shadow-primary hover:shadow-lg">
        <figure className="pt-6">
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://avatars.githubusercontent.com/u/81031854?v=4" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Muhammad Shafi</h2>
          <p>Chattogram, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Admins;
