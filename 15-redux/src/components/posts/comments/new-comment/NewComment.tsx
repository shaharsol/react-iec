import { useForm } from 'react-hook-form'
import './NewComment.css'
import type CommentDraft from '../../../../models/CommentDraft'
import SpinnerButton from '../../../common/spinner-button/SpinnerButton'
import commentsService from '../../../../services/comments'
import { useAppDispatcher } from '../../../../redux/hooks'
import { newComment as newCommentAction } from '../../../../redux/profile-slice'

interface NewCommentProps {
    postId: string
}
export default function NewComment(props: NewCommentProps) {

    const dispatch = useAppDispatcher()

    const { postId } = props

    const { register, reset, formState, handleSubmit } = useForm<CommentDraft>()

    async function addComment(draft: CommentDraft) {
        try {
            const comment = await commentsService.createComment(postId, draft)
            reset()
            dispatch(newCommentAction(comment))
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(addComment)}>
                <textarea placeholder="enter your comment" {...register('body')}></textarea>
                <SpinnerButton
                    buttonText='Add comment'
                    spinnerText='adding comment'
                    isSubmitting={formState.isSubmitting} 
                />
            </form>
        </div>
    )
}