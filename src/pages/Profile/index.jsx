import React, {useEffect, useState} from 'react';
import {Button, Loader, Post} from "../../components";
import {requests} from "../../api/requests.js";
import Acutal from "../../components/Acutal/index.jsx";

const Profile = () => {
    const [profileData, setProfileData] = useState()

    const acutals = [
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
                {
                    id: 1,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
                {
                    id: 1,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
        {
            id: 0,
            name: "some name",
            stories: [
                {
                    id: 0,
                    mediaUrl: "https://th.bing.com/th/id/R.3207e443cd1175bacdf2d3d05af996a4?rik=PyATyh2ftvW%2b5A&pid=ImgRaw&r=0",
                    createdDate: Date.now()
                },
            ]
        },
    ]
    const posts = [
        {
            "id": 40002,
            "mediaUrl": "https://localhost:7199/c94d8300-db8f-4d7e-af29-7f79ee494379.jpg",
            "description": "wwew",
            "createdDate": "2024-06-01T17:50:51.1737939",
            "user": {
                "id": 10002,
                "login": "bektur",
                "profilePicture": null
            },
            "comments": [],
            "likes": []
        },
        {
            "id": 50002,
            "mediaUrl": "https://localhost:7199/dba0de25-bdbc-4b9e-b3b2-dce4f5a9687f.mp4",
            "description": null,
            "createdDate": "2024-06-01T18:24:37.3886543",
            "user": {
                "id": 10002,
                "login": "bektur",
                "profilePicture": null
            },
            "comments": [],
            "likes": []
        },
        {
            "id": 60002,
            "mediaUrl": "https://localhost:7199/b68678d0-829e-4f1f-9631-d7a1e9def6d5.jpg",
            "description": null,
            "createdDate": "2024-06-01T20:54:55.3216094",
            "user": {
                "id": 10002,
                "login": "bektur",
                "profilePicture": null
            },
            "comments": [],
            "likes": []
        }
    ]

    console.log(profileData)

    useEffect(() => {
        requests.getUserProfile(1).then(res => setProfileData(res.data))
    }, []);

    if(!profileData) return <Loader/>
    return (
        <div className={"px-20 py-24 w-3/5 mx-auto"}>
            <div>
                <div className={"flex justify-between w-3/4 mx-auto"}>
                    <div className={"w-1/4"}>
                        <img
                            className={"w-32 h-32 rounded-full border-2 border-emerald-400"}
                            src={profileData.profilePicture ? profileData.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                            alt="avatart"
                        />
                    </div>
                    <div className={"w-3/5"}>
                        <div className={"flex justify-between mb-5"}>
                            <span className={"font-bold text-2xl"}>{profileData.login}</span>
                            <Button text={"Edit profile"}/>
                        </div>
                        <div className={"flex justify-between w-full"}>
                            <div className={"flex items-center gap-1"}>
                                <span className={"font-bold text-emerald-500"}>10</span>
                                <span>posts</span>
                            </div>
                            <div className={"flex items-center gap-1 cursor-pointer"}>
                                <span className={"font-bold text-emerald-500"}>10</span>
                                <span>followers</span>
                            </div>
                            <div className={"flex items-center gap-1 cursor-pointer"}>
                                <span className={"font-bold text-emerald-500"}>10</span>
                                <span>followings</span>
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <div className={"text-sm italic"}>{profileData.fullname} Bektur Toktbobekov Altynbekovich</div>
                            <a
                                href={`mailto:${profileData.email}`}
                                className={"text-sm text-blue-400 underline"}
                            >{profileData.email} weqweqweqwe@gmail.com</a>
                            <div className={"text-sm text-gray-600"}>Gender: {profileData.gender}</div>
                            <p className={"mt-4 text-sm italic"}>{profileData.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi debitis ducimus esse repellat repellendus sunt! </p>
                        </div>
                    </div>
                </div>
                <div className={"my-8 overflow-x-auto hide-scrollbar grid grid-flow-col"}>
                    {
                        acutals.map(i => (
                            <Acutal
                                key={i.id}
                                name={i.name}
                                mediaUrl={i.stories[0].mediaUrl}
                            />
                        ))
                    }
                </div>
            </div>
            <hr className={"border-emerald-300 my-5"}/>
            <div className={"w-3/4 mx-auto"}>
                {
                    posts.map(i => (
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
                    ))
                }
            </div>
        </div>
    );
};

export default Profile;