import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
};

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action) => {
            const { postId, comments } = action.payload;
            return {
                comments: {
                    ...state.comments,
                    [postId]: comments,
                }
            }
        }
    },
});

export const { setComments } = commentSlice.actions;
export default commentSlice.reducer;
