import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import followingService from '../../../services/following'

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
            <ul>
                {following.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Following