import React from 'react'
import {getUrlFileExtension} from "../../helpers/index.js"
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js"

const Actual = (
    {
        name,
        handleActualClick,
        id
    }) => {

    return (
        <div
            onClick={handleActualClick}
            className={"flex justify-center items-center text-xs w-20 h-20 mx-4 rounded-full bg-purple-light cursor-pointer transition-all"}
        >
            <span className={"font-medium text-white"}>{name}</span>
        </div>
    )
}

export default Actual