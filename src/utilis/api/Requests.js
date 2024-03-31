import Url from "./baseUrl";
import axios from "axios";
export const SignUp_Request = async (body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        // "Content-Type": "application/json",
      },
    });
    const response = await inst.post("users/signup", body);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};
export const Login_Request = async (body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        // "Content-Type": "application/json",
      },
    });
    const response = await inst.post("users/login", body);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};
export const Delete_Account_Request = async (data) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        // "Content-Type": "application/json",
      },
    });
    const response = await inst.delete("oauth/delete", data);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};

export const Get_All_Products = async (token) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get("products");

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("post error", error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalide Error!");
    }
  }
};

export const verify_Otp = async (id, body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    const response = await inst.post(`users/verifyotp/${id}`, body);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error("Invalid Error!");
    }
  }
};
export const resend_Otp = async (id) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    const response = await inst.get(`users/resendotp/${id}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error("Invalid Error!");
    }
  }
};
