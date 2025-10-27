import { useEffect, useState } from 'react'
import './Feed.css'
import type PostModel from '../../../models/Post'
import feedService from '../../../services/feed'
import Post from '../post/Post'

export default function Feed () {

    const [ feed, setFeed ] = useState<PostModel[]>([])

    useEffect(() => {
        (async () => {
            const feedFromServer = await feedService.getFeed()
            setFeed(feedFromServer)
        })()
    }, [])

    return (
        <div className='Feed'>
            {feed.map(post => <Post post={post} />)}
        </div>
    )
}