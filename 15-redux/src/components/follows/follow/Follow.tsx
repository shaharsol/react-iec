import type User from '../../../models/User'
import './Follow.css'
import profilePic from '../../../assets/profile-pic.webp'
import followingService from '../../../services/following'
import { useState } from 'react'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { follow, unfollow } from '../../../redux/following-slice'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { user: { id, name } } = props

    const [ isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const amIFollowing = useAppSelector(store => store.followingSlice.following.findIndex(f => f.id === id) > -1)
    const dispatch = useAppDispatcher()

    async function unfollowMe() {
        try {
            setIsSubmitting(true)
            await followingService.unfollow(id)
            dispatch(unfollow({id}))
            
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
        
    }

    async function followMe() {
        try {
            setIsSubmitting(true)
            await followingService.follow(id)

            dispatch(follow(props.user))
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
            {amIFollowing && <SpinnerButton
                buttonText='unfollow'
                spinnerText='unfollowing'
                isSubmitting={isSubmitting} 
                onClick={unfollowMe}
            />}
            {!amIFollowing && <SpinnerButton
                buttonText='follow'
                spinnerText='following'
                isSubmitting={isSubmitting} 
                onClick={followMe}
            />}
        </div>
    )
}