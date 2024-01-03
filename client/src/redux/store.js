import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import themeSlice from "./themeSlice";
import postSlice from "./postSlice";
import commentSlice from "./commentSlice";
import userSlice from "./userSlice";

const persistConfig = {
    key: "auth",
    version: 1,
    storage,
};

const reducers = combineReducers({
    auth: authSlice,
    theme: themeSlice,
    posts: postSlice,
    comments: commentSlice,
    users: userSlice 
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);