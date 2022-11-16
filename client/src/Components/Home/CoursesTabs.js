import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAllCourse from "../../Hooks/useAllCourse";
import AllCourseCard from "../AllCourses/AllCourseCard";
import "./CoursesTab.css";

const CoursesTabs = () => {
  const [admission, job, language] = useAllCourse();
  return (
    <div className="py-16 md:block bg-base-100 border-b border-neutral">
      <div className="">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-header font-bold text-center">
          Skill Development Courses
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg mt-6 mb-12 text-center font-sub">
          Which skill will you develop today?
        </p>
      </div>
      <div>
        <Tabs className="mx-10 my-8 bg-base-100">
          <TabList className="overflow-x-auto lg:overflow-hidden whitespace-nowrap border-b border-neutral flex">
            <Tab>Language Learning</Tab>
            <Tab>Jobs Requirments</Tab>
            <Tab>Admission Preparation</Tab>
          </TabList>

          <TabPanel className="mt-5 bg-base-100">
            <div className="grid lg:gap-0 gap-x-[310px] -mr-6 lg:-mr-0 md:-mr-0 lg:overflow-hidden overflow-x-scroll grid-cols-4 mb-10">
              {language?.data?.slice(0, 4).map((allcard) => (
                <AllCourseCard
                  key={allcard._id}
                  allcard={allcard}
                ></AllCourseCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:gap-0 gap-x-[310px] -mr-6 lg:-mr-0 md:-mr-0 lg:overflow-hidden overflow-x-scroll grid-cols-4 mb-10">
              {job?.data?.slice(0, 4).map((allcard) => (
                <AllCourseCard
                  key={allcard._id}
                  allcard={allcard}
                ></AllCourseCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:gap-0 gap-x-[310px] -mr-6 lg:-mr-0 md:-mr-0 lg:overflow-hidden overflow-x-scroll grid-cols-4 mb-10">
              {admission?.data?.slice(0, 4).map((allcard) => (
                <AllCourseCard
                  key={allcard._id}
                  allcard={allcard}
                ></AllCourseCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesTabs;
