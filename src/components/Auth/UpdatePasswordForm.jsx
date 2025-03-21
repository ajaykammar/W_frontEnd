import React from "react";

const UpdatePasswordForm = ({
  formData,
  handleInputChange,
  handleUpdatePasswordSubmit,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
      <p className="text-gray-500 mb-4">
        Enter a new password for your account.
      </p>
      <form className="space-y-4" onSubmit={handleUpdatePasswordSubmit}>
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleInputChange}
          placeholder="Enter OTP"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleInputChange}
          placeholder="New Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm New Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <button
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          type="submit"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
