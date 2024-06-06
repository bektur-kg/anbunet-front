import React from 'react';
import {PostUser} from "../index.js";
import {FaRegComment} from "react-icons/fa";
import {getUrlFileExtension} from "../../helpers/index.js";
import {CiBookmark, CiHeart} from "react-icons/ci";
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js";

const Post = (
    {
        user,
        mediaUrl,
        comments,
        id,
        likes,
        description,
        createdDate
    }) => {
    const isMediaVideo = videoPostUrlExtensions.includes(getUrlFileExtension(mediaUrl))

    return (
        <div className={"w-full border px-3 py-7 rounded-xl my-10 bg-white/60"}>
            <div className={"flex flex-col gap-3"}>
                <PostUser
                    id={user.id}
                    login={user.login}
                    profilePicture={user.profilePicture}
                />
                <div className={"w-full h-auto"}>
                    {
                        isMediaVideo ?
                            <video
                                src={mediaUrl}
                                controls={true}
                                className={"w-full h-full object-cover rounded-2xl"}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                            /> :
                            <img
                                src={"https://localhost:7199/".concat(`${mediaUrl}`).replace("https://localhost:7199/http", "http")} 
                                alt="postImage"
                                className={"w-full h-full object-scale-down rounded"}
                            />
                    }
                </div>
                <div className={"flex justify-between"}>
                    <div className={"flex gap-2 items-center"}>
                        <CiHeart className={"text-3xl hover:cursor-pointer"}/>
                        <FaRegComment className={"text-2xl hover:cursor-pointer"}/>
                    </div>
                    <CiBookmark className={"text-2xl hover:cursor-pointer"}/>
                </div>
                <div>
                    <p className={"text-gray-600"}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;