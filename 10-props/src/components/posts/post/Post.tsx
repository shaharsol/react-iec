import type PostModel from '../../../models/Post'
import './Post.css'

interface PostProps {
    post: PostModel
}
export default function Post(props: PostProps) {

    const { title, createdAt, body } = props.post

    return (
        <div className='Post'>
            <h3>{title}</h3>
            <h6>{createdAt}</h6>
            <div>{body}</div>
        </div>
    )
}