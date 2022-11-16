import React from "react";

const MyEbook = ({ allcard }) => {
  const { bookData } = allcard;
  return (
    <>
      {bookData?.pdfLink && (
        <div className="btn-ghost bg-base-300 rounded-lg position relative p-0 shadow-lg cursor-pointer mb-4">
          <figure>
            <img
              className="mx-auto mt-4 w-48 rounded-lg text-center"
              src={bookData?.img}
              alt="Books"
            />
          </figure>
          <div className="card-body p-0">
            <div className="card-body p-4">
              <h1>
                {bookData?.name?.length >= 18 ? (
                  <p className="text-xl font-bold">
                    {bookData?.name?.slice(0, 18)}...
                  </p>
                ) : (
                  <p className="text-xl font-bold">{bookData?.name}</p>
                )}
              </h1>
              <p className="text-lg">{bookData?.description}</p>
              <a href={bookData?.pdfLink} target='blank' className='btn-block text-center p-2 rounded-lg uppercase btn-secondary text-white'>
              download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyEbook;
