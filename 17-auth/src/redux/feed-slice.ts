import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Post from "../models/Post";

// what is the data that is saved in this slice?
interface FeedState {
    feed: Post[],
    isNewContnet: boolean
}

// create initial state object
const initialState: FeedState = {
    feed: [],
    isNewContnet: false
}

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.feed = action.payload
            state.isNewContnet = false
        },
        setNewContent: (state, action: PayloadAction<boolean>) => {
            state.isNewContnet = action.payload
        }
    }
})

export const { init, setNewContent } = feedSlice.actions

export default feedSlice.reducer

