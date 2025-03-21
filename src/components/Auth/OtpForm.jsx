// src/components/auth/OtpForm.js
import CascaderPanel from "antd/es/cascader/Panel";
import React from "react";

const OtpForm = ({
  formData,
  handleInputChange,
  handleOtpSubmit,
  timer,
  otpSendMutation,
  mobileNumber,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        OTP Verification
      </h2>
      <p className="text-gray-500 mb-4">
        We've sent an OTP to your mobile number.
      </p>
      <form className="space-y-4" onSubmit={handleOtpSubmit}>
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleInputChange}
          placeholder="Enter OTP"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          type="submit"
        >
          Verify
        </button>
      </form>
      <div className="mt-4 text-center">
        {timer > 0 ? (
          <p className="text-gray-600">Resend OTP in {timer} seconds</p>
        ) : (
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => otpSendMutation.mutate(mobileNumber)}
          >
            Resend OTP
          </button>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default OtpForm;
