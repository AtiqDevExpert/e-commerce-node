import axios from "axios";
import {
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_FAILED,
  FETCHING_USER_DATA_SUCCESS,
} from "./action_types";
import URL from "../../utilis/api/baseUrl";

const fetchDataRequest = () => {
  console.log("running 1");

  return {
    type: FETCHING_USER_DATA,
  };
};
const fetchDataSuccess = (data) => {
  return {
    type: FETCHING_USER_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCHING_USER_DATA_FAILED,
    payload: error,
  };
};

export const fetchUserData = (body) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          // "Content-Type": "application/json",
        },
      });
      const response = await inst.post("users/login", body);
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
