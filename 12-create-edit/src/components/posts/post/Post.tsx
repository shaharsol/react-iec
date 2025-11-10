import { useNavigate } from 'react-router-dom'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import './Post.css'

interface PostProps {
    post: PostModel
    isEditAllowed?: boolean
    removePost?(id: string): void
}
export default function Post(props: PostProps) {

    const { id, title, createdAt, body, user: { name }, comments } = props.post
    const { isEditAllowed, removePost } = props

    async function deleteMe() {
        try {
            await profileService.remove(id)
            removePost!(id)
        } catch (e) {
            alert(e)
        }
    }

    const navigate = useNavigate()

    function editMe() {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='Post'>
            <h3>{title}</h3>
            <h6>by {name} at {(new Date(createdAt)).toLocaleDateString()}</h6>
            <p>comments: {comments.length}</p>
            <div>{body}</div>
            <div>
                {/* {isEditAllowed ? <button>Delete</button> : <></>} */}
                {isEditAllowed && <>
                    <button onClick={deleteMe}>Delete</button>
                    <button onClick={editMe}>Edit</button>
                </>}
                
            </div>
        </div>
    )
}