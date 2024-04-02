import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import URL from "../../utilis/api/baseUrl";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async (token, { rejectWithValue }) => {
    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await inst.get("products");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "", // Add errorMessage to store error message
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        console.log("Api call start");
        state.isLoading = true;
        state.isError = false; // Reset isError on pending
        state.errorMessage = ""; // Reset errorMessage on pending
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log("Api call successs", action.payload);
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false; // Reset isError on fulfilled
        state.errorMessage = ""; // Reset errorMessage on fulfilled
        console.log("Data from api", state.data);
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        console.log("Api call failed", action.payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Unknown error"; // Set errorMessage from payload or default
      });
  },
});

export default productSlice.reducer;
