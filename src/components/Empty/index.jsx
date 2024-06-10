import React from 'react'
import {ImFilesEmpty} from "react-icons/im"

const Empty = (
    {
        text
    }) => {
    return (
        <div className={"flex flex-col items-center gap-3"}>
            <ImFilesEmpty className={"text-8xl text-emerald-300"}/>
            <span className={"text-2xl text-emerald-400"}>{text}</span>
        </div>
    );
};

export default Empty;