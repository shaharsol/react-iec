import { useEffect, useState } from 'react'
import './Followers.css'
import Follow from '../follow/Follow'
import followersService from '../../../services/followers'
import Spinner from '../../common/spinner/Spiner'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followers-slice'

export default function Followers() {

    // const [ followers, setFollowers ] = useState<User[]>([])
    const followers = useAppSelector(store => store.followersSlice.followers)
    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    const dispatch = useAppDispatcher()

    useEffect(() => {
        (async() => {
            try {
                if(followers.length === 0){
                    const followersFromServer = await followersService.getFollowers()
                    setIsLoaded(true)
                    dispatch(init(followersFromServer))
                }
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