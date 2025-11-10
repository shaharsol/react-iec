import { configureStore } from "@reduxjs/toolkit";
import followingSlice from "./following-slice";

const store = configureStore({
    reducer: {
        followingSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch