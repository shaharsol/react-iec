import type PostCommentModel from '../../../../models/Comment'
import './PostComment.css'

interface PostCommentProps {
    comment: PostCommentModel
}
export default function PostComment(props: PostCommentProps) {

    const { user: {name}, createdAt, body} = props.comment

    return (
        <div className='PostComment'>
            <h6>by {name} on {(new Date(createdAt)).toLocaleDateString()}</h6>
            <div>{body}</div>
        </div>
    )
}