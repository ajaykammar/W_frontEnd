import api from "./api";

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/api/user/login", credentials);

    return response.data; // return the login response (user data, token, etc.)
  } catch (error) {
    // Optionally handle specific errors here
    console.log(error);
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/api/user/reg", userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.error || "Registration failed");
  }
};

// // Verify OTP
export const verifyOtp = async (otp) => {
  console.log(otp);
  try {
    const response = await api.post("/api/user/reg/verify", otp);
    console.log(response);
    return response.data; // return OTP verification response (success message or user data)
  } catch (error) {
    throw new Error(error.response?.data?.message || "OTP verification failed");
  }
};

export const forgetPassword = async (userData) => {
  try {
    const response = await api.post("/api/user/forgetPassword", userData);

    return response.data; // return OTP verification response (success message or user data)
  } catch (error) {
    console.log(error.response?.data?.error);
    throw new Error(error.response?.data?.error || "Failed to send OTP");
  }
};

export const updatePassword = async (userData) => {
  try {
    const response = await api.patch(
      "/api/user/VerifyAndupdatePassword",
      userData
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update password"
    );
  }
};
