import type User from '../../../models/User'
import './Follow.css'
import profilePic from '../../../assets/profile-pic.webp'
import followingService from '../../../services/following'

interface FollowProps {
    user: User
    isUnfollow?: boolean
    unfollow?(id: string): void
}
export default function Follow(props: FollowProps) {

    const { unfollow, isUnfollow, user: { id, name } } = props

    async function unfollowMe() {
        try {
            await followingService.unfollow(id)
            unfollow!(id)
        } catch (e) {
            alert(e)
        }
        
    }

    return (
        <div className='Follow'>
            <img src={profilePic} />
            <p>{name}</p>
            {isUnfollow && <button onClick={unfollowMe}>unfollow</button>}
        </div>
    )
}