import axios from "axios"
import type Post from "../models/Post"

class ProfileService {
    async getProfile(): Promise<Post[]> {
        const result = await axios<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/profile`)
        return result.data
    }
}

export default new ProfileService()

