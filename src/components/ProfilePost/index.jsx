import React, {useState} from 'react'
import {PostModalWindow} from "../index.js"
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js"
import {getUrlFileExtension} from "../../helpers/index.js"
import {CiHeart} from "react-icons/ci"
import {FaRegComment} from "react-icons/fa"

const ProfilePost = (
    {
        id,
        mediaUrl,
        createdDate,
        commentsCount,
        likesCount
    }) => {
    const [isPostModalWindowOpen, setIsPostModalWindowOpen] = useState(false)
    const isMediaVideo = videoPostUrlExtensions.includes(getUrlFileExtension(mediaUrl))


    return (
        <>
            <PostModalWindow
                mediaUrl={mediaUrl}
                postId={id}
                isMediaVideo={isMediaVideo}
                setIsActive={setIsPostModalWindowOpen}
                isActive={isPostModalWindowOpen}
            />
            <div className={"my-4 mx-1"}>
                <div
                    className={"w-60 h-60 cursor-pointer"}
                    onClick={() => setIsPostModalWindowOpen(true)}
                >
                    {
                        isMediaVideo ?
                            <video
                                src={mediaUrl}
                                controls={false}
                                className={"w-full h-full object-cover rounded-2xl"}
                                autoPlay={false}
                                loop={false}
                                muted={true}
                            /> :
                            <img
                                src={mediaUrl}
                                alt="postImage"
                                className={"w-full h-full object-cover rounded"}
                            />
                    }
                </div>
                <div className={"flex gap-2 text-purple-light"}>
                    <div className={"flex items-center"}>
                        <CiHeart className={"text-xl"}/>
                        <span>{likesCount}</span>
                    </div>
                    <div className={"flex items-center gap-1"}>
                        <FaRegComment className={"text-sm hover:cursor-pointer"}/>
                        <span>{commentsCount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePost;