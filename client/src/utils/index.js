import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:8080";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }) => {
  try {
    const response = await API(url, {
      method: method,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response
  } catch (error) {
    const err = error.response;
    if (err) {
      toast.warn(err.data.message);
      throw new Error(err.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
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

export const getPosts = async (token, uri, data) => {
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

export const getUserPosts = async (token, uri) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "GET",
    });
    return res;
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
    console.log(res)
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

export const deletePost = async (token, uri) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "DELETE",
    });
    return res.data;
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
    return res.data;
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

export const bookmarkedPosts = async (uri, token) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "GET",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const likedPosts = async (uri, token) => {
  try {
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "GET",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// get all users 
export const fetchUsers = async (uri) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: "GET"
    })
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}

// add friends
export const addFriend = async (uri, token) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: 'PUT',
      token: token
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

// unfollow friend
export const unFollowFriend = async (uri, token) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: 'PUT',
      token: token
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

// remove friend
export const removeFriend = async (uri, token) => {
  try {
    const res = await apiRequest({
      url: uri,
      method: 'PUT',
      token: token
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

// get all notification
export const getNotifications = async (uri) => {
  try {
    await apiRequest({
      url: uri,
      method: 'GET',
    })
  } catch (error) {
    console.log(error)
  }
}