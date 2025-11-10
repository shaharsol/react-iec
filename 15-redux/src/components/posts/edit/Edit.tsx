import { useNavigate, useParams } from 'react-router-dom'
import './Edit.css'
import { useEffect } from 'react'
import profileService from '../../../services/profile'
import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/PostDraft'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useAppDispatcher } from '../../../redux/hooks'
import { editPost } from '../../../redux/profile-slice'

export default function Edit() {

    const { id } = useParams<'id'>()
    
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    useEffect(() => {
        (async() => {
            try {
                const post = await profileService.getPost(id!)
                const { title, body } = post
                reset({ title, body })
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    const navigate = useNavigate()

    const dispatch = useAppDispatcher()

    async function updatePost(draft: PostDraft) {
        console.log(draft)
        try {
            const updatedPost = await profileService.updatePost(id!, draft)
            alert(`post ${id} updated`)
            dispatch(editPost(updatedPost))
            navigate('/profile')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='Edit'>
            
            <form onSubmit={handleSubmit(updatePost)}>
                <input placeholder="title" {...register('title', {
                    required: {
                        value: true,
                        message: 'title is mandatory field'
                    },
                    minLength: {
                        value: 10,
                        message: 'in this social network post title is 10 chars at least'
                    }
                })}/>
                <div className='form-error'>{formState.errors.title?.message}</div>
                <textarea placeholder="body" {...register('body', {
                    required: {
                        value: true,
                        message: 'body is mandatory field'
                    },
                    minLength: {
                        value: 20,
                        message: 'in this social network post content is 20 chars at least'
                    }
                })}></textarea>
                <div className='form-error'>{formState.errors.body  ?.message}</div>
                {/* <button>Update Post</button> */}
                <SpinnerButton
                    buttonText="Update Post"
                    spinnerText="updating post..."
                    isSubmitting={formState.isSubmitting} 
                />
            </form>

        </div>
    )
}