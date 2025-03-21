import api from "./api";

export const AllProdcuts = async (page) => {
  try {
    const response = await api.get(`/api/product/?page=${page}&limit=20`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data.error || "Error fetching products");
  }
};

export const SingleProduct = async (id) => {
  try {
    const response = await api.get(`/api/product/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data.error || "Error fetching product");
  }
};

export const SerchProduct = async (SearchItem) => {
  try {
    const response = await api.get(
      `/api/product?search=${SearchItem}&page=1&limit=10`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data.error);
    throw new Error(
      err.response?.data.error || "Error fetching search results"
    );
  }
};

export const SerchProductByFilter = async (FilterData) => {
  try {
    const response = await api.get(`/api/product`, { params: FilterData });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data.error);
    throw new Error(
      err.response?.data.error || "Error fetching search results"
    );
  }
};

export const getLaptopParts = async (FilterData) => {
  try {
    // const response = await api.get(`api/laptopProduct/getAll`, {
    const response = await api.get(`api/laptoppart/`, {
      params: FilterData,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data.error);
    throw new Error(
      err.response?.data.error || "Error fetching search results"
    );
  }
};

export const GetSearchData = async (FilterData) => {
  try {
    const response = await api.post(`api/product/search/`, FilterData);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data.error);
    throw new Error(
      err.response?.data.error || "Error fetching search results"
    );
  }
};
