import type PostModel from '../../../models/Post'
import './Post.css'

interface PostProps {
    post: PostModel
}
export default function Post(props: PostProps) {

    const { title, createdAt, body, user: { name }, comments } = props.post

    return (
        <div className='Post'>
            <h3>{title}</h3>
            <h6>by {name} at {(new Date(createdAt)).toLocaleDateString()}</h6>
            <p>comments: {comments.length}</p>
            <div>{body}</div>
        </div>
    )
}