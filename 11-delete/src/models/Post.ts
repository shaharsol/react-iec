import type PostComment from "./Comment"
import type User from "./User"

export default interface Post {
    id: string
    userId: string
    title: string
    body: string
    imageUrl: string
    createdAt: string
    updatedAt: string
    user: User
    comments: PostComment[]
}