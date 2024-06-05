import React, {useRef, useState} from 'react';
import {StoryModal} from "../../components/index.js";
import {stories} from "../../utils/tempData.js";
import Story from "../../components/Story/index.jsx";

const Main = () => {
    const [isStoryModalActive, setIsStoryModalActive] = useState(false)
    const [selectedStory, setSelectedStory] = useState(null)
    const storyRefs = useRef({})

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
            <div>

            </div>
        </div>
    );
};

export default Main;