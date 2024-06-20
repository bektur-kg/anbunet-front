import React from 'react'

const Story = (
    {
        profilePicture,
        id,
        login,
        onClick
    }) => {
    return (
        <div
            onClick={onClick}
            className={"flex cursor-pointer flex-col items-center text-sm gap-1 font-medium"}>
            <div className={"w-20 h-20 mx-4 rounded-full border border-purple-light"}>
                <img
                    src={profilePicture ? profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                    alt="storyImage"
                    className={"w-full h-full object-cover rounded-full"}
                />
            </div>
            <span>{login}</span>
        </div>
    )
}

export default Story