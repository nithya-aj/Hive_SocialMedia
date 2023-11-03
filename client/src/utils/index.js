import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method, mode }) => {
  try {
    const response = await API(url, {
      method: method,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response?.data;
  } catch (error) {
    const err = error.response.data;
    console.log(err.msg);
    toast(`${err.msg}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode === "light" ? "light" : "dark",
    });
    return { status: err.success, message: err.message };
  }
};

export const handleFileUpload = async (uri, data, token) => {
  try {
    const res = await apiRequest({
      token: token,
      url: uri,
      method: "POST",
      data: data || {},
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: "POST",
      data: data || {},
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: "POST",
      data: data || {},
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTimeLinePost = async (token, uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      data: data || {},
      method: "GET",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (token, uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      data: data || {},
      method: "POST",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (token, uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      data: data || {},
      method: "PUT",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async (token, uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      data: data || {},
      method: "POST",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchComment = async (uri, data) => {
  try {
    await apiRequest({
      url: uri,
      data: data || {},
      method: "GET",
    });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (token, uri) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "PUT",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const bookmarkPost = async (token, uri) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "PUT",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const hidePost = async (token, uri) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "PUT",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const editPost = async (token, uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "POST",
      data: data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (uri, data) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: "GET",
      data: data || {},
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
