import React from 'react'

function ProfilePicture({url}) {
    return (
        <img
        src={url}
        className={`w-16 h-16 rounded-full border-2 border-purple-light`}
        alt="avatart"
    />
    )
}

export default ProfilePicture
