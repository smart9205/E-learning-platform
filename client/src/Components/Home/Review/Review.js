import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import image4 from '../../../Assets/icon/ap.png';
import image2 from '../../../Assets/icon/s1.png';
import image1 from '../../../Assets/icon/T1.png';
import image3 from '../../../Assets/icon/v1.png';
import './Review.css';


const Review = () => {
    // React CountUp Add
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 100000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return ( 
        <div className='py-16 bg-base-100 border-b border-neutral'>
            <h2 className='lg:text-4xl md:text-3xl text-2xl font-sub font-bold text-center'>OUR ACHIEVEMENT</h2>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='hidden lg:block h-96' src='https://raw.githubusercontent.com/MShafiMS/admission/eeb6c9456e6bec86eeddaf072a43cd089f371637/ACHIVE.svg' alt />
                    <div className='card lg:mx-32 grid grid-cols-2 lg:gap-14 gap-6 md:grid-cols-4 lg:grid-cols-2 mb-5'>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image1} alt="image" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='-600 text-lg lg:text-4xl mt-2'>
                                            <CountUp
                                                duration={5} start={0} end={350} />+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Teachers</h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="student">
                                    <img className='lg:w-18' src={image2} alt="image" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='-600 text-lg lg:text-4xl mt-2'><CountUp start={0} end={1500} duration={5} />+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Students </h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image4} alt="image" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='-600 text-lg lg:text-4xl mt-2'><CountUp start={0} end={2000} duration={5} />+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Users</h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="card-body p-0 mx-auto">
                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                <div className="teacher">
                                    <img className='lg:w-18' src={image3} alt="image" />
                                    <div className='lg:ml-4 ml-2'>
                                        <h1 className='-600 text-lg lg:text-4xl mt-2'><CountUp start={2000} end={3000} duration={5} />+</h1>
                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Videos</h1>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;