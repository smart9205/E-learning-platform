import { useQuery } from "react-query";
import primaryAxios from "../Api/primaryAxios";

const useMessage = () => {
  const {
    data: message,
    isLoading,
    refetch,
  } = useQuery(["message"], () => primaryAxios.get(`/message`));
  return [message, isLoading, refetch];
};

export default useMessage;
