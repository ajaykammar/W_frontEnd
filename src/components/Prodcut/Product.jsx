import React from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { Rate } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import { addWishList } from "../../features/slices/wishlistSlice";
const Product = ({ product }) => {
  const { ServiceType } = useParams();
  const Dispatch = useDispatch();
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);
  const addtoCart = (product) => {
    Dispatch(addToCart(product));
  };
  const AddWishList = (product) => {
    Dispatch(addWishList(product));
  };
  console.log(product);
  return (
    <div className="relative bg-white w-60 h-72 m-2 p-2 shadow-lg rounded-xl rounded-tl-[40px] rounded-br-[40px] transition transform hover:scale-105 hover:shadow-xl">
      {/* Offer Tag */}
      {!product.discountPercentage > 0 && (
        <div className="absolute z-10 top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
          Offer
        </div>
      )}
      <p className="text-gray-600 text-sm font-semibold">{product.Title}</p>
      {/* Product Image */}
      <div className="flex justify-center items-center h-1/2 overflow-hidden">
        <img
          src={
            ServiceType == "laptop-serivice"
              ? product?.Images[0]
              : product.Image
          }
          alt={product?.Title}
          className="object-cover w-48 h-48 transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-2">
        <h3 className="text-lg font-bold">
          {product && product.discountPercentage > 0
            ? ` Rs${discountedPrice.toFixed(2)} `
            : `Rs ${
                ServiceType == "laptop-serivice"
                  ? product?.Price.selling_price
                  : product?.Price
              } `}
        </h3>
        {/* {product?.discountPercentage > 0 && ( */}
        <p className="text-red-500 line-through text-sm">
          Rs {product?.Price.actual_price}{" "}
        </p>
        {/* )} */}

        <p
          className={`text-sm font-semibold ${
            product.status !== "In Stock" ? "text-green-600" : "text-red-600"
          }`}
        >
          In Stock
        </p>
        <div className="mt-2">
          <Rate defaultValue={product?.rating ? product?.rating : 3.5} />
        </div>
      </div>

      {/* Action Icons */}
      <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div
          className="p-2 bg-blue-200 rounded-full cursor-pointer hover:bg-blue-300 transition-transform transform hover:scale-110"
          title="Add to Cart"
        >
          <Link to={`/product/${product?._id}`}>
            <FaShoppingCart
              className="text-blue-700"
              onClick={() => addtoCart(product)}
            />
          </Link>
        </div>
        <div
          className="p-2 bg-pink-200 rounded-full cursor-pointer hover:bg-pink-300 transition-transform transform hover:scale-110"
          title="Add to Wishlist"
          onClick={() => AddWishList(product)}
        >
          <FaHeart className="text-pink-600" />
        </div>
        <Link to={`/product/${product?._id}`}>
          <div
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-110"
            title="View Details"
          >
            <FaSearch className="text-gray-700" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
