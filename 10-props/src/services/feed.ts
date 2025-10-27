import axios from "axios";
import type Post from "../models/Post";

class FeedService {
    async getFeed(): Promise<Post[]> {
        const result = await axios(`${import.meta.env.VITE_REST_SERVER_URL}/feed`)
        return result.data
    }
}

export default new FeedService()