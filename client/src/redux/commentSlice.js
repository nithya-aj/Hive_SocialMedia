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
            state.comments[postId].push(comment);
        },
        getComments: (state, action) => {
            const { postId, comments } = action.payload;
            const sortedComments = comments.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            state.comments[postId] = sortedComments;
        },
    },
});

export const { addComment, getComments } = commentSlice.actions
export const selectComments = (state) => state.comments.comments
export default commentSlice.reducer 