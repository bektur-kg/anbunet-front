import React from 'react'

function ProfilePicture({url}) {
    return (
        <img
        className={`w-16 h-16 rounded-full border-2 border-emerald-400`}
        src={url}
        alt="avatart"
    />
    )
}

export default ProfilePicture
