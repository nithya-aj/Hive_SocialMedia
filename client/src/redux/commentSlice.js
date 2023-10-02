import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: []
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload)
        },
        getComments: (state, action) => {
            state.comments = action.payload
        }
    }
})

export const { addComment, getComments } = commentSlice.actions
export default commentSlice.reducer