import React from 'react'
import {ImFilesEmpty} from "react-icons/im"

const Empty = (
    {
        text,
        className
    }) => {
    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            <ImFilesEmpty className={"text-8xl text-purple-light"}/>
            <span className={"text-2xl text-purple-light"}>{text}</span>
        </div>
    );
};

export default Empty;