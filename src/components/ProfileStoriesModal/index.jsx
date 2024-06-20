import React, {useEffect, useLayoutEffect, useState} from 'react'
import {requests} from "../../api/requests.js"
import cn from "classnames"
import {Loader, StoryCard} from "../index.js"
import {lockWindowScrollInModal} from "../../helpers/index.js"
import ProfileStoryCard from "../ProfileStoryCard/index.jsx"

const ProfileStoriesModal = (
    {
        userId,
        isActive,
        setIsActive
    }) => {
    const [userStories, setUserStories] = useState(null)

    lockWindowScrollInModal(isActive)
    useEffect(() => {
        requests.getUserStories(userId).then(res => setUserStories(res.data))
    }, [userId])

    if (!userStories) return (
        <div
            className={cn("bg-purple-extra-dark/60 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}
        >
            <div className={"bg-white p-10 rounded flex justify-center items-center w-full h-full"}>
                <div
                    className={"overflow-x-auto grid grid-flow-col h-full gap-20 custom-scrollbar items-center whitespace-nowrap snap-x snap-mandatory"}
                >
                    <Loader/>
                </div>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-white text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    )
    return (
        <div
            className={cn("bg-purple-extra-dark/60 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex justify-center items-center w-full h-full"}>
                <div
                    className={"overflow-x-auto grid grid-flow-col h-full gap-20 custom-scrollbar items-center whitespace-nowrap snap-x snap-mandatory"}
                >
                    <ProfileStoryCard storiesList={userStories}/>
                </div>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-white text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    )
}

export default ProfileStoriesModal