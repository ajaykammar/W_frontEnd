import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item._id === action.payload._id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remCart: (state, action) => {
      const { _id } = action.payload;
      return state.filter((item) => item._id !== _id);
    },
    incCart: (state, action) => {
      const { _id } = action.payload;
      const item = state.find((product) => product._id === _id);
      if (item) {
        item.quantity += 1;
      }
    },
    decCart: (state, action) => {
      const { _id } = action.payload;
      const item = state.find((product) => product._id === _id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    emptyCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, remCart, incCart, decCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
