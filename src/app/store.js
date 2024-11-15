import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    // Define your slice reducers here
    productsR: productReducer,
  },
});
