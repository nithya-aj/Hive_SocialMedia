import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;


// import axios from "axios";
// import { SetPosts } from "redux/postSlice";

// const API_URL = "http://localhost:8080";

// export const API = axios.create({
//     baseURL: API_URL,
//     responseType: "json",
// });

// export const apiRequest = async ({ url, token, data, method }) => {
//     try {
//         const result = await API(url, {
//             method: method || "GET",
//             data: data,
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: token ? `Bearer ${token}` : "",
//             },
//         });
//         return result?.data;
//     } catch (error) {
//         const err = error.response.data;
//         console.log(err);
//         return { status: err.success, message: err.message };
//     }
// };

// export const handleFileUpload = async (uploadFile) => {
//     let formData = new FormData();
//     formData.append("file", uploadFile);
//     formData.append("upload_preset", "hiveSocialMedia");
//     try {
//         const response = await axios.post(
//             `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/images/upload/`,
//             formData
//         );
//         return response.data.secure_url
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const fetchPosts = async (token, dispatch, uri, data) => {
//     try {
//         const res = await apiRequest({
//             url: uri || `/posts`,
//             token: token,
//             method: "POST",
//             data: data || {}
//         })
//         dispatch(SetPosts(res?.data))
//         return
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const likePost = async ({ uri, token }) => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//     }
// }