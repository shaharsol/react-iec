import { useEffect, useState } from 'react'
import './Feed.css'
import type PostModel from '../../../models/Post'
import feedService from '../../../services/feed'
import Post from '../post/Post'
import Spinner from '../../common/spinner/Spiner'
import setTitle from '../../../util'
import type PostComment from '../../../models/Comment'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/feed-slice'

export default function Feed () {
    setTitle('feed')

    // const [ feed, setFeed ] = useState<PostModel[]>([])
    const feed = useAppSelector(store => store.feedSlice.feed)
    const dispatch = useAppDispatcher()

    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            if(feed.length === 0) {
                const feedFromServer = await feedService.getFeed()
                setIsLoaded(true)
                dispatch(init(feedFromServer))
            }
        })()
    }, [feed.length])

    return (
        <div className='Feed'>
            {feed.length === 0 && <Spinner />}

            {!(feed.length === 0) && <>

                {feed.map(post => <Post 
                    key={post.id} 
                    post={post} 
                />)}
            </>}
        </div>
    )
}