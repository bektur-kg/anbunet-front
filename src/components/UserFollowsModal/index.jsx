import React, {useEffect} from 'react'
import cn from "classnames"
import {useNavigate} from "react-router-dom"
import {lockWindowScrollInModal} from "../../helpers/index.js"
import {Empty} from "../index.js";

const UserFollowsModal = (
    {
        isActive,
        title,
        follows,
        setIsActive
    }) => {
    const navigate = useNavigate()

    useEffect(() => {
        lockWindowScrollInModal(isActive)
    }, [isActive])

    return (
        <div
            className={cn("bg-purple-extra-dark/40 top-0 left-0 p-20 flex justify-center items-center w-full h-full fixed transition-all z-10", {hidden: !isActive})}
        >
            <div className={"bg-white p-5 rounded flex flex-col items-center justify-start w-96 h-96 relative"}>
                <div className={"w-full"}>
                    <div className={"flex justify-between w-full"}>
                        <span className={"text-xl leading-6 font-medium"}>{title}</span>
                        <span
                            onClick={() => setIsActive(false)}
                            className={"text-purple-light leading-3 text-5xl font-light cursor-pointer"}
                        >
                        &times;
                    </span>
                    </div>
                    <hr className={"border-1 w-full border-purple-light/70 mt-4"}/>
                </div>
                <div className={"w-full h-full overflow-y-auto custom-scrollbar"}>
                    {
                        follows.length ? follows.map(i => (
                            <>
                                <div
                                    key={i.id}
                                    onClick={() => {
                                        setIsActive(false)
                                        navigate(`/profile/${i.id}`)
                                    }}
                                    className={"cursor-pointer flex items-center justify-center gap-2 w-full hover:bg-purple-extra-dark/10 py-2 rounded"}
                                >
                                    <div className={"w-11 h-11"}>
                                        <img
                                            className={"w-full h-full object-cover rounded-full"}
                                            src={i.profilePicture ? i.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                                            alt="profilePicture"
                                        />
                                    </div>
                                    <span className={"text-lg font-medium"}>{i.login}</span>
                                </div>
                            </>
                        )) : (
                            <div className={"w-full h-full flex justify-center items-center"}>
                                <Empty text={`No ${title}`}/>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default UserFollowsModal