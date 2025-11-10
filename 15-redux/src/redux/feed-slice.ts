import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Post from "../models/Post";

// what is the data that is saved in this slice?
interface FeedState {
    feed: Post[]
}

// create initial state object
const initialState: FeedState = {
    feed: []
}

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.feed = action.payload
        },
    }
})

export const { init } = feedSlice.actions

export default feedSlice.reducer

