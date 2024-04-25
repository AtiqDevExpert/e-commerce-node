import axios from "axios";
import {
  CREATE_NEW_INVOICE_DATA,
  CREATE_NEW_INVOICE_DATA_SUCCESS,
  CREATE_NEW_INVOICE_DATA_FAILED,
  UPDATE_INVOICE_PRODUCTS_DATA,
  UPDATE_INVOICE_PRODUCTS_DATA_SUCCESS,
  UPDATE_INVOICE_PRODUCTS_DATA_FAILED,
} from "./action_types";
import URL from "../../utilis/api/baseUrl";

const addNewInvoiceRequest = () => {
  return {
    type: CREATE_NEW_INVOICE_DATA,
  };
};
const addNewInvoiceSuccess = (data) => {
  return {
    type: CREATE_NEW_INVOICE_DATA_SUCCESS,
    payload: data,
  };
};

const addNewInvoiceFailure = (error) => {
  return {
    type: CREATE_NEW_INVOICE_DATA_FAILED,
    payload: error,
  };
};
const updateInvoiceProductsRequest = () => {
  return {
    type: UPDATE_INVOICE_PRODUCTS_DATA,
  };
};
const updateInvoiceProductsSuccess = (data) => {
  return {
    type: UPDATE_INVOICE_PRODUCTS_DATA_SUCCESS,
    payload: data,
  };
};

const updateInvoiceProductsFailure = (error) => {
  return {
    type: UPDATE_INVOICE_PRODUCTS_DATA_FAILED,
    payload: error,
  };
};

export const createInvoiceData = (body) => {
  return async (dispatch) => {
    dispatch(addNewInvoiceRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          // "Content-Type": "application/json",
        },
      });
      const response = await inst.post("/invoices/createinvoice", body);
      dispatch(addNewInvoiceSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(addNewInvoiceFailure(error.message));
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Invalide Error!");
      }
    }
  };
};
export const updateInvoiceProductsData = (body) => {
  return async (dispatch) => {
    dispatch(updateInvoiceProductsRequest());

    try {
      const inst = axios.create({
        baseURL: URL,
        headers: {
          //   Authorization: `Bearer ${token}`,
        },
      });
      const response = await inst.patch(
        "/products/updateinvoiceproducts",
        body
      );
      dispatch(updateInvoiceProductsSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(updateInvoiceProductsFailure(error.message));
      if (error.response) {
        console.log("post error", error.response);
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Invalide Error!");
      }
    }
  };
};
