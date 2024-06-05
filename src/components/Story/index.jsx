import React from 'react';

const Story = (
    {
        profilePicture,
        id,
        onClick
    }) => {
    return (
        <div
            onClick={onClick}
            className={"w-20 h-20 mx-4 rounded-full border border-emerald-400 cursor-pointer hover:border-2 transition-all"}>
            <img
                src={profilePicture ? profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                alt="storyImage"
                className={"w-full h-full object-cover rounded-full"}
            />
        </div>
    );
};

export default Story;