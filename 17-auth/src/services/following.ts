import axios from "axios";
import type User from "../models/User";

class FollowingService {
    async getFollowing(): Promise<User[]> {
        const result = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return result.data
    }

    async unfollow(id: string): Promise<boolean> {
        await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${id}`)
        return true
    }

    async follow(id: string): Promise<boolean> {
        await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${id}`)
        return true
    }

}

export default new FollowingService()