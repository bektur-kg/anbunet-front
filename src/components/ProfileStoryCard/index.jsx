import React, {useState} from 'react'
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js"
import {getUrlFileExtension} from "../../helpers/index.js"
import cn from "classnames"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import {Empty} from "../index.js"

const ProfileStoryCard = (
    {
        storiesList
    }) => {
    const [currentMedia, setCurrentMedia] = useState(0)

    return (
        <div className={"h-full flex flex-col justify-center snap-center snap-always"}>
            {
                storiesList.length === 0 ?
                    <Empty text={"User Has No Stories"}/> :
                    <>
                        <div className={"h-story w-story rounded relative"}>
                            {
                                storiesList.map((i, index) => {
                                    const isMediaVideo = videoPostUrlExtensions.includes(getUrlFileExtension(i.mediaUrl))

                                    return (
                                        currentMedia === index && isMediaVideo ?
                                            <video
                                                key={i.id}
                                                src={i.mediaUrl}
                                                controls={true}
                                                className={cn("w-full h-full object-cover rounded", {["hidden"]: currentMedia !== index})}
                                                autoPlay={true}
                                                loop={true}
                                                muted={true}
                                            /> :
                                            <img
                                                className={cn("w-full h-full object-cover rounded", {["hidden"]: currentMedia !== index})}
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
                                className={cn("bg-purple-light px-2 py-1 rounded", {["opacity-50 cursor-not-allowed"]: currentMedia === 0})}
                                onClick={() => setCurrentMedia(prevState => --prevState)}
                                disabled={currentMedia === 0}
                            >
                                <IoIosArrowBack className={"text-white"}/>
                            </button>
                            <span>
                                {currentMedia + 1} / {storiesList.length}
                            </span>
                            <button
                                className={cn("bg-purple-light px-2 py-1 rounded", {["opacity-50 cursor-not-allowed"]: currentMedia === storiesList.length - 1})}
                                onClick={() => setCurrentMedia(prevState => ++prevState)}
                                disabled={currentMedia === storiesList.length - 1}
                            >
                                <IoIosArrowForward className={"text-white"}/>
                            </button>
                        </div>
                    </>
            }
        </div>
    )
}

export default ProfileStoryCard