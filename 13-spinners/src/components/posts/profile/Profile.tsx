import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Spinner from '../../common/spinner/Spiner'

export default function Profile () {

    useEffect(() => {
        document.title = 'profile'
    }, [])
    

    const [ posts, setPosts ] = useState<PostModel[]>([])
    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                const postsFromServer = await profileService.getProfile()
                setIsLoaded(true)
                setPosts(postsFromServer)
            } catch (e) {
                alert(e)
            }
        })()
        // profileService.getProfile().then(setPosts).catch()        
    }, []);

    function removePost(id: string) {
        setPosts(posts.filter(post => post.id !== id))
    }

    function newPost(post: PostModel){
        setPosts([post, ...posts])
    }

    return (
        <div className='Profile'>


            {!isLoaded && <Spinner />}

            {isLoaded && <>
                <NewPost 
                newPost={newPost}
                />

                {posts.map(post => <Post 
                    post={post} 
                    isEditAllowed={true}
                    key={post.id}
                    removePost={removePost}
                />)}
            </>}
        </div>
    )
}