import type Post from "../../models/Post";
import AuthAware from "./AuthAware";

export default class FeedService extends AuthAware{
    async getFeed(): Promise<Post[]> {
        const result = await this.axiosInstance(`${import.meta.env.VITE_REST_SERVER_URL}/feed`)
        return result.data
    }
}

