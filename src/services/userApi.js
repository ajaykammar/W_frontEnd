import api from "./api";

export const AddtoDBCart = async (userId, productId) => {
  try {
    const response = await api.post(
      `/api/users/addToCart/${userId}/${productId}`
    );
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data.error || "Error fetching products");
  }
};

export const AddOrder = async ({ userId, orderId }) => {
  try {
    const response = await api.post(`/api/users/AddOrder/${userId}/${orderId}`);
    console.log("res : ", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response?.data.error || "Error creating order");
  }
};

export const GetAllOrder = async (userId) => {
  try {
    const response = await api.get(`/api/users/getCart/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err.response?.data.error || "Error fetching cart");
  }
};

export const CancelOrder = async ({ UserId, OrderId }) => {
  console.log(UserId, OrderId);
  try {
    const response = await api.patch(
      `/api/users/CancelOrder/${UserId}/${OrderId}`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data.error || "Error deleting order");
  }
};
