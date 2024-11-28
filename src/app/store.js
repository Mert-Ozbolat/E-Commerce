import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slice/sliderSlice";
import { productsSlice } from "../features/slice/productsSlice";



export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsSlice,
  },
});