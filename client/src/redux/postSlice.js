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
    setLikedPosts: (state, action) => {
      state.likedPosts = action.payload || [];
    },
    updateLikedPosts: (state, action) => {
      const postId = action.payload;
      state.likedPosts = state.likedPosts.filter((post) => post._id !== postId);
    },
    setBookmarkedPosts: (state, action) => {
      state.bookmarkedPosts = action.payload;
    },
    updateBookmarkedPosts: (state, action) => {
      const postId = action.payload;
      state.bookmarkedPosts = state.bookmarkedPosts.filter(
        (post) => post._id !== postId
      );
    },
    setPost: (state, action) => {
      const { post } = action.payload;
      state.posts = state.posts.map((p) => (p._id === post._id ? post : p));
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
} = postSlice.actions;
export const selectEditData = (state) => state.posts.editPostData;
export default postSlice.reducer;
