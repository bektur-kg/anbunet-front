import React, {useEffect, useState} from 'react'
import cn from "classnames"
import {formatDate, lockWindowScrollInModal} from "../../helpers"
import {PostComment} from "../index.js"
import {IoIosSend} from "react-icons/io"
import {requests} from "../../api/requests.js"
import {TiHeartFullOutline} from "react-icons/ti";
import {CiHeart} from "react-icons/ci";

const PostModalWindow = (
    {
        setIsActive,
        isActive,
        isMediaVideo,
        mediaUrl,
        postId
    }) => {
    const [newComment, setNewComment] = useState("")
    const [comments, setComments] = useState([])

    const fetchComments = () => {
        requests.getPostComments(postId)
            .then(res => setComments(res.data.reverse()))
    }

    const handleSendComment = () => {
        requests.sendComment(postId, {text: newComment })
            .then(fetchComments)

        setNewComment("")
    }

    useEffect(() => {
        fetchComments()
    }, [])



    useEffect(() => {
        lockWindowScrollInModal(isActive)
    }, [isActive])

    return (
        <div
            className={cn("bg-emerald-950/60 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex gap-10 justify-center items-center w-full h-full"}>
                <div className={"w-1/2 h-full"}>
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
                                src={mediaUrl}
                                alt="postImage"
                                className={"w-full h-full object-cover rounded"}
                            />
                    }
                </div>
                <div className={"w-1/2 h-full flex flex-col justify-between"}>
                    <div className={"overflow-y-auto w-full h-full grid grid-flow-row auto-rows-min custom-scrollbar"}>
                        {
                            comments.map(i => (
                                <PostComment
                                    key={i.id}
                                    id={i.id}
                                    createdDate={formatDate(i.createdDate)}
                                    user={i.user}
                                    content={i.text}
                                />
                            ))
                        }
                    </div>
                    <div className={"pt-2 flex"}>
                        {/*{*/}
                        {/*    doesCurrentUserLiked ?*/}
                        {/*        <TiHeartFullOutline*/}
                        {/*            onClick={handleRemoveLikeFromPost}*/}
                        {/*            className={"text-3xl hover:cursor-pointer"}*/}
                        {/*        /> :*/}
                        {/*        <CiHeart*/}
                        {/*            onClick={handleAddLikeToPost}*/}
                        {/*            className={"text-3xl hover:cursor-pointer"}*/}
                        {/*        />*/}
                        {/*}*/}
                        <input
                            placeholder={"Your Comment..."}
                            className={"border py-2 px-3 text-sm w-full"}
                            onChange={e => setNewComment(e.target.value)}
                            value={newComment}
                        />
                        <button
                            className={"bg-emerald-400 py-2 px-3"}
                            onClick={handleSendComment}
                        >
                            <IoIosSend  className={"text-lg text-white"}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-emerald-100 text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    )
}

export default PostModalWindow