import type User from "../../models/User";
import AuthAware from "./AuthAware";

export default class FollowersService extends AuthAware{
    async getFollowers(): Promise<User[]> {
        const result = await this.axiosInstance(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`)
        return result.data
    }
}

