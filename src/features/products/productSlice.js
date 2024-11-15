import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

//fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:5000/production");
    console.log(res.data);
    return res.data; // Ensure you return the data if it's needed
  }
);

//delete products
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const res = await axios.delete(`http://localhost:5000/production/${id}`);
    console.log(res.data);
    return id; // Ensure you return the data if it's needed
  }
);

//create products
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    const res = await axios.post("http://localhost:5000/production", product);
    return res.data;
  }
);

//update products
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }) => {
    const res = await axios.put(
      `http://localhost:5000/production/${id}`,
      product
    );
    console.log(res.data);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  },
});

export default productSlice.reducer;
