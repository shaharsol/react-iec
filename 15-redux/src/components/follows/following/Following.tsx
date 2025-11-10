import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spiner'

function Following() {

    const [following, setFollowing] = useState<User[]>([])
    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    function unfollow(id: string) {
        setFollowing(following.filter(f => f.id !== id))
    }


    useEffect(() => {
        (async() => {
            try {
                const followingFromServer = await followingService.getFollowing()
                setIsLoaded(true)
                setFollowing(followingFromServer)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])
    
    return (
        <div className='Following'>

            {!isLoaded && <Spinner />}

            {isLoaded && <>
                {following.map(user => <Follow 
                    key={user.id} 
                    user={user}
                    isUnfollow={true}
                    unfollow={unfollow}
                />)}
            </>}

        </div>
    )
}

export default Following