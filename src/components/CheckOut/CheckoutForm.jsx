import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaHome, FaPhone, FaMapMarkerAlt, FaRegBuilding } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { SubmitOrder } from "../../services/order";
import { AddOrder } from "../../services/userApi";
import toastService from "../../utils/toastService";
import { emptyCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cartData, Price }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const SubmitOrderMution = useMutation({
    mutationFn: SubmitOrder,
    mutationKey: "OrderMution",
    onSuccess: (data) => {
      // console.log(data);
      AddOrdertoUserMutation.mutate({
        userId: user._id,
        orderId: data.ID,
      });
    },
    onError: (error) => {
      console.log(error);
      toastService.error("Failed to place order. Please try again.");
    },
    gcTime: 0,
  });

  const AddOrdertoUserMutation = useMutation({
    mutationFn: AddOrder,
    mutationKey: "AddOrdertoUserMutation",
    onSuccess: (data) => {
      console.log(data);
      toastService.success("order placed successfully ...");
      Dispatch(emptyCart());
      Navigate("/");
    },
    onError: (error) => {
      console.log(error);
      console.log(error);
      toastService.error("Failed to place order. Please try again.");
    },
    gcTime: 0,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    landmark: "",
    area: "",
    email: user.email,
    city: "",
    state: "",
    pincode: "",
    serviceType: "doorstep",
    technicalRequest: "",
    isTechnicalRequired: true,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTechnicalToggle = () => {
    setFormData({
      ...formData,
      isTechnicalRequired: !formData.isTechnicalRequired,
      technicalRequest: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Order = {
      userId: user._id,
      address: formData,
      products: cartData,

      Price,
    };
    console.log("Form Data Submitted:", Order);
    alert("Form Submitted Successfully!");
    console.log(Order);
    SubmitOrderMution.mutate(Order);
    Navigate("/ordersucces");
    setFormData({
      fullName: "",
      mobile: "",
      address: "",
      email: user.email,
      landmark: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      serviceType: "doorstep",
      technicalRequest: "",
      isTechnicalRequired: true,
    });
  };

  return (
    <div className="checkout-container p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Checkout</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name & Mobile */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg p-2">
              <FaHome className="mr-2 text-gray-500" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 outline-none"
                placeholder="Enter Full Name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Mobile Number
            </label>
            <div className="flex items-center border rounded-lg p-2">
              <FaPhone className="mr-2 text-gray-500" />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-2 outline-none"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
          </div>
        </div>

        {/* Address, Landmark, Area */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700">Address</label>
          <div className="flex items-center border rounded-lg p-2 mb-4">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 outline-none"
              placeholder="Enter Address"
              required
            />
          </div>

          <label className="block font-semibold text-gray-700">Landmark</label>
          <div className="flex items-center border rounded-lg p-2 mb-4">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
              className="w-full p-2 outline-none"
              placeholder="Enter Landmark"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-semibold text-gray-700">Area</label>
              <div className="flex items-center border rounded-lg p-2">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full p-2 outline-none"
                  placeholder="Enter Area"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">City</label>
              <div className="flex items-center border rounded-lg p-2">
                <MdLocationCity className="mr-2 text-gray-500" />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 outline-none"
                  placeholder="Enter City"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">State</label>
              <div className="flex items-center border rounded-lg p-2">
                <FaRegBuilding className="mr-2 text-gray-500" />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-2 outline-none"
                  placeholder="Enter State"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pincode */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700">Pincode</label>
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="w-full p-2 outline-none"
              placeholder="Enter Pincode"
              required
            />
          </div>
        </div>

        {/* Service Type */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700">
            Select Service Type
          </label>
          <div className="flex gap-4">
            <div>
              <input
                type="radio"
                id="doorstep"
                name="serviceType"
                value="Pick up drop"
                checked={formData.serviceType === "doorstep"}
                onChange={handleInputChange}
              />
              <label htmlFor="doorstep" className="ml-2 text-gray-600">
                Pick up drop
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="visitOffice"
                name="serviceType"
                value="visitOffice"
                checked={formData.serviceType === "visitOffice"}
                onChange={handleInputChange}
              />
              <label htmlFor="visitOffice" className="ml-2 text-gray-600">
                Store vist for repair
              </label>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700">
            Technical Requirements
          </label>
          <div>
            <input
              type="checkbox"
              id="technicalRequest"
              name="isTechnicalRequired"
              checked={formData.isTechnicalRequired}
              onChange={handleTechnicalToggle}
            />
            <label htmlFor="technicalRequest" className="ml-2 text-gray-600">
              Add Technical Request
            </label>
          </div>
          {formData.isTechnicalRequired && (
            <textarea
              name="technicalRequest"
              value={formData.technicalRequest}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg outline-none"
              placeholder="Enter Technical Request Details"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
