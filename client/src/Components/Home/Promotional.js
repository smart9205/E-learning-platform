import React from "react";
import vdo from "../../Assets/vdo.jpg";
const Promotional = () => {
  return ( 
    <div className="my-16 bg-base-100">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="hero h-48 md:h-72 lg:h-80 rounded-xl"
            style={{ backgroundImage: `url(${vdo})` }}
          >
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
              <label htmlFor="my-modal-5" className="w-full modal-button">
                <h1 className="bg-white hover:bg-white btn hover:bg-opacity-60 bg-opacity-40 btn-circle text-white text-3xl">
                  <i className="fa-solid fa-circle-play bg-red-600 rounded-full"></i>
                </h1>
              </label>
            </div>
          </div>
          <div className="lg:w-10/12 text-center lg:text-start">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-sub">
              We are simply one click away!
            </h1>
            <p className="py-6 m-2 font-sub text-lg">
              We are making sure each learner get best knowledge they deserve.
              We provide easiest formula, notes and guidelines to ensure best
              education. Enroll yours now.
            </p>
            <a href="https://web.facebook.com/groups/programmingherocommunity" target={'_blank'} className="btn btn-accent btn-sm font-thin text-white">
              Join Us
            </a>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-2xl rounded-lg bg-base-300 p-4">
          <iframe 
          className="mx-auto w-full lg:h-96 h-48 md:h-96 rounded-lg"
            src="https://www.youtube-nocookie.com/embed/_CdyZX2OBMk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="modal-action mt-3">
            <label htmlFor="my-modal-5" className="btn btn-primary btn-sm text-white">
              Close
            </label>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
