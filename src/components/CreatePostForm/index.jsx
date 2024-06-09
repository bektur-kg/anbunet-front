import React from 'react';
import {Button, FormInput} from "../index.js";
import {Link} from "react-router-dom";

const CreatePostForm = (
    {
        handleSubmit,
        register,
        isValid,
        errors,
        submitRequestHandler,
        pre_function_input
    }) => {
    return (
        <div className={"border py-10 px-5 rounded bg-white/65 rounded-2xl"}>
            <form
                onSubmit={handleSubmit(submitRequestHandler)}
                className={"flex flex-col justify-between items-center"}
            >
                <div className={"w-full flex justify-center"}>
                    <h2 className={"text-3xl font-medium mb-14"}>Create Post</h2>
                </div>
                <div className={"w-full flex flex-col"}>
                    <FormInput
                        inputType={"file"}
                        regexName={"postFile"}
                        registerName={"file"}
                        register={register}
                        error={errors?.file?.message}
                        pre_function={pre_function_input}
                    />
                    <FormInput
                        inputType={"text"}
                        registerName={"description"}
                        placeholder={"Your description..."}
                        register={register}
                        error={errors?.description?.message}
                        regexName={"postDescription"}
                    />
                </div>
                <img src="" alt="" />
                <div>
                    <Button
                        isActive={isValid}
                        text={"Submit"}
                        type={"submit"}
                    />
                </div>
                <Link
                    className={"text-blue-400 hover:text-blue-600 hover:underline mt-4"}
                    to={ "/createai"}
                >{"Generate image with Artificial Intelligence to post!"}</Link>
            </form>
        </div>
    );
};

export default CreatePostForm;