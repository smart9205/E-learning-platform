import React from "react";
import { AudioPlayer } from "../AudioBook/AudioPlayer";

const MyAudioBook = ({ allcard }) => {
  const { bookData } = allcard;
  return (
    <>
      {bookData?.audio && (
        <div className="rounded-2xl mb-8 border border-neutral">
        <div
          className="hero rounded-t-2xl"
          style={{
            backgroundImage: `url(${bookData?.img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-[#0F1729] rounded-2xl bg-opacity-40"></div>
          <div className="flex lg:flex-row flex-col justify-center gap-4 items-center backdrop-blur-md w-full p-4 rounded-t-2xl">
            <img className="h-36 rounded-lg" src={bookData?.img} alt="image" />
            <h1 className="text-xl">
              {" "}
              <span className="text-2xl text-white drop-shadow-lg">
                {bookData?.name} AudioBook
              </span>
              <div className="flex my-2 items-center gap-3">
                <div className="avatar">
                  <div className="w-16 rounded-lg">
                    <img src={bookData?.img2} alt="image" />
                  </div>
                </div>
                <div>
                  <p className="text-xl text-white">
                    {bookData?.speaker}
                  </p>
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="bg-base-200 rounded-b-2xl">
          <AudioPlayer bookData={bookData}></AudioPlayer>
        </div>
      </div>
      )}
    </>
  );
};

export default MyAudioBook;
