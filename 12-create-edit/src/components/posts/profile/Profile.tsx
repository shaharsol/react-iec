import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'

export default function Profile () {

    const [ posts, setPosts ] = useState<PostModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const postsFromServer = await profileService.getProfile()
                console.log('setting posts')
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
            <NewPost 
                newPost={newPost}
            />

            {posts.map(post => <Post 
                post={post} 
                isEditAllowed={true}
                key={post.id}
                removePost={removePost}
            />)}
        </div>
    )
}