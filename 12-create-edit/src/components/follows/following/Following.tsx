import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'

function Following() {

    const [following, setFollowing] = useState<User[]>([])

    function unfollow(id: string) {
        setFollowing(following.filter(f => f.id !== id))
    }


    useEffect(() => {
        (async() => {
            try {
                const followingFromServer = await followingService.getFollowing()
                setFollowing(followingFromServer)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])
    
    return (
        <div className='Following'>
            <h5>following</h5>
            {following.map(user => <Follow 
                key={user.id} 
                user={user}
                isUnfollow={true}
                unfollow={unfollow}
            />)}
        </div>
    )
}

export default Following