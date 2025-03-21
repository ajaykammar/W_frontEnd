import React from "react";

const ForgotPasswordForm = ({
  formData,
  handleInputChange,
  handleForgotPasswordSubmit,
  setView,
  ErrorState,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h2>
      <p className="text-gray-500 mb-4">
        Enter your registered email to receive an OTP.
      </p>
      <form className="space-y-4" onSubmit={handleForgotPasswordSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        {ErrorState}
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          type="submit"
          // onClick={() => }
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
