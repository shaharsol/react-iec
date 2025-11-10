import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Post from "../models/Post";
import type PostComment from "../models/Comment";

// what is the data that is saved in this slice?
interface ProfileState {
    posts: Post[]
}

// create initial state object
const initialState: ProfileState = {
    posts: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        newComment: (state, action: PayloadAction<PostComment>) => {
            const relevantPost = state.posts.find(p => p.id === action.payload.postId)
            if(relevantPost) {
                relevantPost.comments.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<{id: string}>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id)
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
        },
        editPost: (state, action: PayloadAction<Post>) => {
            const idx = state.posts.findIndex(p => p.id === action.payload.id)
            if(idx > -1) state.posts[idx] = action.payload
        }
    }
})

export const { init, newComment, remove, newPost, editPost } = profileSlice.actions

export default profileSlice.reducer

