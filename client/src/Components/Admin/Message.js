import React from 'react';
import { useQuery } from "react-query";
import primaryAxios from '../../Api/primaryAxios';
import Loading from "../Shared/Loading/Loading";
import MessageRow from './MessageRow';

const Message = () => {
    const {
        data: users,
        isLoading,
      } = useQuery(["ourUsers"], () => primaryAxios.get(`/user`));
      if (isLoading) {
        return <Loading></Loading>;
      }
    return (
        <div>
          <div className="navbar">
        <a className="normal-case text-xl">Send Message</a>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Action</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody>
          {users?.data?.map((user, index) => (
              <MessageRow
                key={user._id}
                index={index}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Message;