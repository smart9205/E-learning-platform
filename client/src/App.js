import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAdmin from "./Authentication/RequireAdmin";
import RequireAuth from "./Authentication/RequireAuth";
import AcademicBookss from "./Components/Admin/AcademicBookss";
import AddBlogs from "./Components/Admin/AddBlogs";
import Admin from "./Components/Admin/Admin";
import Admins from "./Components/Admin/Admins";
import AddAdmission from "./Components/Admin/Courses/AddAdmission";
import AddJob from "./Components/Admin/Courses/AddJob";
import AddLanguage from "./Components/Admin/Courses/AddLanguage";
import Admission from "./Components/Admin/Courses/Admission";
import Job from "./Components/Admin/Courses/Job";
import Language from "./Components/Admin/Courses/Language";
import Manage from "./Components/Admin/Courses/Manage";
import Special from "./Components/Admin/Courses/Special";
import Live from "./Components/Admin/LivePost/Live";
import AllReviews from "./Components/Admin/ManageReview/AllReviews";
import BookReview from "./Components/Admin/ManageReview/BookReview";
import CourseReview from "./Components/Admin/ManageReview/CourseReview";
import ManageReview from "./Components/Admin/ManageReview/ManageReview";
import Message from "./Components/Admin/Message";
import Payments from "./Components/Admin/Payments";
import SkillBookss from "./Components/Admin/SkillBookss";
import Users from "./Components/Admin/Users";
import AllAdmission from "./Components/AllAdmission/AllAdmission";
import AllCourses from "./Components/AllCourses/AllCourses";
import AllCourseView from "./Components/AllCourses/AllCourseView";
import Checkout from "./Components/AllCourses/Checkout";
import CoursePlay from "./Components/AllCourses/CoursePlay";
import CourseVideo from "./Components/AllCourses/CourseVideo";
import Summary from "./Components/AllCourses/Summary";
import AllJobCourse from "./Components/AllJobCourses/AllJobCourse";
import AudioBookDetails from "./Components/AudioBook/AudioBookDetails";
import AudioBooks from "./Components/AudioBook/AudioBooks";
import BlogDetails from "./Components/Blogs/BlogDetails";
import Blogs from "./Components/Blogs/Blogs";
import BookCheckout from "./Components/BookStore/BookCheckout";
import BookDetail from "./Components/BookStore/BookDetail";
import BookStore from "./Components/BookStore/BookStore";
import Developer from "./Components/Developer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Reset from "./Components/Login/Reset";
import SignUp from "./Components/Login/SingUp";
import Bkash from "./Components/Payments/Bkash";
import Stripe from "./Components/Payments/Stripe";
import Footer from "./Components/Shared/Footer";
import FooterTwo from "./Components/Shared/FooterTwo";
import Header from "./Components/Shared/Header/Header";
import PreLoader from "./Components/Shared/Loading/PreLoader";
import Dashboard from "./Components/User/Dashboard";
import MyLiveClass from "./Components/User/LiveClass";
import MyAudioBooks from "./Components/User/MyAudioBooks";
import MyBooks from "./Components/User/MyBooks";
import MyCourses from "./Components/User/MyCourses";
import MyEbooks from "./Components/User/MyEbooks";
import Order from "./Components/User/Order";
import PaidCourse from "./Components/User/PaidCourse";
import Profile from "./Components/User/Profile";
import UpdateProfile from "./Components/User/UpdateProfile";
import NoteFound from "./Components/WrongRoute/NoteFound";
import UnderConstruction from "./Components/WrongRoute/UnderConstruction";
import auth from "./firebase.init";

function App() {
  const [theme, setTheme] = useState(false);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div
      data-theme={theme && "my_dark"}
      className="pt-16 font-header min-h-screen"
    >
      {loading ? (
        <div
          className="bg-gradient-to-r from-base-300 to-base-200"
          id="preloader"
        >
          <PreLoader></PreLoader>
        </div>
      ) : (
        <Header handleThemeChange={handleThemeChange} theme={theme}></Header>
      )}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/acadamicbook/:bookId"
          element={<BookDetail></BookDetail>}
        ></Route>
        <Route
          path="/skillbook/:bookId"
          element={<BookDetail></BookDetail>}
        ></Route>
        <Route
          path="/audiobook/:bookId"
          element={<AudioBookDetails></AudioBookDetails>}
        ></Route>
        <Route path="/courses" element={<AllCourses></AllCourses>}></Route>
        <Route
          path="/admission"
          element={<AllAdmission></AllAdmission>}
        ></Route>
        <Route path="/jobs" element={<AllJobCourse></AllJobCourse>}></Route>
        <Route path="/developer" element={<Developer></Developer>}></Route>
        <Route path="/bookstore" element={<BookStore></BookStore>}></Route>
        <Route path="/audiobook" element={<AudioBooks></AudioBooks>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/checkout/stripe" element={<Stripe></Stripe>}></Route>
          <Route
            path="/checkout/bkash/:uname"
            element={<Bkash></Bkash>}
          ></Route>
          <Route path="/orders" element={<Order></Order>}></Route>
          <Route path="/profile" element={<Profile></Profile>}>
            <Route path="/profile" element={<PaidCourse></PaidCourse>}></Route>
            <Route
              path="/profile/update"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          </Route>
          <Route
            path="/checkout/:uname"
            element={<Checkout></Checkout>}
          ></Route>
          <Route
            path="/bookcheckout/:bookId"
            element={<BookCheckout></BookCheckout>}
          ></Route>
          <Route
            path="/course/:uname/:list"
            element={<CoursePlay></CoursePlay>}
          >
            <Route
              path="/course/:uname/:list/:fileName"
              element={<CourseVideo></CourseVideo>}
            ></Route>
          </Route>
        </Route>
        <Route
          path="/course/summary/:uname"
          element={<Summary></Summary>}
        ></Route>

        <Route
          path="/blogdetails/:detailsId"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        {/* admim */}

        <Route element={<RequireAdmin></RequireAdmin>}>
          <Route path="/admin" element={<Admin></Admin>}>
            <Route path="/admin" element={<Admins></Admins>}></Route>
            <Route path="/admin/courses/manage" element={<Manage></Manage>}>
              <Route
                path="/admin/courses/manage"
                element={<Special></Special>}
              ></Route>
              <Route
                path="/admin/courses/manage/language"
                element={<Language></Language>}
              ></Route>
              <Route
                path="/admin/courses/manage/job"
                element={<Job></Job>}
              ></Route>
              <Route
                path="/admin/courses/manage/admission"
                element={<Admission></Admission>}
              ></Route>
            </Route>
            <Route
              path="/admin/skillbookss"
              element={<SkillBookss></SkillBookss>}
            ></Route>
            <Route
              path="/admin/academicbookss"
              element={<AcademicBookss></AcademicBookss>}
            ></Route>
            <Route
              path="/admin/reviews"
              element={<ManageReview></ManageReview>}
            >
              <Route
                path="/admin/reviews"
                element={<AllReviews></AllReviews>}
              ></Route>
              <Route
                path="/admin/reviews/course"
                element={<CourseReview></CourseReview>}
              ></Route>
              <Route
                path="/admin/reviews/book"
                element={<BookReview></BookReview>}
              ></Route>
            </Route>
            <Route path="/admin/livePost/live" element={<Live></Live>}></Route>
            <Route
              path="/admin/addlanguage"
              element={<AddLanguage></AddLanguage>}
            ></Route>
            <Route path="/admin/addjob" element={<AddJob></AddJob>}></Route>
            <Route
              path="/admin/addadmission"
              element={<AddAdmission></AddAdmission>}
            ></Route>
            <Route path="/admin/live" element={<Live></Live>}></Route>
            <Route path="/admin/blogs" element={<AddBlogs></AddBlogs>}></Route>
            <Route path="/admin/users" element={<Users></Users>}></Route>
            <Route
              path="/admin/payments"
              element={<Payments></Payments>}
            ></Route>
            <Route path="/admin/message" element={<Message></Message>}></Route>
          </Route>
        </Route>
        {/* courses  */}
        <Route
          path="/course/:uname"
          element={<AllCourseView></AllCourseView>}
        ></Route>
        <Route path="/mycourse" element={<MyCourses></MyCourses>}></Route>
        <Route path="/mybooks" element={<MyBooks></MyBooks>}></Route>
        <Route path="/ebooks" element={<MyEbooks></MyEbooks>}></Route>
        <Route
          path="/audiobooks"
          element={<MyAudioBooks></MyAudioBooks>}
        ></Route>
        <Route
          path="/audiobooks"
          element={<MyAudioBooks></MyAudioBooks>}
        ></Route>
        <Route
          path="/liveclasses"
          element={<MyLiveClass></MyLiveClass>}
        ></Route>

        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/coming"
          element={<UnderConstruction></UnderConstruction>}
        ></Route>
        <Route path="*" element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <FooterTwo></FooterTwo>
      <Footer></Footer>
    </div>
  );
}

export default App;
