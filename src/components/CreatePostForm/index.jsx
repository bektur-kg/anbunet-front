import React, {useState} from 'react';
import {Button, FormInput} from "../index.js";
import {formRules} from "../../utils/formRules.js";

const CreatePostForm = (
    {
        handleSubmit,
        register,
        isValid,
        errors,
        submitRequestHandler,
    }) => {

    return (
        <div className={"border py-10 px-5 bg-white/65 rounded-2xl"}>
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
                        placeholder={"Choose Your file"}
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