import type CommentDraft from "./CommentDraft"
import type User from "./User"

export default interface PostComment extends CommentDraft{
    id: string
    postId: string
    userId: string
    createdAt: string
    updatedAt: string
    user: User
} 