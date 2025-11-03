import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'

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

    return (
        <div className='Profile'>
            {posts.map(post => <Post 
                post={post} 
                isEditAllowed={true}
            />)}
        </div>
    )
}