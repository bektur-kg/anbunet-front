import React, {useEffect, useState} from 'react'
import {requests} from "../../api/requests.js"
import {Loader, Post} from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"
import {useGetCurrentUser} from "../../hooks/index.js";

const Interesting = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const currentUser = useGetCurrentUser()
    const [hasMorePosts, setHasMorePosts] = useState(true)
    const PAGE_SIZE = 10


    const fetchInterestingPosts = (currentPage) => {
        requests.getInterestingPosts(currentPage, PAGE_SIZE)
            .then(res => setPosts(() => {
                if (res.data.length === 0) setHasMorePosts(false)
                return posts.concat(res.data)
            }))
    }

    const fetchMoreInterestingPosts = () => {
        setPage(prevPage => {
            const nextPage = prevPage + 1
            fetchInterestingPosts(nextPage)
            return nextPage
        })
    }

    useEffect(() => {
        fetchInterestingPosts(page)
    }, [])


    if (!posts.length) return <Loader/>
    return (
        <InfiniteScroll
            className={"py-24"}
            dataLength={posts.length}
            hasMore={hasMorePosts}
            loader={<Loader className={"h-auto"}/>}
            next={() => fetchMoreInterestingPosts()}
        >
            {
                posts.map(p => (
                    <Post
                        currentUserId={currentUser.id}
                        key={p.id}
                        id={p.id}
                        mediaUrl={p.mediaUrl}
                        description={p.description}
                        createdDate={p.createdDate}
                        likes={p.likes}
                        user={p.user}
                    />
                ))
            }
        </InfiniteScroll>
    )
}

export default Interesting