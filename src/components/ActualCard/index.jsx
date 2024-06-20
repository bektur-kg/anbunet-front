import React, {useState} from 'react'
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js"
import {getUrlFileExtension} from "../../helpers/index.js"
import cn from "classnames"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

const ActualCard = (
    {
        mediaUrlList,
        actualName,
        actualRefs,
        actualId,
    }) => {
    const [currentMedia, setCurrentMedia] = useState(0)

    const setActualRefs = (id, element) => {
        actualRefs.current[id] = element
    }

    return (
        <div
            className={"h-full flex flex-col justify-center snap-center snap-always"}
            ref={(el) => setActualRefs(actualId, el)}
        >
            <div className={"pb-2 text-lg font-medium"}>
                <span>{actualName}</span>
            </div>
            <div className={"h-story w-story relative rounded"}>
                {
                    mediaUrlList.map((i, index) => {
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
            <div className={"flex justify-center my-2 items-center gap-2"}>
                <button
                    className={cn("bg-purple-light px-2 py-1 rounded", {["opacity-50 cursor-not-allowed"]: currentMedia === 0})}
                    onClick={() => setCurrentMedia(prevState => --prevState)}
                    disabled={currentMedia === 0}
                >
                    <IoIosArrowBack className={"text-white"}/>
                </button>
                <span>
                    {currentMedia + 1} / {mediaUrlList.length}
                </span>

                <button
                    className={cn("bg-purple-light px-2 py-1 rounded", {["opacity-50 cursor-not-allowed"]: currentMedia === mediaUrlList.length - 1})}
                    onClick={() => setCurrentMedia(prevState => ++prevState)}
                    disabled={currentMedia === mediaUrlList.length - 1}
                >
                    <IoIosArrowForward className={"text-white"}/>
                </button>
            </div>
        </div>
    )
}

export default ActualCard