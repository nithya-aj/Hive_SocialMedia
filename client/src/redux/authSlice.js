import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        setRegister: (state, action) => {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
            localStorage.clear()
        }
    },
});

export const { setMode, setLogin, setRegister, setLogout } = authSlice.actions;
export default authSlice.reducer; 