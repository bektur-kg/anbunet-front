import React, {useEffect, useState} from 'react'
import {Button, Empty, Loader, Post, Actual, ProfilePost} from "../../components"
import {requests} from "../../api/requests.js"
import {acutals} from "../../utils/tempData.js"
import {useNavigate, useParams} from "react-router-dom"
import FollowersNumber from '../../components/FollowersNumber/FollowersNumber.jsx'

const Profile = () => {
    const [profileData, setProfileData] = useState()
    const [currentUserId, setCurrentUserId] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        requests.getCurrentUserProfile()
            .then(res => setCurrentUserId(res.data.id))
        requests.getUserProfile(id).then(res => setProfileData(res.data))
    }, [id])


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
                            <FollowersNumber userId={id} />
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
                                    mediaUrl={"https://localhost:7199/".concat(`${i.mediaUrl}`).replace("https://localhost:7199/http", "http")}
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
