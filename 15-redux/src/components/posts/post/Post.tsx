import { useNavigate } from 'react-router-dom'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import './Post.css'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useState } from 'react'
import PostComments from '../comments/post-comments/PostComments'
import { useAppDispatcher } from '../../../redux/hooks'
import { remove } from '../../../redux/profile-slice'

interface PostProps {
    post: PostModel
    isEditAllowed?: boolean
}
export default function Post(props: PostProps) {

    const { id, title, createdAt, body, user: { name }, comments } = props.post
    const { isEditAllowed } = props

    const [isDeleting, setIsDeleting] = useState<boolean>(false)

    const dispatch = useAppDispatcher()

    async function deleteMe() {
        try {
            setIsDeleting(true)
            await profileService.remove(id)
            dispatch(remove({id}))
        } catch (e) {
            alert(e)
        } finally {
            setIsDeleting(false)
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
            <div>{body}</div>
            <div>
                {/* {isEditAllowed ? <button>Delete</button> : <></>} */}
                {isEditAllowed && <>
                    {/* <button onClick={deleteMe}>Delete</button> */}
                    <SpinnerButton
                        buttonText='Delete'
                        spinnerText="deleting"
                        isSubmitting={isDeleting}
                        onClick={deleteMe}
                    />
                    <button onClick={editMe}>Edit</button>
                </>}
                
            </div>
            <PostComments 
                postId={id}
                comments={comments}
            />
        </div>
    )
}