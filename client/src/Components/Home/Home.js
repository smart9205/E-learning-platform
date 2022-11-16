import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowUp } from "react-icons/bs";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Support from "../../Components/../Support/Support";
import useTitle from "../../Hooks/useTitle";
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import CoursesTabs from "./CoursesTabs";
import Hero from "./Hero/Hero";
import JobCourses from "./JobCourses/JobCourses";
import Navigation from "./Navigation";
import Promotional from "./Promotional";
import Question from "./Question/Question";
import Review from './Review/Review';
import Reviews from "./Reviews/Reviews";
const Home = () => {
  useTitle("Home Page");

  return (

    <div>
      <Hero></Hero>
      {/* messenger chat */}
      <MessengerCustomerChat
        pageId="101878912628102" appId="3150275291906230"
      />
      <Navigation></Navigation>
      <Banner></Banner>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourses></JobCourses>
      <CoursesTabs></CoursesTabs>
      <Reviews></Reviews>
      <Review></Review>
      <Promotional></Promotional>
      <Support></Support>
      <Question></Question>
      <AnchorLink href='#top' className='fixed z-50 bottom-4 right-4 text-info text-2xl'>
        <BsArrowUp />
      </AnchorLink>
      {/* messenger chat --- */}
      <MessengerCustomerChat
        pageId="101878912628102" appId="3150275291906230"
      />
    </div>

  );
};

export default Home;