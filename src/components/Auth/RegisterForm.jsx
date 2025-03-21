// src/components/auth/RegisterForm.js
import React from "react";

const RegisterForm = ({
  formData,
  handleInputChange,
  handleRegisterSubmit,
  setView,
  ErrorState,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
      <p className="text-gray-500 mb-6">Sign up to get started!</p>
      <form className="space-y-4" onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="tel" // Use 'tel' for mobile numbers to prevent arrows in some browsers
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={(e) => {
            const value = e.target.value;
            // Allow only digits and limit input to 10 characters
            if (/^\d{0,10}$/.test(value)) {
              handleInputChange(e); // Update formData only if input is valid
            }
          }}
          placeholder="Mobile Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        {/* <p className="text-red-600 transform ">{ErrorState}</p> */}
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Register
        </button>
      </form>
      <p
        className="text-center text-blue-500 mt-4 cursor-pointer"
        onClick={() => setView("login")}
      >
        Already have an account? Login
      </p>
    </div>
  );
};

export default RegisterForm;
