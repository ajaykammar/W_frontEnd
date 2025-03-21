import React from "react";
import Summary from "../components/CheckOut/Summary";
import CheckoutForm from "../components/CheckOut/CheckoutForm";
import { useSelector } from "react-redux";
// import Empoty from "../../assets/Images/empty.png";
import empty from "../assets/Images/empty.png";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const cartData = useSelector((state) => state.cartData);
  const calculateItemTotal = (price, quantity) =>
    parseFloat(price.replace(/,/g, "")) * quantity;
  const calculateServiceCharges = (price) => (price > 1000 ? 150 : 50);
  const calculateDeliveryCharges = (price) => (price > 1000 ? 0 : 100);

  const TotalPrice = cartData.reduce(
    (total, item) => total + calculateItemTotal(item.Price, item.quantity),
    0
  );
  const DeliveryClarges = cartData.some(
    (item) => calculateItemTotal(item.Price, item.quantity) <= 1000
  )
    ? "100 Rs"
    : "Free";
  const ServiceCharges = cartData.reduce((total, item) => {
    const itemTotal = calculateItemTotal(item.Price, item.quantity);
    return total + calculateServiceCharges(itemTotal);
  }, 0);

  const calculateGrandTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const itemTotal = calculateItemTotal(item.Price, item.quantity);
      const deliveryCharges = calculateDeliveryCharges(itemTotal);
      const serviceCharges = calculateServiceCharges(itemTotal);
      return total + itemTotal + deliveryCharges + serviceCharges;
    }, 0);
  };
  const grandTotal = calculateGrandTotal(cartData);

  if (cartData.length <= 0)
    return (
      <div className="flex justify-center flex-col items-center m-9">
        <img src={empty} alt="Cart is Empty" className="w-2/3 sm:w-1/3" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Cart is Empty
        </h2>
        <p className="mt-2 text- gray-500 text-center">
          Add items to get started!
        </p>
        <Link to="/" className="mt-6">
          <button className="px-6 py-2 text-white bg-blue-950 rounded-full hover:bg-blue-900 transition duration-300 ease-in-out shadow-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    );
  const Price = {
    total: TotalPrice.toFixed(2),
    DeliveryClarges,
    ServiceCharges,
    grandTotal,
  };
  return (
    <div className="flex">
      <CheckoutForm cartData={cartData} Price={Price} />
      <Summary cartData={cartData} Price={Price} />
    </div>
  );
};

export default CheckOut;
