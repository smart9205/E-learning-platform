import React from "react";

const Instructor = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
            Our Instructors
          </h1>
          <p className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub">
            Teaching is the one profession that creates all other professions..
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mx-auto md:grid-cols-3 lg:max-w-screen-lg  lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm">Product Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="text-sm">Graphic Designer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Anthony Geek</p>
              <p className="text-sm">English Teacher</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Alice Melbourne</p>
              <p className="text-sm">Freelancer Expert</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Amit Sharma</p>
              <p className="text-sm">Senior Web Instractor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Andrew Larkin</p>
              <p className="text-sm text-center">
                University Admission Trainer
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Sophie Dene</p>
              <p className="text-sm text-center">Designer UI/UX Instructor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold ">Benedict Caro</p>
              <p className="text-sm text-center">Web Development Instructor</p>
            </div>
          </div>

          <div className="hidden md:block lg:hidden">
            <div className="  flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow ring-2 hover:ring-4"
                src="https://i.postimg.cc/qRHmzsv1/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold ">Jonny dep</p>
                <p className="text-sm text-center">Social Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;


