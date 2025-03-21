import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {
    SearchProdcuts: (state, action) => (state = action.payload),
  },
});

export const { SearchProdcuts } = ProductSlice.actions;

export default ProductSlice.reducer;
