import React from 'react';
import {getUrlFileExtension} from "../../helpers/index.js";
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js";

const Actual = (
    {
        mediaUrl,
    }) => {
    const isMediaVideo = videoPostUrlExtensions.includes(getUrlFileExtension(mediaUrl))

    return (
        <div className={"w-20 h-20 mx-4 rounded-full border border-emerald-400 cursor-pointer hover:border-2 transition-all"}>
            {
                isMediaVideo ?
                    <video
                        src={mediaUrl}
                        controls={false}
                        className={"w-full h-full object-cover rounded-full "}
                        autoPlay={false}
                        muted={true}
                    /> :
                    <img
                        src={mediaUrl}
                        alt="postImage"
                        className={"w-full h-full object-cover rounded-full"}
                    />
            }
        </div>
    );
};

export default Actual;