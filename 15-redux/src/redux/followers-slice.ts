import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type User from "../models/User";

// what is the data that is saved in this slice?
interface FollowersState {
    followers: User[]
}

// create initial state object
const initialState: FollowersState = {
    followers: []
}

const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload
        },
        unfollow: (state, action: PayloadAction<{id: string}>) => {
            state.followers = state.followers.filter(f => f.id !== action.payload.id)
        },
        follow: (state, action: PayloadAction<User>) => {
            state.followers.push(action.payload)
        }
    }
})

export const { init, unfollow, follow } = followersSlice.actions

export default followersSlice.reducer

