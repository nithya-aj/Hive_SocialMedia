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
        },
        likePost: (state, action) => {
            const { postId } = action.payload
            const postIndex = state.posts.findIndex(post => post.id === postId)
            if (postIndex !== -1) {
                const post = state.posts[postIndex]
                const likedIndex = post.likes.indexOf(postId)
                if (likedIndex !== -1) {
                    post.likes.splice(likedIndex, 1)
                } else {
                    post.likes.push(postId)
                }
            }
        }
    }
})

export const { addPost, setPosts } = postSlice.actions
export const selectPosts = (state) => state.posts.posts
export default postSlice.reducer