import axios from "axios"
import type Post from "../models/Post"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const result = await axios<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return result.data
    }

    async remove(id: string): Promise<boolean> {
        await axios.delete(`${import.meta.env.VITE_REST_SERVER_URL}/profile/${id}`)
        return true
    }
}

const profileService = new ProfileService()
export default profileService
