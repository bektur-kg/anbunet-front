import React, {useState} from "react"
import {CreatePostForm} from "../../components/index.js"
import {useForm} from "react-hook-form"
import {requests} from "../../api/requests.js"

const CreatePost = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({mode: "onChange"});
    const [responseError, setResponseError] = useState("")
    const [isPostCreated, setIsPostCreated] = useState(false)

    const createPostHandler = ({file, description}) => {
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append("description", description);

        requests
            .createPost(formData)
            .then((res) => setIsPostCreated(true))
            .catch((res) => setResponseError(res.response.data.description))
            .finally(reset)
    };

    return (
        <div className={"px-20 py-24"}>
            <CreatePostForm
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                isValid={isValid}
                submitRequestHandler={createPostHandler}
            />
            <div className={"text-red-400 mt-10 text-center"}>{responseError}</div>
            {
                isPostCreated && <div className={"text-emerald-400 text-xl mt-10 text-center"}>Post Created Successfully! </div>
            }
        </div>
    );
};

export default CreatePost;
