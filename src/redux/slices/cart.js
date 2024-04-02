import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        // If item already exists in cart, increase quantity
        existingItem.quantity++;
      } else {
        // If item does not exist in cart, add it
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    clearCart(state) {
      // Clear all items from the cart
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
