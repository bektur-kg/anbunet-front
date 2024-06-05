import React, {useRef, useState, useEffect} from 'react';
import {stories} from "../../utils/tempData.js";
import Story from "../../components/Story/index.jsx";
import {requests} from "../../api/requests.js";
import {Loader, Post, StoryModal} from "../../components";


const Main = () => {
    const [isStoryModalActive, setIsStoryModalActive] = useState(false)
    const [selectedStory, setSelectedStory] = useState(null)
    const storyRefs = useRef({})
    
    const [posts, setPosts] = useState()
    const [page, setPage] = useState(2)
    const userId = 1

    useEffect(() => {
        requests.getUserFollowedPosts(userId)
            .then(res => setPosts(res.data))
    }, [])

    const scrollToStory = (storyId) => {
        setTimeout(function () {
            storyRefs.current[storyId].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        }, 0);
    }

    const handleStoryClick = (story) => {
        setSelectedStory(story)
        setIsStoryModalActive(true)
        scrollToStory(story.id)
    }

    if (!posts) return <Loader/>
    return (
        <div className={"px-20 py-24"}>
            <StoryModal
                isActive={isStoryModalActive}
                stories={stories}
                storyRefs={storyRefs}
                setIsActive={setIsStoryModalActive}
            />
            <div className={"overflow-x-auto grid grid-flow-col custom-scrollbar pb-4"}>
                {
                    stories.map(i => (
                        <Story
                            key={i.id}
                            profilePicture={i.user.profilePicture}
                            id={i.id}
                            onClick={() => handleStoryClick(i)}
                        />
                    ))
                }
            </div>
            <hr className={"border-emerald-300 my-10"}/>
            <div className={"px-20 py-24 w-1/2 mx-auto"}>
            {
                posts?.map(p => (
                    <Post
                        key={p.id}
                        id={p.id}
                        mediaUrl={p.mediaUrl}
                        description={p.description}
                        comments={p.comments}
                        createdDate={p.createdDate}
                        likes={p.likes}
                        user={p.user}
                    />
                ))
            }
            </div>
            </div>
        
    );
};

export default Main;