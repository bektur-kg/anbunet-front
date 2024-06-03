import React from 'react';

const PostUser = (
    {
        id,
        login,
        profilePicture
    }) => {
    return (
        <div className={"flex items-center gap-3"}>
            <div>
                <img
                    className={"w-10 h-10 rounded-full"}
                    src={profilePicture ? profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                    alt="profile"
                />
            </div>
            <span className={"font-medium"}>{login}</span>
        </div>
    );
};

export default PostUser;