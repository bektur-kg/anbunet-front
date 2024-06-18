import React, {useRef, useState, useEffect} from 'react'
import Story from "../../components/Story/index.jsx"
import {requests} from "../../api/requests.js"
import {Loader, Post, StoryModal} from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"
import {useGetCurrentUser} from "../../hooks/index.js"

const Main = () => {
    const [isStoryModalActive, setIsStoryModalActive] = useState(false)
    const storyRefs = useRef({})
    const [posts, setPosts] = useState([])
    const [stories, setStories] = useState([])
    const [page, setPage] = useState(1)
    const [hasMorePosts, setHasMorePosts] = useState(true)
    const currentUser = useGetCurrentUser()
    const PAGE_SIZE = 10

    const fetchInterestingPosts = (currentPage) => {
        requests.getUserFollowedPosts(currentPage, PAGE_SIZE)
            .then(res => setPosts(() => {
                if (res.data.length === 0) setHasMorePosts(false)
                return posts.concat(res.data)
            }))
    }

    const fetchMoreFollowingPosts = () => {
        setPage(prevPage => {
            const nextPage = prevPage + 1
            fetchInterestingPosts(nextPage)
            return nextPage
        })
    }

    useEffect(() => {
        fetchInterestingPosts(page)

        requests.getFollowingStories()
            .then(res => setStories(res.data))
    }, [])

    const scrollToStory = (storyId) => {
        setTimeout(function () {
            storyRefs.current[storyId].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            })
        }, 0)
    }

    const handleStoryClick = (story) => {
        setIsStoryModalActive(true)
        scrollToStory(story.id)
    }

    console.log(posts)

    if (!posts || !stories) return <Loader/>
    return (
        <div className={"px-20 py-24"}>
            <StoryModal
                isActive={isStoryModalActive}
                stories={stories}
                storyRefs={storyRefs}
                setIsActive={setIsStoryModalActive}
            />
            <div className={"overflow-x-auto grid grid-flow-col custom-scrollbar pb-4 auto-cols-min"}>
                {
                    stories.map(i => (
                        <Story
                            key={i.id}
                            profilePicture={i.profilePicture}
                            login={i.login}
                            id={i.id}
                            onClick={() => handleStoryClick(i)}
                        />
                    ))
                }
            </div>
            <hr className={"border-emerald-300 mt-5"}/>
            <InfiniteScroll
                className={"py-24"}
                dataLength={posts.length}
                hasMore={hasMorePosts}
                loader={<Loader className={"h-auto"}/>}
                next={() => fetchMoreFollowingPosts()}
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
        </div>
    )
}

export default Main