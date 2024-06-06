import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Loader, Post } from "../../components";
import { requests } from "../../api/requests.js";
import Acutal from "../../components/Acutal/index.jsx";
import FollowersNumber from "../../components/FollowersNumber/FollowersNumber.jsx";
import { acutals, posts } from "../../utils/tempData.js";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const userId2 = useParams();
  const initValue = userId2.id && userId2.id != 0 ? userId2.id : 1;
  const [userId, setUserId] = useState(initValue);
  console.log(userId);
  const [profileData, setProfileData] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    requests.getUserProfile(id || 1).then((res) => setProfileData(res.data));
  }, [id]);

  if (!profileData) return <Loader />;
  return (
    <div className={"px-20 py-24 w-3/5 mx-auto"}>
      <div>
        <div className={"flex justify-between w-3/4 mx-auto"}>
          <div className={"w-1/4"}>
            <img
              className={"w-32 h-32 rounded-full border-2 border-emerald-400"}
              src={
                profileData.profilePicture
                  ? profileData.profilePicture
                  : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
              }
              alt="avatart"
            />
          </div>
          <div className={"w-3/5"}>
            <div className={"flex justify-between mb-5"}>
              <span className={"font-bold text-2xl"}>{profileData.login}</span>
              <Button
                onClick={() => navigate("/profile/edit")}
                text={"Edit profile"}
              />
            </div>
            <div className={"flex justify-between w-full"}>
              <div className={"flex items-center gap-1"}>
                <span className={"font-bold text-emerald-500"}>10</span>
                <span>posts</span>
              </div>
              <FollowersNumber userId={id} />
            </div>
            <div className={"mt-4"}>
              <div className={"text-sm italic"}>
                {profileData.fullname} Bektur Toktbobekov Altynbekovich
              </div>
              <a
                href={`mailto:${profileData.email}`}
                className={"text-sm text-blue-400 underline"}
              >
                {profileData.email} weqweqweqwe@gmail.com
              </a>
              <div className={"text-sm text-gray-600"}>
                Gender: {profileData.gender}
              </div>
              <p className={"mt-4 text-sm italic"}>
                {profileData.description} Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi debitis ducimus esse
                repellat repellendus sunt!{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className={"my-8 overflow-x-auto hide-scrollbar grid grid-flow-col"}
        >
          {acutals.map((i) => (
            <Acutal key={i.id} name={i.name} mediaUrl={i.stories[0].mediaUrl} />
          ))}
        </div>
      </div>
      <hr className={"border-emerald-300 my-5"} />
      <div className={"w-3/4 mx-auto"}>
        {posts.map((i) => (
          <Post
            key={i.id}
            mediaUrl={i.mediaUrl}
            description={i.description}
            comments={i.comments}
            createdDate={i.createdDate}
            likes={i.likes}
            user={i.user}
            id={i.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
