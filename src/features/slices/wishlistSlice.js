import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addWishList: (state, action) => {
      const itemExists = state.find((item) => item._id === action.payload._id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { _id } = action.payload;
      return state.filter((item) => item._id !== _id);
    },
    clearWishlist: (state) => {},
  },
});

export const { addWishList, removeItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
