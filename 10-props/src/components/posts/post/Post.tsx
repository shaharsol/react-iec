import type PostModel from '../../../models/Post'
import './Post.css'

interface PostProps {
    post: PostModel
    isEditAllowed?: boolean
}
export default function Post(props: PostProps) {

    const { title, createdAt, body, user: { name }, comments } = props.post
    const { isEditAllowed } = props

    return (
        <div className='Post'>
            <h3>{title}</h3>
            <h6>by {name} at {(new Date(createdAt)).toLocaleDateString()}</h6>
            <p>comments: {comments.length}</p>
            <div>{body}</div>
            <div>
                {/* {isEditAllowed ? <button>Delete</button> : <></>} */}
                {isEditAllowed && <button>Delete</button>}
                
            </div>
        </div>
    )
}