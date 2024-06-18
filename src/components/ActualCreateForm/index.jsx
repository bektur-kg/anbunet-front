import React, {useEffect, useState} from 'react'
import cn from "classnames"
import {getUrlFileExtension, lockWindowScrollInModal} from "../../helpers/index.js"
import {Button, Empty, FormInput, Loader} from "../index.js"
import {requests} from "../../api/requests.js"
import {videoPostUrlExtensions} from "../../utils/postUrlExtensions.js"
import CreateActualStoryCard from "./CreateActualStoryCard/index.jsx"
import {useForm} from "react-hook-form"

const ActualCreateForm = (
    {
        setIsActive,
        isActive,
        fetchUserProfile
    }) => {
    const [userStories, setUserStories] = useState(null)
    const [selectedStoryIds, setSelectedStoryIds] = useState([])
    const [isActualCreated, setIsActualCreated] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({mode: "onChange"})

    const checkIfFormIsValid = () => {
        if(!isValid || selectedStoryIds.length === 0) setIsFormValid(false)
        else setIsFormValid(true)
    }

    const fetchAvailableStories = () => {
        requests.getCurrentUserAvailableStories().then(res => setUserStories(res.data))
    }

    useEffect(() => {
        checkIfFormIsValid()
    }, [selectedStoryIds, isValid])

    useEffect(() => {
        lockWindowScrollInModal(isActive)
        fetchAvailableStories()
    }, [isActive, isActualCreated])

    const handleCreateActual = ({actualName}) => {
        reset()

        if(isFormValid){
            requests.createActual({name: actualName})
                .then(res => {
                    const actualId = res.data.value.id

                    for (let i = 0; i < selectedStoryIds.length; i++) {
                        const storyId = selectedStoryIds[i]

                        requests.addStoriesToActual(actualId, { storyId })
                    }
                })
                .then(fetchUserProfile)
                .then(() => setIsActualCreated(true))
                .then(() => setIsActive(false))
                .finally(() => setSelectedStoryIds([]))
        }
    }

    return (
        <div
            className={cn("bg-emerald-950/60 top-0 left-0 p-20 w-full h-full fixed transition-all z-10", {hidden: !isActive})}>
            <div className={"bg-white p-10 rounded flex gap-10 justify-center w-full h-full"}>
                <div className={"flex flex-col items-center"}>
                    <span className={"text-3xl font-medium mb-5"}>Create Actual</span>
                    <form
                        onSubmit={handleSubmit(handleCreateActual)}
                        className={"w-60 mx-auto mb-2 flex flex-col items-center"}
                    >
                        <FormInput
                            inputType={"text"}
                            regexName={"actualName"}
                            placeholder={"Actual Name"}
                            registerName={"actualName"}
                            register={register}
                            error={errors?.actualName?.message}
                        />
                        <Button
                            text={"Create"}
                            type={"submit"}
                            classNames={"w-fit"}
                            isActive={isFormValid}
                        />
                    </form>
                    {
                        !userStories &&
                        <Loader className={"block"}/>
                    }
                    {
                        userStories?.length === 0 &&
                        <div className={"flex justify-center items-center w-full h-full"}>
                            <Empty text={"You have no available stories"}/>
                        </div>
                    }
                    {
                        userStories?.length !== 0 &&
                        <div className={"flex flex-wrap justify-center mt-10 w-5/6 overflow-y-auto custom-scrollbar"}>
                            {
                                userStories?.map(i => {
                                    const isMediaVideo = videoPostUrlExtensions.includes(getUrlFileExtension(i.mediaUrl))

                                    return (
                                        <CreateActualStoryCard
                                            mediaUrl={i.mediaUrl}
                                            isMediaVideo={isMediaVideo}
                                            selectedStoryIds={selectedStoryIds}
                                            storyId={i.id}
                                            setSelectedStoryIds={setSelectedStoryIds}
                                        />
                                    )
                                })
                            }
                        </div>
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

export default ActualCreateForm