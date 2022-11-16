import { useParams } from "react-router-dom";
import useAllCourse from "./useAllCourse";

const useCourse = () => {
  const { uname } = useParams();
  const [admission, job, language, courseLoading] = useAllCourse();
  const courseData =
    admission?.data?.find((allcard) => allcard.uname === uname) ||
    language?.data?.find((allcard) => allcard.uname === uname) ||
    job?.data?.find((allcard) => allcard.uname === uname);
  return [courseData, courseLoading];
};

export default useCourse;
