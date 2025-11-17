import axios from "axios"
import type PostComment from "../models/Comment"
import type CommentDraft from "../models/CommentDraft"

class CommentsService {
    async createComment(postId: string, draft: CommentDraft): Promise<PostComment> {
        const { data } = await axios.post<PostComment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft)
        return data
    }
}

const commentsService = new CommentsService()
export default commentsService