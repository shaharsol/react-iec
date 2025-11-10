import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type User from "../models/User";

// what is the data that is saved in this slice?
interface FollowingState {
    following: User[]
}

// create initial state object
const initialState: FollowingState = {
    following: []
}

export const followingSlice = createSlice({
    name: 'following',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.following = action.payload
        },
        unfollow: (state, action: PayloadAction<{id: string}>) => {
            state.following = state.following.filter(f => f.id !== action.payload.id)
        },
        follow: (state, action: PayloadAction<User>) => {
            state.following.push(action.payload)
        }
    }
})

export const { init, unfollow, follow } = followingSlice.actions

export default followingSlice.reducer

