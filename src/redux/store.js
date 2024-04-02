import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import userReducer from "./slices/user";
import addNewProduct from "./slices/addProduct";
import productsCategories from "./slices/categories";
import cartSlice from "./slices/cart";
export const store = configureStore({
  reducer: {
    product: productReducer,
    loginUser: userReducer,
    addNewProduct: addNewProduct,
    cart: cartSlice,
    productsCategories: productsCategories,
  },
});
