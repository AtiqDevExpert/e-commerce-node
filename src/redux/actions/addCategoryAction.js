import axios from "axios";
import {
  ADD_NEW_CATEGORY_DATA,
  ADD_NEW_CATEGORY_DATA_SUCCESS,
  ADD_NEW_CATEGORY_DATA_FAILED,
} from "./action_types";
import URL from "../../utilis/api/baseUrl";

const addProductRequest = () => {
  return {
    type: ADD_NEW_CATEGORY_DATA,
  };
};
const addProductSuccess = (data) => {
  return {
    type: ADD_NEW_CATEGORY_DATA_SUCCESS,
    payload: data,
  };
};

const addProductFailure = (error) => {
  return {
    type: ADD_NEW_CATEGORY_DATA_FAILED,
    payload: error,
  };
};

export const addCategoryData = (body) => {
  return async (dispatch) => {
    dispatch(addProductRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          // "Content-Type": "application/json",
        },
      });
      const response = await inst.post("/categories/createcategory", body);
      dispatch(addProductSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(addProductFailure(error.message));
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Invalide Error!");
      }
    }
  };
};
