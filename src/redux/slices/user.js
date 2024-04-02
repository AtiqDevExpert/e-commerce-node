import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import URL from "../../utilis/api/baseUrl";
import axios from "axios";

export const loginUser = createAsyncThunk("loginUser", async (body) => {
  try {
    const inst = axios.create({
      baseURL: URL,
      headers: {
        // "Content-Type": "application/json",
      },
    });
    const response = await inst.post("users/login", body);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "", // Add errorMessage to store error message
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false; // Reset isError on pending
        state.errorMessage = ""; // Reset errorMessage on pending
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false; // Reset isError on fulfilled
        state.errorMessage = ""; // Reset errorMessage on fulfilled
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("Api call failed", action.payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "Unknown error"; // Set errorMessage from payload or default
      });
  },
});

export default userSlice.reducer;
