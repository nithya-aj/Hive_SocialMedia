import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: {},
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const { postId, comment } = action.payload;
            if (!state.comments[postId]) {
                state.comments[postId] = [];
            }
            state.comments[postId].unshift(comment);
        },
        getComments: (state, action) => {
            const { postId, comments } = action.payload;
            state.comments[postId] = comments;
        },
    },
});

export const { addComment, getComments } = commentSlice.actions
export const selectComments = (state) => state.comments.comments
export default commentSlice.reducer 