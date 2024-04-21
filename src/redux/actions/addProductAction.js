import axios from "axios";
import {
  ADD_NEW_PRODUCT_DATA,
  ADD_NEW_PRODUCTS_DATA_SUCCESS,
  ADD_NEW_PRODUCTS_DATA_FAILED,
} from "./action_types";
import URL from "../../utilis/api/baseUrl";

const fetchDataRequest = () => {
  return {
    type: ADD_NEW_PRODUCT_DATA,
  };
};
const fetchDataSuccess = (data) => {
  return {
    type: ADD_NEW_PRODUCTS_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: ADD_NEW_PRODUCTS_DATA_FAILED,
    payload: error,
  };
};

export const fetchProductsData = (body) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          // "Content-Type": "application/json",
        },
      });
      const response = await inst.post("/products/createproduct", body);
      dispatch(fetchDataSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Invalide Error!");
      }
    }
  };
};
