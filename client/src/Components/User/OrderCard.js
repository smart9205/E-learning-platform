import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import primaryAxios from "../../Api/primaryAxios";

const OrderCard = ({ order, index, refetch }) => {
  const { productName, productImage, price, pdfLink, _id, transactionId, status } =
    order;

    const handleCancelOrder = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once Cancelled,This Process Can't Be Undone",
          icon: "warning",
          className: "rounded-3xl",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            (async () => {
              const { data } = await primaryAxios.delete(`/order?id=${_id}`);
              if (data.deletedCount > 0) {
                swal("Order Cancelled", {
                  icon: "success",
                  className: "rounded-3xl",
                });
    
                refetch();
              }
            })();
          } else {
            swal("Appreciate Your Not Cancelling The order", {
              className: "rounded-3xl",
            });
          }
        });
      };
  return (
    <div className="card card-side bg-base-200 rounded-lg border border-neutral">
      <figure>
        <img className="lg:h-44 md:w-56 hidden " src={productImage} alt="Movie" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title">{productName}</h2>
        <p>Transaction ID: {transactionId ? transactionId : "Unpaid"}</p>
        <p>Price: ৳{price}</p>
        <div className="flex items-center">
        <p>Payment Status: <button className="uppercase font-thin text-green-500">
          {status}
        </button></p>
        {/* {pdfLink && 
        (
          <a className="pt-1 rounded-md border-green-500 border-2 text-green-500 font-bold btn-sm hover:text-red-400 hover:border-red-400" href={pdfLink}>Download</a>
        )
        } */}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
