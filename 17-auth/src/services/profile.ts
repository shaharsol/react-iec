import axios from "axios"
import type Post from "../models/Post"
import type PostDraft from "../models/PostDraft"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const result = await axios<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return result.data
    }

    async getPost(id: string): Promise<Post> {
        const result = await axios.get<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return result.data
    }

    async remove(id: string): Promise<boolean> {
        await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return true
    }

    async createPost(draft: PostDraft): Promise<Post> {
        const { data } = await axios.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`, draft)
        return data
    }

    async updatePost(id: string, draft: PostDraft): Promise<Post> {
        const { data } = await axios.patch<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, draft)
        return data
    }
}

const profileService = new ProfileService()
export default profileService
