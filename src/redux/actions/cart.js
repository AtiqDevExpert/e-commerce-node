import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  EMPTY_CART,
} from "./action_types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { cartItems } = getState().data;

    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            productInvoiceQuantity: item.productInvoiceQuantity + 1,
          };
        }
        return item;
      });

      dispatch({
        type: UPDATE_CART,
        payload: updatedCartItems,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: { ...product, productInvoiceQuantity: 1 },
      });
    }
  };
};

export const removeFromCart = (product) => {
  return (dispatch, getState) => {
    const { cartItems } = getState().data;

    // Find the index of the product in the cartItems array
    const index = cartItems.findIndex((item) => item._id === product._id);

    if (index !== -1) {
      const updatedCartItems = [...cartItems];

      // If the quantity of the item is greater than 1, decrement the quantity
      if (updatedCartItems[index].productInvoiceQuantity > 1) {
        updatedCartItems[index].productInvoiceQuantity -= 1;
      } else {
        updatedCartItems.splice(index, 1);
      }

      dispatch({
        type: UPDATE_CART,
        payload: updatedCartItems,
      });
    }
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
