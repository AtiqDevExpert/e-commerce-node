// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./slices/product";
// import userReducer from "./slices/user";
// import addNewProduct from "./slices/addProduct";
// import productsCategories from "./slices/categories";
// import cartSlice from "./slices/cart";
// export const store = configureStore({
//   reducer: {
//     product: productReducer,
//     loginUser: userReducer,
//     addNewProduct: addNewProduct,
//     cart: cartSlice,
//     productsCategories: productsCategories,
//   },
// });

// store.js
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer"; // Assuming you have your rootReducer

const store = createStore(reducer, applyMiddleware(thunk, logger)); // Add logger middleware if needed

export default store;
