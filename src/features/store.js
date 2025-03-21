import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import ProductsSlice from "./slices/ProductSlice";
const store = configureStore({
  reducer: {
    cartData: cartSlice,
    wishlist: wishlistSlice,
    Products: ProductsSlice,
  },
});

export default store;
