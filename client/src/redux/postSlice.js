import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    editPostData: null
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.unshift(action.payload)
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        editPost: (state, action) => {
            const updatedPost = action.payload.post;
            const postIndex = state.posts.findIndex((post) => post._id === updatedPost._id);
            if (postIndex !== -1) {
                state.posts[postIndex] = updatedPost;
            }
        },
        hidePost: (state, action) => {
            const { postId, hidden } = action.payload;
            const postIndex = state.posts.findIndex((post) => post._id === postId);
            if (postIndex !== -1) {
                state.posts[postIndex].hidden = hidden;
            }
        },
        setEditPostData: (state, action) => {
            state.editPostData = action.payload
        },
        clearEditPostData: (state) => {
            state.editPostData = null
        }
    }
})

export const { addPost, setPosts, editPost, setEditPostData,
    clearEditPostData, hidePost } = postSlice.actions
export const selectPosts = (state) => state.posts.posts
export const selectEditPostData = (state) => state.posts.editPostData;
export default postSlice.reducer