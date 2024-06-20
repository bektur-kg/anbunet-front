import React, {useEffect, useRef} from 'react'
import {StoryCard} from "../index.js"
import cn from 'classnames'
import {lockWindowScrollInModal} from "../../helpers/index.js"

const StoryModal = (
    {
        isActive,
        setIsActive,
        storyRefs,
        stories
    }) => {

    useEffect(() => {
        lockWindowScrollInModal(isActive)
    }, [isActive])

    return (
        <div className={cn("bg-purple-extra-dark/70 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex justify-center items-center w-full h-full"}>
                <div className={"overflow-x-auto grid grid-flow-col h-full gap-20 custom-scrollbar items-center whitespace-nowrap snap-x snap-mandatory"}>
                    {
                        stories.map(i => (
                            <StoryCard
                                storyRefs={storyRefs}
                                key={i.id}
                                id={i.id}
                                userId={i.id}
                                userLogin={i.login}
                                userProfilePicture={i.profilePicture}
                                mediaUrlList={i.stories}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-purple-100 text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    )
}

export default StoryModal