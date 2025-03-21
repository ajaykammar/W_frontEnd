import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { FaShoppingCart } from "react-icons/fa"; // React icon for cart
import { AiOutlineStar, AiFillStar } from "react-icons/ai"; // React icons for stars
import { useQuery } from "@tanstack/react-query";
import { SingleProduct } from "../services/productApi";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, remCart } from "../features/slices/cartSlice";

const WarrentyData = [
  { Key: "Covered in Warranty", Value: "Yes, Replacement Only. No Returns" },
  { Key: "Warranty Summary", Value: "10 Days Testing Replacement Warranty" },
  { Key: "Warranty Service Type", Value: "Send to seller by courier" },
  { Key: "Warranty T&C", Value: "click here" },
  { Key: "Country of Origin", Value: "India" },
];

const ProductDitel = () => {
  const { id } = useParams();

  const CartData = useSelector((state) => state.cartData);
  const { data, error, isError, isSuccess, isLoading, isPending } = useQuery({
    queryKey: ["SingleProduct", id],
    queryFn: () => SingleProduct(id),
  });
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const selectprodcutQty = CartData.filter((item) => item._id === id)[0]
    .quantity;

  const Navigate = useNavigate();
  const [Item, setItem] = useState({
    Title: "Sample Product",
    Subtitle: "This is a sample product for demo purposes.",
    Image:
      "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/400/400/detailed/2232/lcd_with_touch_screen_for_general_mobile_gm_6_black_by_maxbhi_com_98727.jpg?t=1719163130",
    Price: { Price: 2000, discount_percentage: 20 },
    Product_ID: "SP12345",
    Status: "In Stock",
    Description: "This is a detailed description of the sample product.",
    technical_Details: {
      brand: "SampleBrand",
      Product_Dimetion: "20 x 10 x 5 cm",
      mounting: "Included",
      numberofItem: 1,
      manufacturer: "Sample Manufacturer",
      contryOrigin: "India",
      waight: "1.5 kg",
    },
    aditional_Details: {
      customer_reviews: "Good quality product.",
    },
    categery: "Electronics",
  });

  const [MoreDetails, setMoreDetails] = useState(false);

  const getDiscountedPrice = (price, discountPercentage) =>
    Math.round(price * (1 - discountPercentage / 100));
  const discountPercentage = Item?.Price?.discount_percentage || 0;
  const price = Item?.Price?.Price || 0;
  const discountedPrice = getDiscountedPrice(price, discountPercentage);
  const techServiceCharges = price > 500 ? 350 : 150;
  const totalCharges = discountedPrice + techServiceCharges;

  if (isLoading && !data) return <LoadingSpinner />;
  const AddToCart = () => {
    Navigate("/cart");
  };

  const CheckOut = () => {
    Navigate("/checkout");
  };

  const Dispatch = useDispatch();

  const handleIncrementQuantity = (product) => {
    Dispatch(incCart(product));
  };

  const handleDecrementQuantity = (product) => {
    Dispatch(decCart(product));
  };
  return (
    <div className="m-5 px-6">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-2/5 flex flex-col items-center">
          <img
            src={data.Image}
            alt={data.Title}
            className="w-1/2 p-4 rounded-2xl transition-transform duration-500 hover:scale-110"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-full">
              {discountPercentage}% Off
            </div>
          )}
        </div>

        <div className="flex-auto px-4 py-8">
          <h2 className="text-xl font-semibold">{data.Title}</h2>
          <p className="mt-4 text-justify">{data.Subtitle}</p>

          {/* Star rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <AiFillStar
                key={index}
                className={`text-yellow-500 ${index < 3 ? "" : "opacity-50"}`}
              />
            ))}
          </div>

          {/* <h1 className="text-2xl font-semibold">
            {discountPercentage > 0 ? discountedPrice : price} Rs
          </h1> */}
          <h1 className="text-2xl font-semibold">{data.Price} Rs</h1>
          <p className="pt-1 text-red-600">
            List price <span className="line-through"> {price}</span> : Rs
            {discountPercentage > 0
              ? ` You Save: ${discountedPrice} Rs (${discountPercentage}%)`
              : ""}
          </p>
          <div className="pt-1">CODE: {Item.Product_ID}</div>
          <div className="pt-1 ">
            Availability:{" "}
            {Item.Status === "In Stock" ? (
              <span className="text-green-500 font-bold">In Stock</span>
            ) : (
              <span className="text-red-600 font-bold">Out Of Stock</span>
            )}
          </div>
          {/* <div className="pt-1">
            Quantity: <span className="border p-1 ">1</span>
          </div> */}

          <div className="flex items-center">
            <PlusOutlined
              onClick={() => handleIncrementQuantity(data)}
              className="cursor-pointer text-green-500"
            />
            <span className="mx-2 text-lg">{selectprodcutQty}</span>
            <MinusOutlined
              onClick={() => handleDecrementQuantity(data)}
              className="cursor-pointer text-red-500"
            />
          </div>

          <div className="mt-3">
            <button
              onClick={CheckOut}
              className="bg-green-500 border text-md font-semibold p-3 text-white mr-2 rounded-md"
            >
              BUY NOW
            </button>
            <button
              className="bg-red-500 boder text-md p-3 font-semibold text-white rounded-md"
              onClick={AddToCart}
            >
              <FaShoppingCart className="mr-2" />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl w-full font-semibold border-b-2 pb-2">
          Product Details
        </h1>
        <div className="text-justify py-4">{Item.Description}</div>

        <h4 className="text-lg font-semibold mt-6">Product Information</h4>
        <table className="border border-gray-400 mt-4 w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 font-semibold">
                Technical Details
              </th>
            </tr>
          </thead>
          <tbody>
            {Item.technical_Details?.brand && (
              <tr>
                <td className="border border-gray-400 px-4 py-2">Brand</td>
                <td className="border border-gray-400 px-4 py-2">
                  {Item.technical_Details.brand}
                </td>
              </tr>
            )}
            {Item.technical_Details?.Product_Dimetion && (
              <tr>
                <td className="border  border-gray-400 px-4 py-2">
                  Product Dimensions
                </td>
                <td className="border  border-gray-400 px-4 py-2">
                  {Item.technical_Details.Product_Dimetion}
                </td>
              </tr>
            )}
            {Item.technical_Details?.mounting && (
              <tr>
                <td className="border  border-gray-400 px-4 py-2">
                  Mounting Hardware
                </td>
                <td className="border  border-gray-400 px-4 py-2">
                  {Item.technical_Details.mounting}
                </td>
              </tr>
            )}
            {Item.technical_Details?.numberofItem && (
              <tr>
                <td className="border  border-gray-400 px-4 py-2">
                  Number of items
                </td>
                <td className="border  border-gray-400 px-4 py-2">
                  {Item.technical_Details.numberofItem}
                </td>
              </tr>
            )}
            {Item.technical_Details?.manufacturer && (
              <tr>
                <td className="border  border-gray-400  px-4 py-2">
                  Manufacturer
                </td>
                <td className="border  border-gray-400 px-4 py-2">
                  {Item.technical_Details.manufacturer}
                </td>
              </tr>
            )}
            {Item.technical_Details?.contryOrigin && (
              <tr>
                <td className="border  border-gray-400 px-4 py-2">
                  Country of Origin
                </td>
                <td className="border  border-gray-400 px-4 py-2">
                  {Item.technical_Details.contryOrigin}
                </td>
              </tr>
            )}
            {Item.technical_Details?.waight && (
              <tr>
                <td className="border px-4  border-gray-400 py-2">
                  Item Weight
                </td>
                <td className="border px-4  border-gray-400 py-2">
                  {Item.technical_Details.waight}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <h5
          className="text-blue-600 cursor-pointer mt-4 font-bold"
          onClick={() => setMoreDetails(!MoreDetails)}
        >
          {MoreDetails ? "Less" : "More Details..."}
        </h5>

        {MoreDetails && (
          <table className="border border-gray-400 mt-4 w-full">
            <thead>
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Additional Information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border  border-gray-400 px-4 py-2">ASIN</td>
                <td className="border  border-gray-400 px-4 py-2">
                  B0D7CPB42X
                </td>
              </tr>
              {Item.aditional_Details?.customer_reviews && (
                <tr>
                  <td className="border   border-gray-400 px-4 py-2">
                    Customer Reviews
                  </td>
                  <td className="border   border-gray-400 px-4 py-2">
                    {Item.aditional_Details.customer_reviews}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-8">
        {/* <AllproductsByCat category={Item.categery} /> */}
      </div>
    </div>
  );
};

export default ProductDitel;
