import axios from "axios";
import {
  FETCHING_ALL_PRODUCTS_DATA,
  FETCHING_ALL_PRODUCTS_DATA_FAILED,
  FETCHING_ALL_PRODUCTS_DATA_SUCCESS,
  FETCHING_ALL_CATEGORIES_DATA,
  FETCHING_ALL_CATEGORIES_DATA_FAILED,
  FETCHING_ALL_CATEGORIES_DATA_SUCCESS,
} from "./action_types";
import URL from "../../utilis/api/baseUrl";

const fetchDataRequest = () => {
  return {
    type: FETCHING_ALL_PRODUCTS_DATA,
  };
};
const fetchDataSuccess = (data) => {
  return {
    type: FETCHING_ALL_PRODUCTS_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCHING_ALL_PRODUCTS_DATA_FAILED,
    payload: error,
  };
};
const fetchCategoryRequest = () => {
  return {
    type: FETCHING_ALL_CATEGORIES_DATA,
  };
};
const fetchCategorySuccess = (data) => {
  return {
    type: FETCHING_ALL_CATEGORIES_DATA_SUCCESS,
    payload: data,
  };
};

const fetchCategoryFailure = (error) => {
  return {
    type: FETCHING_ALL_CATEGORIES_DATA_FAILED,
    payload: error,
  };
};

export const fetchProductsData = (token) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await inst.get("products");
      dispatch(fetchDataSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
      if (error.response) {
        console.log("post error", error.response);
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Invalide Error!");
      }
    }
  };
};
export const fetchProductsCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoryRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          //   Authorization: `Bearer ${token}`,
        },
      });
      const response = await inst.get("/products/allcategories");
      dispatch(fetchCategorySuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(fetchCategoryFailure(error.message));
      if (error.response) {
        console.log("post error", error.response);
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Invalide Error!");
      }
    }
  };
};
