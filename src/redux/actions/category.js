import axios from "axios";
import {
  FETCHING_ALL_CATEGORIES_DATA,
  FETCHING_ALL_CATEGORIES_DATA_FAILED,
  FETCHING_ALL_CATEGORIES_DATA_SUCCESS,
} from "./action_types";
import URL from "../../utilis/api/baseUrl";

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

export const fetchProductCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoryRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          //   Authorization: `Bearer ${token}`,
        },
      });
      const response = await inst.get("/categories");
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
