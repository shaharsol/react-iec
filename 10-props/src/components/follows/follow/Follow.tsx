import type User from '../../../models/User'
import './Follow.css'
import profilePic from '../../../assets/profile-pic.webp'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { name } = props.user

    return (
        <div className='Follow'>
            <img src={profilePic} />
            <p>{name}</p>
        </div>
    )
}