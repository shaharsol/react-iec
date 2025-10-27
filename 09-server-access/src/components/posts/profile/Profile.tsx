import { useEffect, useState } from 'react'
import './Profile.css'
import type Post from '../../../models/Post'
import profileService from '../../../services/profile'

export default function Profile () {

    const [ posts, setPosts ] = useState<Post[]>([])

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
            <ul>
                {posts.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}