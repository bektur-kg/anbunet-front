import React, {useRef} from 'react';
import {StoryCard} from "../index.js";
import cn from 'classnames'

const StoryModal = (
    {
        isActive,
        setIsActive,
        storyRefs,
        stories
    }) => {


    return (
        <div className={cn("bg-emerald-950/60 top-0 left-0 p-20 w-full h-full absolute transition-all", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex justify-center items-center w-full h-full"}>
                <div className={"overflow-x-auto grid grid-flow-col h-full gap-20 custom-scrollbar items-center whitespace-nowrap"}>
                    {
                        stories.map(i => (
                            <StoryCard
                                storyRefs={storyRefs}
                                key={i.id}
                                id={i.id}
                                user={i.user}
                                mediaUrlList={i.storyList}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-emerald-100 text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    );
};

export default StoryModal;