import React from 'react'

const PostComment = (
    {
        user,
        id,
        content,
        createdDate
    }) => {
    return (
        <div className={"flex gap-2 w-full my-2 h-10"}>
            <div className={"h-10 w-10"}>
                <img
                    className={"w-full rounded-full border border-emerald-400 h-full object-cover"}
                    src={user.profilePicture ? user.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                    alt="profile image"
                />
            </div>
            <div className={"w-full px-4"}>
                <div className={"flex justify-between"}>
                    <h4 className={"font-medium"}>{user.login}</h4>
                    <span className={"text-sm text-gray-400"}>{createdDate}</span>
                </div>
                <p className={"text-sm"}>{content}</p>
            </div>
        </div>
    );
};

export default PostComment;