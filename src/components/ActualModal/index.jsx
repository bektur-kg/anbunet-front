import React, {useEffect, useState} from 'react'
import cn from "classnames"
import {ActualCard, Loader, StoryCard} from "../index.js"
import {lockWindowScrollInModal} from "../../helpers/index.js"
import {requests} from "../../api/requests.js"

const ActualModal = (
    {
        isActive,
        setIsActive,
        actualRefs,
        userId
    }) => {
    const [actuals, setActuals] = useState(null)


    useEffect(() => {
        lockWindowScrollInModal(isActive)

        requests.getAllActualsByUserId(userId)
            .then(res => setActuals(res.data))
    }, [isActive])

    if(!actuals) return (
        <div
            className={cn("bg-emerald-950/60 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex justify-center items-center w-full h-full"}>
                <Loader/>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-emerald-100 text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    )
    return (
        <div
            className={cn("bg-emerald-950/60 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex justify-center items-center w-full h-full"}>
                <div
                    className={"overflow-x-auto grid grid-flow-col h-full gap-20 custom-scrollbar items-center whitespace-nowrap snap-x snap-mandatory"}>
                    {
                        actuals.map(i => (
                            <ActualCard
                                key={i.id}
                                actualRefs={actualRefs}
                                actualId={i.id}
                                mediaUrlList={i.stories}
                                actualName={i.name}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={"w-10 h-10 absolute top-0 right-0 flex items-center justify-center"}>
                 <span
                     onClick={() => setIsActive(false)}
                     className={"text-emerald-100 text-5xl cursor-pointer"}
                 >&times;</span>
            </div>
        </div>
    )
}

export default ActualModal