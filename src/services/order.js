import api from "./api";

export const SubmitOrder = async (Order) => {
  try {
    const response = await api.post("/api/Order/", Order);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err?.response?.data?.error || "Error fetching products");
  }
};
