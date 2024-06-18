import React from 'react';
import {useNavigate} from "react-router-dom";

const PostUser = (
    {
        id,
        login,
        profilePicture,
    }) => {
    const navigate = useNavigate()

    return (
        <div
            className={"flex items-center gap-3 cursor-pointer"}
            onClick={() => navigate(`/profile/${id}`)}
        >
            <div>
                <img
                    className={"w-10 h-10 rounded-full object-cover border border-emerald-400"}
                    src={profilePicture ? profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                    alt="profile"
                />
            </div>
            <span className={"font-medium"}>{login}</span>
        </div>
    );
};

export default PostUser;