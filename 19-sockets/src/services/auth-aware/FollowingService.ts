import axios from "axios";
import type User from "../../models/User";
import AuthAware from "./AuthAware";

export default class FollowingService extends AuthAware{
    async getFollowing(): Promise<User[]> {
        const result = await this.axiosInstance(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return result.data
    }

    async unfollow(id: string): Promise<boolean> {
        await this.axiosInstance.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${id}`)
        return true
    }

    async follow(id: string): Promise<boolean> {
        await this.axiosInstance.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${id}`)
        return true
    }

}