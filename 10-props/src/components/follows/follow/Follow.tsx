import type User from '../../../models/User'
import './Follow.css'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps) {

    const { name, username } = props.user

    return (
        <div className='Follow'>
            <p>{name}</p>
            <p>{username}</p>
        </div>
    )
}