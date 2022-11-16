import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";
import useCourse from "../../Hooks/useCourse";

const CourseVideo = () => {
  const { fileName } = useParams();
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const [courseData, courseLoading] = useCourse();

  const { data: myCourse } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  const myCourseData = myCourse?.data?.find((s) => s.uname === uname);

  if (courseLoading || loading) {
    return (
      <div className="mx-auto hero py-36 bg-base-300">
        <div id="preloaders"></div>
      </div>
    );
  }

  const fileData = courseData?.videos?.find((s) => s.fileName === fileName);
  return (
    <div>
      {courseData?.uname === myCourseData?.uname ? (
        <div className="lg:h-[360px] h-48 md:h-96">
          {fileData?.vurl ? (
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              light={true}
              url={fileData?.vurl}
              playing
            />
          ) : (
            <div className="w-full h-full bg-base-300">
              <img
                className="mx-auto lg:w-72 md:w-72 w-40"
                src="https://github.com/MShafiMS/admission/blob/gh-pages/output-onlinegiftools%20(1).gif?raw=true"
                alt="error"
              />
              <h1 className="text-xl text-center">
                The module is not cooked yet!
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full bg-base-300">
          <img
            className="mx-auto lg:w-72 md:w-72 w-40"
            src="https://raw.githubusercontent.com/MShafiMS/admission/c4e8100572f53303ffbe5fdc958901cc7886d051/purchase.svg"
            alt="error"
          />
          <h1 className="text-xl text-center">You Need To Purchase!</h1>
        </div>
      )}

      <h1 className="text-3xl my-4">{fileData?.name}</h1>
      <label
        htmlFor="my-modal-3"
        className="text-red-500 underline cursor-pointer text-md modal-button"
      >
        <i className="fa-solid fa-triangle-exclamation mr-1"></i>Copyright
        warning
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal cursor-pointer">
        <label
          className="modal-box relative rounded-lg max-w-4xl text-left border border-neutral"
          htmlFor=""
        >
          <h1 className="text-2xl font-bold text-info">Copyright Warnning</h1>
          <p>
            If you require any more information or have any questions about our
            site's disclaimer, please feel free to contact us by email at
            webbschool2023@gmail.com. Our Disclaimer was generated with the help
            of the{" "}
            <a href="https://www.disclaimergenerator.net/">
              Free Disclaimer Generator
            </a>
            .
          </p>

          <h2 className="text-xl">Disclaimers for Webb School</h2>

          <p>
            All the information on this website -
            https://webb-school.vercel.app/ - is published in good faith and for
            general information purpose only. Webb School does not make any
            warranties about the completeness, reliability and accuracy of this
            information. Any action you take upon the information you find on
            this website (Webb School), is strictly at your own risk. Webb
            School will not be liable for any losses and/or damages in
            connection with the use of our website.
          </p>

          <p>
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.
          </p>

          <p>
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </p>

          <h2 className="text-xl">Consent</h2>

          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>

          <h2 className="text-xl">Update</h2>

          <p>
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </label>
      </label>
    </div>
  );
};

export default CourseVideo;
