// import axios from 'axios';

// const api = axios.create({
//     baseURL: "http://localhost:8080",
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export default api;


import axios from "axios";
import { setPost, setPosts } from "redux/postSlice";

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
        return response?.data;
    } catch (error) {
        const err = error.response.data;
        console.log(err);
        return { status: err.success, message: err.message };
    }
};

export const handleFileUpload = async (uploadFile) => {
    let formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "hiveSocialMedia");
    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/images/upload/`,
            formData
        );
        return response.data.secure_url
    } catch (error) {
        console.log(error)
    }
};

export const register = async (uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            method: 'POST',
            data: data || {}
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const login = async (uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            method: 'POST',
            data: data || {}
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const fetchTimeLinePost = async (token, dispatch, uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            data: data || {},
            method: "GET"
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (token, dispatch, uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            data: data || {},
            method: "POST"
        })
        dispatch(setPosts(res.data));
        return;
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = async (token, uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            data: data || {},
            method: "PUT",
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const createComment = async (token, uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            data: data || {},
            method: "POST"
        });
        return res
    } catch (error) {
        console.log(error)
    }
}

export const fetchComment = async (uri, data) => {
    try {
        await apiRequest({
            url: uri,
            data: data || {},
            method: 'GET'
        })
        return
    } catch (error) {
        console.log(error)
    }
}

export const likePost = async (token, uri) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            method: "PUT"
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const bookmarkPost = async (token, uri) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            method: "PUT"
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const hidePost = async (token, uri) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            method: "PUT",
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const editPost = async (token, dispatch, uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            token: token,
            method: 'POST',
            data: data,
        })
        dispatch(setPost({ post: res.data }));
    } catch (error) {
        console.log(error)
    }
}

export const getUserDetails = async (uri, data) => {
    try {
        const res = await apiRequest({
            url: uri,
            method: 'GET',
            data: data || {},
        })
        return res
    } catch (error) {
        console.log(error)
    }
}