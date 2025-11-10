import { configureStore } from "@reduxjs/toolkit";
import followingSlice from "./following-slice";
import feedSlice from "./feed-slice";
import profileSlice from "./profile-slice";

const store = configureStore({
    reducer: {
        followingSlice,
        feedSlice,
        profileSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch