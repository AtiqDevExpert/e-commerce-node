import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import URL from "../../utilis/api/baseUrl";
import axios from "axios";

export const addNewProduct = createAsyncThunk("addNewProduct", async (body) => {
  try {
    const inst = axios.create({
      baseURL: URL,
      headers: {
        // "Content-Type": "application/json",
      },
    });
    const response = await inst.post("/products/createproduct", body);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
});
const addProductSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "", // Add errorMessage to store error message
  },
  extraReducers: (builder) => {
    builder

      .addCase(addNewProduct.pending, (state) => {
        console.log("Api call start");
        state.isLoading = true;
        state.isError = false; // Reset isError on pending
        state.errorMessage = ""; // Reset errorMessage on pending
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        console.log("Api call successs", action.payload);
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false; // Reset isError on fulfilled
        state.errorMessage = ""; // Reset errorMessage on fulfilled
        console.log("Data from api", state.data);
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        console.log("Api call failed", action.payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Unknown error"; // Set errorMessage from payload or default
      });
  },
});

export default addProductSlice.reducer;
