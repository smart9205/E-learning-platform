import React from "react";

const PaymentsCard = ({ order, index, refetch }) => {
  const {
    productName,
    userName,
    userEmail,
    productImage,
    price,
    uname,
    _id,
    transactionId,
    status,
  } = order;

  return (
    <tr>
      <td>{productName}</td>
      <td>{userEmail}</td>
      <td>{transactionId}</td>
      <td>{status}</td>
    </tr>
  );
};

export default PaymentsCard;
