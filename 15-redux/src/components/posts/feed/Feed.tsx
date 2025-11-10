import { useEffect, useState } from 'react'
import './Feed.css'
import type PostModel from '../../../models/Post'
import feedService from '../../../services/feed'
import Post from '../post/Post'
import Spinner from '../../common/spinner/Spiner'
import setTitle from '../../../util'
import type PostComment from '../../../models/Comment'

export default function Feed () {
    setTitle('feed')

    const [ feed, setFeed ] = useState<PostModel[]>([])
    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            const feedFromServer = await feedService.getFeed()
            setIsLoaded(true)
            setFeed(feedFromServer)
        })()
    }, [])

    function newComment(comment: PostComment) {
        const newPosts = [...feed]
        const relevantPost = newPosts.find(p => p.id === comment.postId)
        if(relevantPost) {
            relevantPost.comments.push(comment)
        }
        setFeed(newPosts)
    }

    return (
        <div className='Feed'>
            {!isLoaded && <Spinner />}

            {isLoaded && <>

                {feed.map(post => <Post 
                    key={post.id} 
                    post={post} 
                    newComment={newComment}
                />)}
            </>}
        </div>
    )
}