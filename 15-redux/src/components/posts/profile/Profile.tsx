import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Spinner from '../../common/spinner/Spiner'
import setTitle from '../../../util'
import type PostComment from '../../../models/Comment'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/profile-slice'

export default function Profile () {

    // useEffect(() => {
    //     document.title = 'profile'
    // }, [])
    setTitle('profile')    

    // const [ posts, setPosts ] = useState<PostModel[]>([])
    const posts = useAppSelector(store => store.profileSlice.posts)
    const dispatch = useAppDispatcher()

    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                if(posts.length === 0) {
                    const postsFromServer = await profileService.getProfile()
                    dispatch(init(postsFromServer))
                    setIsLoaded(true)
                }
            } catch (e) {
                alert(e)
            }
        })()
        // profileService.getProfile().then(setPosts).catch()        
    }, []);

    return (
        <div className='Profile'>


            {posts.length === 0 && <Spinner />}

            {posts.length !== 0 && <>
                <NewPost />

                {posts.map(post => <Post 
                    post={post} 
                    isEditAllowed={true}
                    key={post.id}
                />)}
            </>}
        </div>
    )
}