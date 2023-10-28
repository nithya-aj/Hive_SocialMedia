import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: {},
};

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action) => {
            const { postId, comments } = action.payload;
            state.comments[postId] = comments;
        },
        setComment: (state, action) => {
            const { postId, comment: updatedComment } = action.payload;
            state.comments[postId] = state.comments[postId].map((comment) =>
                comment._id === updatedComment._id ? updatedComment : comment
            );
        },
    },
});

export const { setComments, setComment } = commentSlice.actions;
export default commentSlice.reducer;
