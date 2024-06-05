import React from 'react'

function FollowersNumber() {
    return (
        <>
        <div className={"flex items-center gap-1 cursor-pointer"}>
                                <span className={"font-bold text-emerald-500"}>10</span>
                                <span>followers</span>
                            </div>
                            <div className={"flex items-center gap-1 cursor-pointer"}>
                                <span className={"font-bold text-emerald-500"}>10</span>
                                <span>followings</span>
                            </div>
                            </>
    )
}

export default FollowersNumber
