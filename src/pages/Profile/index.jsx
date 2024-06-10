import React, {useEffect, useState} from 'react'
import {Button, Empty, Loader, Post, Actual, ProfilePost} from "../../components"
import {requests} from "../../api/requests.js"
import {acutals} from "../../utils/tempData.js"
import {useNavigate, useParams} from "react-router-dom"

const Profile = () => {

  const { id } = useParams();
  console.log(`id: ${id}`);
  const userId2 = useParams();
  console.log(`userId2: ${userId2}`);
  const initValue = userId2.id && userId2.id != 0 ? userId2.id : 1;
  const [userId, setUserId] = useState(initValue);
  console.log(userId);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();
  const [currentUserId, setCurrentUserId] = useState(0)

  useEffect(() => {
    requests.getUserProfile(id || 1).then((res) => setProfileData(res.data));
     requests.getCurrentUserProfile()
            .then(res => setCurrentUserId(res.data.id))
  }, [id]);

    if (!profileData) return <Loader/>
    return (
        <div className={"px-20 py-24 w-3/5 mx-auto"}>
            <div>
                <div className={"flex justify-between w-3/4 mx-auto"}>
                    <div className={"w-1/4"}>
                        <img
                            className={"w-32 h-32 rounded-full border-2 border-emerald-400 object-cover cursor-pointer"}
                            src={profileData.profilePicture ? profileData.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                            alt="avatar"
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
                            <FollowersNumber userId={initValue} />
                        </div>
                        <div className={"mt-4"}>
                            <div className={"text-sm italic"}>{profileData.fullname}</div>
                            <a
                                href={`mailto:${profileData.email}`}
                                className={"text-sm text-blue-400 underline"}
                            >
                                {profileData.email}
                            </a>
                            <div className={"text-sm text-gray-600"}>Gender: {profileData.gender}</div>
                            <p className={"mt-4 text-sm italic"}>{profileData.bio}</p>
                        </div>
                    </div>
                </div>
                <div className={"my-8 overflow-x-auto hide-scrollbar grid grid-flow-col"}>
                    {
                        acutals.map(i => (
                            <Actual
                                key={i.id}
                                name={i.name}
                                mediaUrl={i.stories[0].mediaUrl}
                            />
                        ))
                    }
                </div>
            </div>
            <hr className={"border-emerald-300 my-5"}/>
            <div className={"w-full mx-auto flex flex-wrap"}>
                {
                    profileData.posts.length === 0 ?
                        <div className={"mt-10"}>
                            <Empty text={"User Has No Posts"}/>
                        </div>
                        :
                        profileData.posts.map(i => {
                            const user = {
                                id: profileData.id,
                                login: profileData.login,
                                profilePicture: profileData.profilePicture
                            }

                            return (
                                <ProfilePost
                                    key={i.id}
                                    createdDate={i.createdDate}
                                    mediaUrl={i.mediaUrl}
                                    id={i.id}
                                    commentsCount={i.commentsCount}
                                    likesCount={i.likesCount}
                                />
                            )
                        })
                }
            </div>

        </div>
  )
}

export default Profile
