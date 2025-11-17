import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spiner'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init, unfollow as unfollowAction } from '../../../redux/following-slice'
import useService from '../../../hooks/use-service'
import FollowingService from '../../../services/auth-aware/FollowingService'

function Following() {

    const followingService = useService(FollowingService)
    // const [ following, setFollowing ] = useState<User[]>([])
    const following = useAppSelector(store => store.followingSlice.following)
    const dispatch = useAppDispatcher()


    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    useEffect(() => {
        (async() => {
            try {
                if(following.length === 0) {
                    const followingFromServer = await followingService.getFollowing()
                    setIsLoaded(true)
                    dispatch(init(followingFromServer))
                }
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
                />)}
            </>}

        </div>
    )
}

export default Following