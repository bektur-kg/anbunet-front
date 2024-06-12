import React, { useEffect, useState } from "react";
import { PostModalWindow, PostUser } from "../index.js";
import { FaRegComment } from "react-icons/fa";
import { getUrlFileExtension, formatDate } from "../../helpers/index.js";
import { CiHeart } from "react-icons/ci";
import { videoPostUrlExtensions } from "../../utils/postUrlExtensions.js";
import { TiHeartFullOutline } from "react-icons/ti";
import { requests } from "../../api/requests.js";

const Post = ({
  user,
  mediaUrl,
  id,
  likes,
  description,
  currentUserId,
  createdDate,
}) => {
  const myId = localStorage.getItem("id");
  const [postLikes, setPostLikes] = useState([]);
  const isMediaVideo = videoPostUrlExtensions.includes(
    getUrlFileExtension(mediaUrl)
  );
  const [doesCurrentUserLiked, setDoesCurrentUserLiked] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  useEffect(() => {

    console.log(likes)
    requests.getPostLikes(id).then((res) => {

  console.log(res)
      const res2 = res.data.value.map(item => item.user.id)
      console.log(res2)
      setPostLikes(res2);
    });
    // setDoesCurrentUserLiked(postLikes.some((like) => like === myId));
    console.log(myId)
    if(postLikes.includes(myId)){setDoesCurrentUserLiked(true)}else{setDoesCurrentUserLiked(false)
      console.log(doesCurrentUserLiked)
    }
  }, [likes]);

  const handleAddLikeToPost = () => {
    setDoesCurrentUserLiked(true);
    requests.addLikeToPost(id);
  };

  const handleRemoveLikeFromPost = () => {
    setDoesCurrentUserLiked(false);
    requests.removeLikeFromPost(id);
  };

  // console.log(likes.some((like) => like.id === currentUserId));

  return (
    <div
      className={"w-card mx-auto border px-3 py-7 rounded-xl my-10 bg-white/60"}
    >
      <div className={"flex flex-col gap-3"}>
        <PostUser
          id={user.id}
          login={user.login}
          profilePicture={user.profilePicture}
        />
        <div className={"w-full h-card"}>
          {isMediaVideo ? (
            <video
              src={"https://localhost:7199/"
                .concat(`${mediaUrl}`)
                .replace("https://localhost:7199/http", "http")}
              controls={true}
              className={"w-full h-full object-cover rounded-2xl"}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          ) : (
            <img
              src={"https://localhost:7199/"
                .concat(`${mediaUrl}`)
                .replace("https://localhost:7199/http", "http")}
              alt="postImage"
              className={"w-full h-full object-cover rounded"}
            />
          )}
        </div>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2 items-center"}>
            {doesCurrentUserLiked ? (
              <TiHeartFullOutline
                onClick={handleRemoveLikeFromPost}
                className={"text-3xl hover:cursor-pointer"}
              />
            ) : (
              <CiHeart
                onClick={handleAddLikeToPost}
                className={"text-3xl hover:cursor-pointer"}
              />
            )}
            <FaRegComment
              className={"text-2xl hover:cursor-pointer"}
              onClick={() => setIsPostModalOpen(true)}
            />
          </div>
          <span className={"text-sm text-gray-500"}>
            {formatDate(createdDate)}
          </span>
        </div>
        <div>
          <p className={"text-gray-600"}>{description}</p>
        </div>
      </div>
      <PostModalWindow
        isActive={isPostModalOpen}
        mediaUrl={mediaUrl}
        postId={id}
        isMediaVideo={isMediaVideo}
        setIsActive={setIsPostModalOpen}
      />
    </div>
  );
};

export default Post;
