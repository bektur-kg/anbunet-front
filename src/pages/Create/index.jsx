import React, {useState} from "react"
import {CreatePostForm, CreateStoryForm} from "../../components"
import {useForm} from "react-hook-form"
import {requests} from "../../api/requests.js"

const Create = () => {
    const {
        register: postRegister,
        handleSubmit: postHandleSubmit,
        formState: {isValid: isValidPostForm, errors: postFormErrors},
        reset: resetPostForm,
    } = useForm({mode: "onChange"})
    const {
        register: storyRegister,
        handleSubmit: storyHandleSubmit,
        formState: {isValid: isValidStoryForm, errors: storyFormErrors},
        reset: resetStoryForm,
    } = useForm({mode: "onChange"})
    const [responseError, setResponseError] = useState("")
    const [isPostCreated, setIsPostCreated] = useState(false)
    const [isStoryCreated, setIsStoryCreated] = useState(false)

    const createPostHandler = ({file, description}) => {
        const formData = new FormData()
        formData.append("file", file[0])
        formData.append("description", description)

        requests
            .createPost(formData)
            .then(_ => setIsPostCreated(true))
            .catch(res => setResponseError(res.response.data.description))
            .finally(resetPostForm)
    }

    const createStoryHandler = ({file}) => {
        const formData = new FormData()
        formData.append("file", file[0])

        requests.createStory(formData)
            .then(_ => setIsStoryCreated(true))
            .catch((res) => setResponseError(res.response.data.description))
            .finally(resetStoryForm)
    }

    return (
        <div className={"px-20 py-24"}>
            <CreatePostForm
                register={postRegister}
                errors={postFormErrors}
                handleSubmit={postHandleSubmit}
                isValid={isValidPostForm}
                submitRequestHandler={createPostHandler}
            />
            <div className={"text-red-400 mt-10 text-center"}>{responseError}</div>
            {
                isPostCreated &&
                <div className={"text-emerald-400 text-xl mt-10 text-center"}>Post Created Successfully! </div>
            }
            <CreateStoryForm
                register={storyRegister}
                errors={storyFormErrors}
                handleSubmit={storyHandleSubmit}
                isValid={isValidStoryForm}
                submitRequestHandler={createStoryHandler}
            />
            {
                isStoryCreated &&
                <div className={"text-emerald-400 text-xl mt-10 text-center"}>Story Created Successfully! </div>
            }
        </div>
    )
}

export default Create
