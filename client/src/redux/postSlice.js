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
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload)
    },
    setLikedPosts: (state, action) => {
      state.likedPosts = action.payload;
    },
    updateLikedPosts: (state, action) => {
      const updatedPost = action.payload;
      state.likedPosts = state.likedPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
    },
    setBookmarkedPosts: (state, action) => {
      state.bookmarkedPosts = action.payload;
    },
    updateBookmarkedPosts: (state, action) => {
      const updatedPost = action.payload;
      state.bookmarkedPosts = state.bookmarkedPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
    },
    setPost: (state, action) => {
      const updatedPost = action.payload;
      state.posts = state.posts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
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
  updateLikedPosts,
  updateBookmarkedPosts,
  addPost
} = postSlice.actions;
export const selectEditData = (state) => state.posts.editPostData;
export default postSlice.reducer;
