import type PostCommentModel from '../../../../models/Comment'
import PostComment from '../comment/PostComment'
import NewComment from '../new-comment/NewComment'
import './PostComments.css'


interface PostCommentsProps {
    postId: string
    comments: PostCommentModel[]
}
export default function PostComments(props: PostCommentsProps) {

    const { postId, comments } = props

    return (
        <div className='PostComments'>
            <NewComment
                postId={postId}
            />

            {comments.map(comment => <PostComment
                key={comment.id}
                comment={comment}
            />)}
        </div>
    )
}