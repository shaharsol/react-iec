import axios from "axios";
import type User from "../models/User";

class FollowersService {
    async getFollowers(): Promise<User[]> {
        const result = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`)
        return result.data
    }
}

const followersService = new FollowersService()
export default followersService
