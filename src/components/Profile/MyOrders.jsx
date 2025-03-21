import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetAllOrder, CancelOrder } from "../../services/userApi";
import LoadingSpinner from "../Loading/LoadingSpinner";
import TrackingStages from "./TrackingStages";

function MyOrders() {
  const User = JSON.parse(localStorage.getItem("user"));
  // const queryClient = useQueryClient();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["order", User._id],
    queryFn: () => GetAllOrder(User._id),
    gcTime: 0,
  });

  const cancelOrderMutation = useMutation({
    mutationFn: CancelOrder,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error deleting order:", error);
    },
  });

  const handleCancelOrder = ({ UserId, OrderId }) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      cancelOrderMutation.mutate({ UserId, OrderId });
    }
  };

  // Handle errors and loading states
  if (isError) return <div>Error: {error.message}</div>;
  if (isLoading) return <LoadingSpinner />;
  if (!data) return <div>No data available</div>;

  return (
    <div className="w-full mx-auto mt-8 p-4">
      {/* <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search your orders here"
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-950 text-white font-semibold rounded-r-md hover:bg-blue-900">
          Search Orders
        </button>
      </div> */}

      {/* {data.Order.map((order) => {
        const products = Object.values(order.products);

        return (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
          >
            <div className="flex items-start">
              <div className="ml-4 flex-grow">
                {products &&
                  products.map((product, index) => (
                    <div key={index} className="flex mb-2">
                      <img
                        src={product.Image}
                        alt={product.Title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <h3 className="text-sm p-2">{product.Title}</h3>
                    </div>
                  ))}
              </div>
              <div>
                <p className="text-lg font-semibold mt-1">
                  {order.Price.grandTotal} Rs
                </p>
                <p
                  className={`text-sm font-medium mt-2 ${
                    order.status === "Confirmed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Your Order has been {order.status}
                </p>
                <button
                  onClick={() => {
                    handleCancelOrder({ UserId: User._id, OrderId: order._id });
                    console.log(order._id);
                  }}
                  className="mt-4 px-4 py-2 text-red-600 rounded-md "
                >
                  cancell Order
                </button>
              </div>
            </div>
          </div>
        );
      })} */}

      {data.Order.map((order) => {
        const products = Object.values(order.products);

        return (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-300 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Product Images and Details */}
              <div className="flex-grow">
                {products &&
                  products.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center border-b border-gray-200 pb-4 mb-4 last:border-none last:mb-0"
                    >
                      <img
                        src={product.Image}
                        alt={product.Title}
                        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="ml-4">
                        <h3 className="text-base font-medium text-gray-800">
                          {product.Title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {product.Subtitle}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          Price: {product.Price} Rs
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          Tech Service: 150 Rs
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Order Details */}
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">
                  {order.Price.grandTotal} Rs
                </p>
                <p
                  className={`text-sm font-semibold  ${
                    order.status === "Confirmed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Your order is {order.status}
                </p>

                {order.status !== "Cancelled" ? (
                  <p
                    onClick={() => {
                      handleCancelOrder({
                        UserId: User._id,
                        OrderId: order._id,
                      });
                      console.log(order._id);
                    }}
                    className="mt-1 text-xs px-1 text-red-700 "
                  >
                    Cancel Order
                  </p>
                ) : (
                  ""
                )}
              </div>

              {/* Tracking
               */}
            </div>
            <TrackingStages />
          </div>
        );
      })}
    </div>
  );
}

export default MyOrders;
