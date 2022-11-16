import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../Shared/Loading/Loading";
import PaymentsCard from "./PaymentsCard";
const Payments = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["all-orders"], () => primaryAxios.get(`/all-order`));

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="navbar">
        <a className="normal-case text-xl">Payments</a>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {orders?.data?.slice(0).reverse().map((order, index) => (
              <PaymentsCard
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              ></PaymentsCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
