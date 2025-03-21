import React from "react";
import Wishlist from "../assets/Images/wishlist.png";
import {
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
  CloudFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/slices/wishlistSlice";
import { addToCart } from "../features/slices/cartSlice";
const WishList = () => {
  const WishListProducts = useSelector((state) => state.wishlist);
  const Dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    Dispatch(removeItem(product));
  };

  const handleaddToCart = (product) => {
    Dispatch(addToCart(product));
  };
  const handleCheckout = () => {
    // Implement checkout logic
    console.log("Proceeding to checkout");
  };

  return (
    <div className="w-full mx-auto p-6 mb-10">
      {WishListProducts.length > 0 ? (
        <>
          <div className="flex justify-between mx-3">
            <h2 className="text-xl font-bold mb-4">Your WishList</h2>
            <h2>Price</h2>
          </div>
          {WishListProducts.map((product) => (
            <div
              key={product.Product_ID}
              className="relative flex mb-4 p-4 shadow-sm bg-gray-50 rounded-lg"
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
                  className="mt-2 p-2  absolute  right-2 top-1  rounded-full hover:text-red-800  transition"
                >
                  <DeleteOutlined size={40} />
                </button>
                <div>
                  <h1 className="font-bold">{product.totalCharges} Rs</h1>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleaddToCart(product)}
                    className="m-1 px-6 py-2 text-white bg-primary float-right rounded-full hover:bg-blue-950 transition duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="m-1 px-6 py-2 text-white bg-primary float-right rounded-full hover:bg-blue-950 transition duration-300 ease-in-out"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <img src={Wishlist} alt="Cart is Empty" className="w-2/3 sm:w-1/3" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            WishList is Empty
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

export default WishList;
