import { useQuery } from "react-query";
import primaryAxios from "../Api/primaryAxios";

const useAllCourse = () => {
  const { data: language, isLoading } = useQuery(["languageCourse"], () =>
    primaryAxios.get(`/language`)
  );
  const { data: job, jobLoading } = useQuery(["jobCourse"], () =>
    primaryAxios.get(`/job`)
  );
  const { data: admission, aLoading } = useQuery(["admissionCourses"], () =>
    primaryAxios.get(`/admission`)
  );
  const courseLoading = isLoading && jobLoading && aLoading;
  return [admission, job, language, courseLoading];
};

export default useAllCourse;
