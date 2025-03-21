import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccessPage = () => {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-2 rounded-xl"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
