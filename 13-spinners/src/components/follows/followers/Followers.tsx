import { useEffect, useState } from 'react'
import './Followers.css'
import type User from '../../../models/User'
import Follow from '../follow/Follow'
import followersService from '../../../services/followers'
import Spinner from '../../common/spinner/Spiner'

export default function Followers() {

    const [ followers, setFollowers ] = useState<User[]>([])
    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    useEffect(() => {
        (async() => {
            try {
                const followersFromServer = await followersService.getFollowers()
                setIsLoaded(true)
                setFollowers(followersFromServer)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    return (
        <div className='Followers'>
            {!isLoaded && <Spinner />}

            {isLoaded && <>
                {followers.map(follower => <Follow key={follower.id} user={follower}/>)}
            </>}
        </div>
    )
}