import type Post from "../../models/Post"
import type PostDraft from "../../models/PostDraft"
import AuthAware from "./AuthAware"

export default class ProfileService extends AuthAware{

    async getProfile(): Promise<Post[]> {

        const result = await this.axiosInstance<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return result.data
    }

    async getPost(id: string): Promise<Post> {
        
        const result = await this.axiosInstance.get<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return result.data
    }

    async remove(id: string): Promise<boolean> {
        
        await this.axiosInstance.delete(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return true
    }

    async createPost(draft: PostDraft): Promise<Post> {
        const { data } = await this.axiosInstance.post<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`, draft)
        return data
    }

    async updatePost(id: string, draft: PostDraft): Promise<Post> {
        const { data } = await this.axiosInstance.patch<Post>(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`, draft)
        return data
    }
}
