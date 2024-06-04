import React, {useEffect, useState} from 'react';
import {Button, Loader, Post} from "../../components";
import {requests} from "../../api/requests.js";


const Profile = () => {
    const [searchResults, setSearchResults] = useState()

   

    console.log(searchResults)

    useEffect(() => {
        requests.getUserSearch('test').then(res => setSearchResults(res.data))
    }, []);

    if(!searchResults) return <Loader/>
    return (
        
        // <div className={"px-20 py-24 w-3/5 mx-auto"}>
        //     <div>
        //         <div className={"flex justify-between w-3/4 mx-auto"}>
        //             <div className={"w-1/4"}>
        //                 <img
        //                     className={"w-32 h-32 rounded-full border-2 border-emerald-400"}
        //                     src={profileData.profilePicture ? profileData.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
        //                     alt="avatart"
        //                 />
        //             </div>
        //             <div className={"w-3/5"}>
        //                 <div className={"flex justify-between mb-5"}>
        //                     <span className={"font-bold text-2xl"}>{profileData.login}</span>
        //                     <Button text={"Edit profile"}/>
        //                 </div>
        //                 <div className={"flex justify-between w-full"}>
        //                     <div className={"flex items-center gap-1"}>
        //                         <span className={"font-bold text-emerald-500"}>10</span>
        //                         <span>posts</span>
        //                     </div>
        //                     <div className={"flex items-center gap-1 cursor-pointer"}>
        //                         <span className={"font-bold text-emerald-500"}>10</span>
        //                         <span>followers</span>
        //                     </div>
        //                     <div className={"flex items-center gap-1 cursor-pointer"}>
        //                         <span className={"font-bold text-emerald-500"}>10</span>
        //                         <span>followings</span>
        //                     </div>
        //                 </div>
        //                 <div className={"mt-4"}>
        //                     <div className={"text-sm italic"}>{profileData.fullname} Bektur Toktbobekov Altynbekovich</div>
        //                     <a
        //                         href={`mailto:${profileData.email}`}
        //                         className={"text-sm text-blue-400 underline"}
        //                     >{profileData.email} weqweqweqwe@gmail.com</a>
        //                     <div className={"text-sm text-gray-600"}>Gender: {profileData.gender}</div>
        //                     <p className={"mt-4 text-sm italic"}>{profileData.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi debitis ducimus esse repellat repellendus sunt! </p>
        //                 </div>
        //             </div>
        //         </div>
                // <div className={"my-8 overflow-x-auto hide-scrollbar grid grid-flow-col"}>
                //     {
                //         acutals.map(i => (
                //             <Acutal
                //                 key={i.id}
                //                 name={i.name}
                //                 mediaUrl={i.stories[0].mediaUrl}
                //             />
                //         ))
                //     }
                // </div>
            // </div>
            // <hr className={"border-emerald-300 my-5"}/>
            <div className={"w-3/4 mx-auto"}>
                {
                    searchResults.map(i => (
                      <div>{i.login}</div>
                    ))
                }
            </div>
      
    );
};

export default Profile;