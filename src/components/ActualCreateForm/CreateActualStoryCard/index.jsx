import React, {useEffect, useState} from 'react'

const CreateActualStoryCard = (
    {
        isMediaVideo,
        mediaUrl,
        setSelectedStoryIds,
        selectedStoryIds,
        storyId
    }) => {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(selectedStoryIds.includes(storyId))
    }, [selectedStoryIds])

    const handleSelectOrRemoveStory = () => {
        if(!selectedStoryIds.includes(storyId)){
            setSelectedStoryIds([...selectedStoryIds, storyId])
        }
        else{
            setSelectedStoryIds(selectedStoryIds.filter(i => i !== storyId))
        }
    }

    return (
        <div
            className={`w-60 h-96 m-2 ${isSelected && "border-2 rounded border-emerald-400"}`}
            onClick={handleSelectOrRemoveStory}
        >
            {
                isMediaVideo ?
                    <video
                        src={mediaUrl}
                        controls={true}
                        className={"w-full h-full object-cover rounded cursor-pointer"}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    /> :
                    <img
                        src={mediaUrl}
                        alt="postImage"
                        className={"w-full h-full object-cover rounded cursor-pointer"}
                    />
            }
        </div>
    )
}

export default CreateActualStoryCard