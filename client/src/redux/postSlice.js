// Updated postSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  likedPosts: [],
  bookmarkedPosts: [],
  editPostData: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sharePost: (state, action) => {
      const newPost = action.payload;
      state.posts.unshift(newPost);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setLikedPosts: (state, action) => {
      state.likedPosts = action.payload;
    },
    setBookmarkedPosts: (state, action) => {
      state.bookmarkedPosts = action.payload;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setEditData: (state, action) => {
      state.editPostData = action.payload;
    },
    clearEditData: (state) => {
      state.editPostData = null;
    },
  },
});

export const {
  setPosts,
  setEditData,
  clearEditData,
  setPost,
  setLikedPosts,
  setBookmarkedPosts,
  sharePost,
} = postSlice.actions;
export const selectEditData = (state) => state.posts.editPostData;
export default postSlice.reducer;
