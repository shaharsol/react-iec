import { useEffect, useState } from 'react'
import './Followers.css'
import type User from '../../../models/User'
import Follow from '../follow/Follow'
import followersService from '../../../services/followers'

export default function Followers() {

    const [ followers, setFollowers ] = useState<User[]>([])

    useEffect(() => {
        (async() => {
            try {
                const followersFromServer = await followersService.getFollowers()
                setFollowers(followersFromServer)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    return (
        <div className='Followers'>
            {followers.map(follower => <Follow user={follower}/>)}
        </div>
    )
}