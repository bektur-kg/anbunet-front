import React from 'react';
import {Button, FormInput} from "../index.js";

const CreatePostForm = (
    {
        handleSubmit,
        register,
        isValid,
        errors,
        submitRequestHandler
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
                <div>
                    <Button
                        isActive={isValid}
                        text={"Submit"}
                        type={"submit"}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreatePostForm;