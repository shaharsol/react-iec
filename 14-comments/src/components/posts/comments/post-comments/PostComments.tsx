import type PostCommentModel from '../../../../models/Comment'
import PostComment from '../comment/PostComment'
import NewComment from '../new-comment/NewComment'
import './PostComments.css'


interface PostCommentsProps {
    postId: string
    newComment(draft: PostCommentModel): void
    comments: PostCommentModel[]
}
export default function PostComments(props: PostCommentsProps) {

    const { postId, newComment, comments } = props

    return (
        <div className='PostComments'>
            <NewComment
                postId={postId}
                newComment={newComment} 
            />

            {comments.map(comment => <PostComment
                key={comment.id}
                comment={comment}
            />)}
        </div>
    )
}