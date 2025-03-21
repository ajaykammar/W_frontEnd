// src/components/auth/LoginRegister.js
import { IoIosClose } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  registerUser,
  verifyOtp,
  loginUser,
  forgetPassword,
  updatePassword,
} from "../../services/authapi";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import OtpForm from "./OtpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import toastService from "../../utils/toastService";

const LoginRegister = ({ setisModuleOpen }) => {
  const [view, setView] = useState("login");
  const [timer, setTimer] = useState(60);
  const [ErrorState, setErrorState] = useState("");
  const [isUpdate, setisUpdate] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    mobileNumber: "",
    otp: "",
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    mutationKey: "login",
    gcTime: 1,
    onSuccess: (data) => {
      const { accessToken, others } = data;
      // Store token and user data in localStorage
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(others));

      // Close modal or perform other success actions
      setisModuleOpen(false);
      toastService.success("Login successful");
      console.log("Login successful:", data);
    },
    onError: (error) => {
      setErrorState(error.message);
      toastService.error(error.message);
    },
  });
  const registerMutation = useMutation({
    mutationFn: registerUser,
    mutationKey: "register",
    gcTime: 0,
    onSuccess: (data) => {
      toastService.success(data.message);
      setView("otp");
    },
    onError: (error) => {
      error && setView("login");
      toastService.warn(error.message);
    },
  });

  const otpVerifyMutation = useMutation({
    mutationFn: verifyOtp,
    mutationKey: "otp",
    onSuccess: (data) => {
      setView("login");
      toastService.success(data.message);
      // setTimer(0);
    },
    onError: (error) => {
      // setErrorState(error.message);
      console.log(error);
      toastService.error(error.message);
      setView("register");
      // setTimer(0);
    },
  });
  const ForgetPasswordMUtation = useMutation({
    mutationFn: forgetPassword,
    mutationKey: "forgotPassword",
    onSuccess: (data) => {
      toastService.success(data.message);
      setView("otp");
      setisUpdate(true);
    },
    onError: (error) => {
      setErrorState(error.message);
      toastService.error(error.message);
    },
  });

  const OTPvarifyAndUpadatePass = useMutation({
    mutationFn: updatePassword,
    mutationKey: "updatePassword",
    onSuccess: (data) => {
      setView("login");
      toastService.success(data.message);
    },
    onError: (error) => {
      setErrorState(error.message);
      toastService.error(error.message);
      setView("login");
    },
  });
  useEffect(() => {
    if (view === "otp" && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setisModuleOpen(false);
    }
  }, [view, timer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({
      email: formData.email,
      password: formData.password,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    registerMutation.mutate({
      username: formData.username,
      email: formData.email,
      contactNo: formData.mobileNumber,
      password: formData.password,
    });
    setView("otp");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      setView("updatePassword");
    } else {
      otpVerifyMutation.mutate({ otp: formData.otp });
      //
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();

    ForgetPasswordMUtation.mutate({ email: formData.email });
  };
  const handleUpdatePasswordSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    OTPvarifyAndUpadatePass.mutate({
      email: formData.email,
      otp: formData.otp,
      password: formData.newPassword,
      cpassword: formData.confirmPassword,
    });
  };
  return (
    <div className="h-screen fixed  z-10 w-full flex pt-12 justify-center bg-gray-500 bg-opacity-40">
      <div className="flex w-full h-3/4 max-w-4xl rounded-lg shadow-lg overflow-hidden ">
        {/* Left side branding */}
        <div className="w-1/2 bg-gradient-to-br from-primary to-blue-900 text-white p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">GoFinance</h1>
          <p className="text-lg mb-6">
            The most popular peer-to-peer lending at SEA
          </p>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
            Read More
          </button>
        </div>

        {/* Right side form */}
        <div className="w-1/2 bg-white p-8 flex flex-col relative s justify-center">
          {view === "login" && (
            <LoginForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleLoginSubmit={handleLoginSubmit}
              setView={setView}
              ErrorState={ErrorState}
              setisUpdate={setisUpdate}
            />
          )}

          {view === "register" && (
            <RegisterForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleRegisterSubmit={handleRegisterSubmit}
              setView={setView}
              ErrorState={ErrorState}
            />
          )}

          {view === "otp" && (
            <>
              <OtpForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleOtpSubmit={handleOtpSubmit}
                timer={timer}
                ErrorState={ErrorState}
              />
            </>
          )}

          {view === "forgetpassword" && (
            <ForgotPasswordForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleForgotPasswordSubmit={handleForgotPasswordSubmit}
              setView={setView}
            />
          )}
          {view === "updatePassword" && (
            <UpdatePasswordForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleUpdatePasswordSubmit={handleUpdatePasswordSubmit}
              setView={setView}
            />
          )}
          <div
            className="absolute top-5 right-5"
            onClick={() => setisModuleOpen(false)}
          >
            <IoIosClose size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
