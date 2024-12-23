import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slice/sliderSlice";
import productsSlice from "../features/slice/productsSlice";
import cartReducer from "../features/slice/cartSlice";



export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsSlice,
    cart: cartReducer,
  },
});