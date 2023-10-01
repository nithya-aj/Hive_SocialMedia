import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { addPost, setPosts } = postSlice.actions
export const selectPosts = (state) => state.posts.posts
export default postSlice.reducer