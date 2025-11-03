import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'

function Following() {

    const [following, setFollowing] = useState<User[]>([])

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
            {following.map(user => <Follow user={user}/>)}
        </div>
    )
}

export default Following