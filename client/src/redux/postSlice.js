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
      state.likedPosts = action.payload;
    },
    setBookmarkedPosts: (state, action) => {
      state.bookmarkedPosts = action.payload;
    },
    setPost: (state, action) => {
      const updatedPost = action.payload;
      console.log(updatedPost, "updatedPost from postSlice");
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
} = postSlice.actions;
export const selectEditData = (state) => state.posts.editPostData;
export default postSlice.reducer;
