// src/components/auth/LoginForm.js
import React from "react";

const LoginForm = ({
  formData,
  handleInputChange,
  handleLoginSubmit,
  setView,
  ErrorState,
  setisUpdate,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Hello Again!</h2>
      <p className="text-gray-500 mb-6">Welcome Back</p>
      <form className="space-y-4" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address or Mobile Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {/* <p className="text-red-600 transform ">{ErrorState}</p> */}

        <button
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
        <div className="flex justify-between text-sm text-blue-500 mt-4">
          <p onClick={() => setView("register")} className="cursor-pointer">
            Create an Account
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setisUpdate(true);

              setView("forgetpassword");
            }}
          >
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
