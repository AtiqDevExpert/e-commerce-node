import {
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_FAILED,
  FETCHING_USER_DATA_SUCCESS,
  FETCHING_ALL_PRODUCTS_DATA,
  FETCHING_ALL_PRODUCTS_DATA_FAILED,
  FETCHING_ALL_PRODUCTS_DATA_SUCCESS,
  FETCHING_ALL_CATEGORIES_DATA,
  FETCHING_ALL_CATEGORIES_DATA_FAILED,
  FETCHING_ALL_CATEGORIES_DATA_SUCCESS,
  ADD_NEW_PRODUCT_DATA,
  ADD_NEW_PRODUCTS_DATA_SUCCESS,
  ADD_NEW_PRODUCTS_DATA_FAILED,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  CREATE_NEW_INVOICE_DATA,
  CREATE_NEW_INVOICE_DATA_SUCCESS,
  CREATE_NEW_INVOICE_DATA_FAILED,
  UPDATE_INVOICE_PRODUCTS_DATA,
  UPDATE_INVOICE_PRODUCTS_DATA_SUCCESS,
  UPDATE_INVOICE_PRODUCTS_DATA_FAILED,
  EMPTY_CART,
} from "../actions/action_types";
const appState = {
  userData: "",
  allProducts: [],
  allCategories: [],
  isNewProductAdded: false,
  cartItems: [],
  isNewInvoiceCreated: false,
  isInvoiceProductsUpdated: false,
};
const initialState = {
  data: appState,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // login the user and save the state
    case FETCHING_USER_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCHING_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          userData: action.payload, // Update userData with action payload
        },
      };
    case FETCHING_USER_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // get all products api
    case FETCHING_ALL_PRODUCTS_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCHING_ALL_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          allProducts: action.payload, // Update userData with action payload
        },
      };
    case FETCHING_ALL_PRODUCTS_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // get all  Categories api
    case FETCHING_ALL_CATEGORIES_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCHING_ALL_CATEGORIES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          allCategories: action.payload, // Update userData with action payload
        },
      };
    case FETCHING_ALL_CATEGORIES_DATA_FAILED:
    // add new product by api
    case ADD_NEW_PRODUCT_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ADD_NEW_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          isNewProductAdded: action.payload,
        },
      };
    case ADD_NEW_PRODUCTS_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // add cart items
    case ADD_TO_CART:
      return {
        ...state,
        data: {
          ...state.data,
          cartItems: [...state.data.cartItems, action.payload],
        },
      };
    // remove cart items
    case REMOVE_FROM_CART:
      return {
        ...state,
        data: {
          ...state.data,
          cartItems: state.data.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    // update cart items
    case UPDATE_CART:
      return {
        ...state,
        data: {
          ...state.data,
          cartItems: action.payload,
        },
      };
    // create new invoice product backend
    case CREATE_NEW_INVOICE_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CREATE_NEW_INVOICE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          isNewInvoiceCreated: action.payload,
        },
      };
    case CREATE_NEW_INVOICE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // Update the invoice product backend
    case UPDATE_INVOICE_PRODUCTS_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPDATE_INVOICE_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          isNewInvoiceCreated: action.payload,
        },
      };
    case UPDATE_INVOICE_PRODUCTS_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // Set cartItems array to an empty array
    case EMPTY_CART:
      return {
        data: {
          ...state.data,
          cartItems: [],
        },
      };
    default:
      return state;
  }
};

export default reducer;
