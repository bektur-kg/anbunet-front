import React, {useState} from 'react';
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js";
import {getUrlFileExtension} from "../../helpers/index.js";
import cn from "classnames";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {PostUser} from "../index.js";

const StoryCard = (
    {
        mediaUrlList,
        user,
        storyRefs,
        id,
    }) => {
    const [currentMedia, setCurrentMedia] = useState(0)

    const setStoryRef = (id, element) => {
        storyRefs.current[id] = element
    }

    return (
        <div
            className={"h-full flex flex-col justify-center"}
            ref={(el) => setStoryRef(id, el)}
        >
            <div className={"pb-2"}>
                <PostUser
                    login={user.login}
                    profilePicture={user.profilePicture}
                />
            </div>
            <div className={"h-story w-story rounded relative"}>
                {
                    mediaUrlList.map(i => {
                        const isMediaVideo = videoPostUrlExtensions.includes(getUrlFileExtension(i.mediaUrl))

                        return (
                            currentMedia === i.id && isMediaVideo ?
                                <video
                                    key={i.id}
                                    src={i.mediaUrl}
                                    controls={true}
                                    className={cn("w-full h-full object-cover rounded", {["hidden"]: currentMedia !== i.id})}
                                    autoPlay={true}
                                    loop={true}
                                    muted={true}
                                /> :
                                <img
                                    className={cn("w-full h-full object-cover rounded", {["hidden"]: currentMedia !== i.id})}
                                    key={i.id}
                                    src={i.mediaUrl}
                                    alt="story"
                                />
                        )
                    })
                }
            </div>
            <div className={"flex justify-center my-2 items-center gap-2 "}>
                <button
                    className={cn("cursor-pointer bg-green-400 px-2 py-1 rounded", {["opacity-50 cursor-not-allowed"]: currentMedia === 0})}
                    onClick={() => setCurrentMedia(prevState => --prevState)}
                    disabled={currentMedia === 0}
                >
                    <IoIosArrowBack className={"text-white"}/>
                </button>
                <span>
                    {currentMedia + 1} / {mediaUrlList.length}
                </span>

                <button
                    className={cn("cursor-pointer bg-green-400 px-2 py-1 rounded", {["opacity-50 cursor-not-allowed"]: currentMedia === mediaUrlList.length - 1})}
                    onClick={() => setCurrentMedia(prevState => ++prevState)}
                    disabled={currentMedia === mediaUrlList.length - 1}
                >
                    <IoIosArrowForward className={"text-white"}/>
                </button>
            </div>
        </div>
    );
};

export default StoryCard;