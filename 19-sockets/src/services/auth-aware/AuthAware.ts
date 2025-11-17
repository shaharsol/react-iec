import type { AxiosInstance } from "axios"
import axios from "axios"

export default abstract class AuthAware {
    axiosInstance: AxiosInstance
    constructor(public jwt: string) {
        this.axiosInstance = axios.create({
            headers: {
                Authorization: `Bearer ${this.jwt}`
            }
        })
    }
}