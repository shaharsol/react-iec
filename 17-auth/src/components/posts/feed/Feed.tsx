import { useEffect, useState } from 'react'
import './Feed.css'
import type PostModel from '../../../models/Post'
import feedService from '../../../services/feed'
import Post from '../post/Post'
import Spinner from '../../common/spinner/Spiner'
import setTitle from '../../../util'
import type PostComment from '../../../models/Comment'
import { useAppDispatcher, useAppSelector } from '../../../redux/hooks'
import { init, setNewContent } from '../../../redux/feed-slice'

export default function Feed () {
    setTitle('feed')

    // const [ feed, setFeed ] = useState<PostModel[]>([])
    const feed = useAppSelector(store => store.feedSlice.feed)
    const dispatch = useAppDispatcher()

    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    // const [ isNewContent, setIsNewContent ] = useState<boolean>(true)
    const isNewContent = useAppSelector(store => store.feedSlice.isNewContnet)



    useEffect(() => {
        (async () => {
            if(feed.length === 0) {
                const feedFromServer = await feedService.getFeed()
                setIsLoaded(true)
                dispatch(init(feedFromServer))
            }
        })()
    }, [feed.length])

    async function reload() {
        try {
            const feedFromServer = await feedService.getFeed()
            setIsLoaded(true)
            dispatch(init(feedFromServer))

        } catch (e) {
            alert(e)
        }
    }

    function dismiss() {
        dispatch(setNewContent(false))
    }


    return (
        <div className='Feed'>
            {feed.length === 0 && <Spinner />}

            {!(feed.length === 0) && <>

                {isNewContent && <div className="info">
                    you have new updates would you like to refresh? <button onClick={reload}>yes</button><button onClick={dismiss}>no</button>
                </div>}
                

                {feed.map(post => <Post 
                    key={post.id} 
                    post={post} 
                />)}
            </>}
        </div>
    )
}