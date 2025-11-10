import type User from '../../../models/User'
import './Follow.css'
import profilePic from '../../../assets/profile-pic.webp'
import followingService from '../../../services/following'
import { useState } from 'react'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'

interface FollowProps {
    user: User
    isUnfollow?: boolean
    unfollow?(id: string): void
}
export default function Follow(props: FollowProps) {

    const { unfollow, isUnfollow, user: { id, name } } = props

    const [ isSubmitting, setIsSubmitting] = useState<boolean>(false)

    async function unfollowMe() {
        try {
            setIsSubmitting(true)
            await followingService.unfollow(id)

            unfollow!(id)
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
        
    }

    return (
        <div className='Follow'>
            <img src={profilePic} />
            <p>{name}</p>
            {/* {isUnfollow && !isSubmitting && <button onClick={unfollowMe}>unfollow</button>}
            {isUnfollow && isSubmitting && <span>loading...<i><img src={spinner} /></i></span>} */}
            {isUnfollow && <SpinnerButton
                buttonText='unfollow'
                spinnerText='unfollowing'
                isSubmitting={isSubmitting} 
                onClick={unfollowMe}
            />}
        </div>
    )
}