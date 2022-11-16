import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useMessage from "../../Hooks/useMessage";
import MessageHistory from "../Admin/MessageHistory";

const Messages = () => {
  const [user, loading] = useAuthState(auth);
  const userEmail = user?.email;

  const [message, isLoading, refetch] = useMessage();
  if (isLoading) {
    return <div className="mx-auto" id="preloaders"></div>;
  }
  const userMessageData = message?.data?.filter(
    (allcard) => allcard.email === userEmail
  );
  return (
    <div>
      {userMessageData?.length === 0 && (
        <div className="py-8 bg-base-200 text-center uppercase">
          no notifications here <i className="fa-solid fa-bell-slash"></i>
        </div>
      )}
      {userMessageData
        ?.slice(0)
        .reverse()
        .map((message, index) => (
          <MessageHistory
            key={message?._id}
            message={message}
            refetch={refetch}
          ></MessageHistory>
        ))}
    </div>
  );
};

export default Messages;
