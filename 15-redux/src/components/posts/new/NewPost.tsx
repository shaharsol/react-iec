import { useForm } from 'react-hook-form'
import './NewPost.css'
import type PostDraft from '../../../models/PostDraft'
import profileService from '../../../services/profile'
import { useAppDispatcher } from '../../../redux/hooks'
import { newPost } from '../../../redux/profile-slice'


export default function NewPost() {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const dispatch = useAppDispatcher()

    async function createPost(draft: PostDraft) {
        console.log(draft)
        try {
            const post = await profileService.createPost(draft)
            reset()
            dispatch(newPost(post))
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(createPost)}>
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
                <button>Publish Post</button>
            </form>
        </div>
    )
}