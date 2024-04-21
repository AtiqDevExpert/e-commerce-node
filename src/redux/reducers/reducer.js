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
} from "../actions/action_types";
const appState = {
  userData: "",
  allProducts: [],
  allCategories: [],
  isNewProductAdded: "",
  cartItems: [],
};
const initialState = {
  data: appState,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ADD_TO_CART:
      return {
        ...state,
        data: {
          ...state.data,
          cartItems: [...state.data.cartItems, action.payload],
        },
      };
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
    case UPDATE_CART:
      return {
        ...state,
        data: {
          ...state.data,
          cartItems: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
