import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  hiddenPosts: [],
  editPostData: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setHiddenPosts: (state, action) => {
      state.hiddenPosts = action.payload;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }
        return post;
      });
      state.posts = updatedPosts;
    },
    setHiddenPost: (state, action) => {
      const updatedPosts = state.hiddenPosts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }
        return post;
      });
      state.hiddenPosts = updatedPosts;
    },
    setEditData: (state, action) => {
      state.editPostData = action.payload;
    },
    clearEditData: (state) => {
      state.editPostData = null;
    },
  },
});

export const { setPosts, setEditData, clearEditData, setPost, setHiddenPosts, setHiddenPost } =
  postSlice.actions;
export const selectEditData = (state) => state.posts.editPostData;
export default postSlice.reducer;
