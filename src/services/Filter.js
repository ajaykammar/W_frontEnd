import api from "./api";

export const GetFilterData = async () => {
  try {
    const response = await api.get("/api/Brand/get-Brand-module");

    return response.data;
  } catch (err) {
    throw new Error(err?.response?.data?.error || "Error fetching products");
  }
};
