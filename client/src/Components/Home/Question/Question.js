import React from 'react';

const Question = () => {
    return (
        <div>
           
<div>
      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
              Frequently Asked Question
            </h1>
            <p className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub">
              The most common questions about how our Courses works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap font-sub lg:w-auto sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-thin bg-base-200 rounded-md py-4 text-xl shadow-lg px-4">
                  How Long Will The Course Last ?
                </summary>

                <p className='p-5 text-lg shadow-lg bg-base-300 rounded-b-lg'>
                It will Last for six months every courses.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-thin bg-base-200 rounded-md py-4 text-xl shadow-lg px-4">
                  How can i buy this course?
                </summary>

                <p className='p-5 text-lg shadow-lg bg-base-300 rounded-b-lg'>
                You can buy our course in Bkash,Master Card,any Bank Card you use.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-thin bg-base-200 rounded-md py-4 text-xl shadow-lg px-4">
                  Who is this course for?
                </summary> 

                <p className='p-5 text-lg shadow-lg bg-base-300 rounded-b-lg'>
                  These course are for those who want to do something in future and want to learn something.
                </p>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-thin bg-base-200 rounded-md py-4 text-xl shadow-lg px-4">
                  Who are the instructors of the courses?
                </summary>

                <p className='p-5 text-lg shadow-lg bg-base-300 rounded-b-lg'>
                Our instructors: Tasmia, Rashel, Badsha, Shakhawath, Shafi, Amortha.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-thin bg-base-200 rounded-md py-4 text-xl shadow-lg px-4">
                  How much support can be found in this course?
                </summary>

                <p className='p-5 text-lg shadow-lg bg-base-300 rounded-b-lg'>
                  Until the course is completed.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-thin bg-base-200 rounded-md py-4 text-xl shadow-lg px-4">
                  How can I communicate with you?
                </summary>

                <p className='p-5 text-lg shadow-lg bg-base-300 rounded-b-lg'>
                  You can communicate our Email address and our Phone numbers , you can massage our website Chat system.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
        </div>
    );
};

export default Question;