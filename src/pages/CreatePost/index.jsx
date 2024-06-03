import React, {useState} from 'react';
import {CreatePostForm} from "../../components/index.js";
import {useForm} from "react-hook-form";
import {requests} from "../../api/requests.js";


const CreatePost = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({ mode: 'onChange' })
    const [responseError, setResponseError] = useState("");

    const createPostHandler = ({file, description}) => {

        const formData = new FormData();
        formData.append('file', file[0]);
        formData.append('description', description);

        requests.createPost(formData)
            .then(res => console.log(res))
            .catch(res => setResponseError(res.response.data.description))
    }

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
        </div>
    );
};

export default CreatePost;