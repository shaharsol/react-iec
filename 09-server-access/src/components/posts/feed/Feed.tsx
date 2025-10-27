import { useEffect, useState } from 'react'
import './Feed.css'
import type Post from '../../../models/Post'
import feedService from '../../../services/feed'

export default function Feed () {

    const [ feed, setFeed ] = useState<Post[]>([])

    useEffect(() => {
        (async () => {
            const feedFromServer = await feedService.getFeed()
            setFeed(feedFromServer)
        })()
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {feed.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}