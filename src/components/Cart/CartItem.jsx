import React from "react";
import Empoty from "../../assets/Images/empty.png";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, remCart } from "../../features/slices/cartSlice";
const CartItem = () => {
  // Sample cart products data
  const Dispatch = useDispatch();
  const CartProducts = useSelector((state) => state.cartData);

  const handleIncrementQuantity = (product) => {
    Dispatch(incCart(product));
  };

  const handleDecrementQuantity = (product) => {
    Dispatch(decCart(product));
  };

  const handleRemoveItem = (product) => {
    Dispatch(remCart(product));

    console.log(product);
  };

  const handleCheckout = () => {
    // Implement checkout logic
    console.log("Proceeding to checkout");
  };

  return (
    <div className="w-full mx-auto p-6 mb-10">
      {CartProducts.length > 0 ? (
        <>
          <div className="flex justify-between mx-3">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            <h2>Price</h2>
          </div>
          {CartProducts.map((product) => (
            <div
              key={product.Product_ID}
              className="flex mb-4 p-4 shadow-sm bg-gray-50 rounded-lg"
            >
              <div className="flex flex-1">
                <img
                  src={product.Image}
                  alt={product.Title}
                  className="w-32 h-32 rounded-lg"
                />
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <div className="flex">
                      <span className="ml-2 text-md font-bold">
                        {product.Title}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="ml-2 text-sm ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore, nemo!{" "}
                      </span>
                    </div>

                    <div className="flex">
                      <span className="ml-2 text-md font-bold text-green-600">
                        In Stock
                      </span>
                    </div>
                    <div className="flex">
                      <span className="ml-2 text-sm text-red-950 ">
                        Discounted upto 30%{" "}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="ml-2 text-sm text-blue-950 ">
                        Eligible for FREE Shipping{" "}
                      </span>
                    </div>
                    <div className="flex"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between ml-4">
                <button
                  onClick={() => handleRemoveItem(product)}
                  className="mt-2 p-2   rounded-full hover:text-red-800  transition"
                >
                  <DeleteOutlined size={40} />
                </button>
                <div>
                  <h1 className="font-bold">{product.totalCharges} Rs</h1>
                </div>
                <div className="flex items-center">
                  <PlusOutlined
                    onClick={() => handleIncrementQuantity(product)}
                    className="cursor-pointer text-green-500"
                  />
                  <span className="mx-2 text-lg">{product.quantity}</span>
                  <MinusOutlined
                    onClick={() => handleDecrementQuantity(product)}
                    className="cursor-pointer text-red-500"
                  />
                </div>
              </div>
            </div>
          ))}
          <Link to={"/checkout"}>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 text-white bg-primary float-right rounded-full hover:bg-blue-950 transition duration-300 ease-in-out"
            >
              Checkout
            </button>
          </Link>
        </>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <img src={Empoty} alt="Cart is Empty" className="w-2/3 sm:w-1/3" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            Cart is Empty
          </h2>
          <p className="mt-2 text-gray-500 text-center">
            Add items to get started!
          </p>
          <Link to="/" className="mt-6">
            <button className="px-6 py-2 text-white bg-blue-950 rounded-full hover:bg-blue-900 transition duration-300 ease-in-out shadow-lg">
              Go Back Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
