import axios from "axios";
import type User from "../models/User";

class FollowingService {
    async getFollowing(): Promise<User[]> {
        const result = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return result.data
    }
}

export default new FollowingService()