import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import URL from "../../utilis/api/baseUrl";
import axios from "axios";

export const fetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async (token, { rejectWithValue }) => {
    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          //   Authorization: `Bearer ${token}`,
        },
      });
      const response = await inst.get("/products/allcategories");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsCategories = createSlice({
  name: "productsCategories",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "", // Add errorMessage to store error message
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state, action) => {
        console.log("Api call start");
        state.isLoading = true;
        state.isError = false; // Reset isError on pending
        state.errorMessage = ""; // Reset errorMessage on pending
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        console.log("Api call successs", action.payload);
        state.isLoading = false;

        state.data = action.payload;
        state.isError = false; // Reset isError on fulfilled
        state.errorMessage = ""; // Reset errorMessage on fulfilled
        console.log("Data from api", state.data);
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        console.log("Api call failed", action.payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Unknown error"; // Set errorMessage from payload or default
      });
  },
});

export default productsCategories.reducer;
