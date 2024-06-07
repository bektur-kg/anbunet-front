import React from 'react';
import {Button, FormInput} from "../index.js";

const CreateAiPostForm = (
    {
        handleSubmit,
        register,
        isValid,
        errors,
        submitRequestHandler,
        onChangeFunc,
        clickFunc
        
    }) => {



    return (
        <div className={"border py-10 px-5 rounded bg-white/65 rounded-2xl"}>
            <form
                onSubmit={handleSubmit(submitRequestHandler)}
                className={"flex flex-col justify-between items-center"}
            >
                <div className={"w-full flex justify-center"}>
                    <h2 className={"text-3xl font-medium mb-14"}>Enter prompt to generate image from A.I.</h2>
                </div>
                <div className={"w-full flex flex-col"}>
                <FormInput
                        inputType={"text"}
                        registerName={"prompt"}
                        placeholder={"Your prompt to generate image..."}
                        register={register}
                        error={errors?.prompt?.message}
                        regexName={"promptAi"}
                        pre_function={onChangeFunc}
                    />

<div>
                    <Button
                        isActive={isValid}
                        text={"Generate"}
                        type={"button"}
                        onClick={clickFunc}
                    />
                </div>
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
            </form>
        </div>
    );
};

export default CreateAiPostForm;