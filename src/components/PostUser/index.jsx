import React from 'react';

const PostUser = (
    {
        id,
        login,
        profilePicture,
        onClick
    }) => {
    return (
        <div
            className={"flex items-center gap-3 cursor-pointer"}
            onClick={onClick}
        >
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