import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, remCart } from "../../features/slices/cartSlice";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Summary = ({ cartData, Price }) => {
  console.log(cartData);
  const Dispatch = useDispatch();
  // Helper functions for calculation
  const calculateItemTotal = (price, quantity) =>
    parseFloat(price.replace(/,/g, "")) * quantity;
  const calculateDeliveryCharges = (price) => (price > 1000 ? 0 : 100);
  const calculateServiceCharges = (price) => (price > 1000 ? 150 : 50);

  // Function to calculate the grand total of all products

  const DeleteItem = (id) => {
    Dispatch(remCart({ _id: id }));
  };

  const handleIncrementQuantity = (product) => {
    Dispatch(incCart(product));
  };

  const handleDecrementQuantity = (product) => {
    Dispatch(decCart(product));
  };

  return (
    <div className="summary-container p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-sm font-bold text-center  mb-8"> CART SUMMARY</h2>

      <div className="cart-items space-y-6">
        {cartData.map((item) => {
          const itemTotal = calculateItemTotal(item.Price, item.quantity);
          const deliveryCharges = calculateDeliveryCharges(itemTotal);
          const serviceCharges = calculateServiceCharges(itemTotal);

          return (
            <div
              key={item._id}
              className="cart-item items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    src={item.Image}
                    alt={item.Title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{item.Title}</h4>
                    <p className="text-sm text-gray-600">
                      {" "}
                      Rs <b>{item.Price} </b>per item
                    </p>
                    <div className="flex items-center mt-2">
                      <p className="text-sm text-gray-500">Qty: </p>

                      <div className="flex items-center">
                        <PlusOutlined
                          onClick={() => handleIncrementQuantity(item)}
                          className="cursor-pointer text-green-500"
                        />
                        <span className="mx-2 text-lg">{item.quantity}</span>
                        <MinusOutlined
                          onClick={() => handleDecrementQuantity(item)}
                          className="cursor-pointer text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="mt-2">
                    <button
                      className="text-red-500 hover:text-red-700"
                      title="Remove Item"
                      onClick={() => DeleteItem(item._id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-green-600">
                    Rs {itemTotal.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Delivery Charges: Rs{" "}
                    {deliveryCharges > 0 ? deliveryCharges : "Free"}
                  </p>
                  <p className="text-sm text-gray-500">
                    Service Charges: Rs {serviceCharges}
                  </p>
                </div>
              </div>
              {/* Technical Requirements */}
              <div className="mb-6">
                {/* <label className="block font-semibold text-gray-700">
                  Technical Requirements
                </label> */}
                <div className="flex justify-end pt-2 ">
                  <input
                    type="checkbox"
                    id="technicalRequest"
                    name="isTechnicalRequired"
                    checked={true}
                    // onChange={handleTechnicalToggle}
                  />
                  <label
                    htmlFor="technicalRequest"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Add Technical Request
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="summary-footer mt-1 p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between text-md ">
          <span>Total Price:</span>
          {console.log(Price)}
          <span>Rs {Price.total}</span>
        </div>

        <div className="flex justify-between text-xs  ">
          <span>Delivery Charges:</span>
          <span>Rs {Price.DeliveryClarges}</span>
        </div>

        <div className="flex justify-between text-xs ">
          <span>Service Charges:</span>
          <span>Rs {Price.ServiceCharges}</span>
        </div>
        <div className="flex justify-between text-xs ">
          <span>18% GST: </span>
          <span>Rs {((Price.grandTotal * 18) / (100 + 18)).toFixed(2)}</span>
        </div>
        <div className="flex justify-between ">
          <span>Grand Total:</span>
          <span className="text-md text-green-600">
            Rs {Price.grandTotal.toFixed(2)}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
