import React from 'react';
import {Button, FormInput, FormSelect, FormTextarea} from "../index.js";
import {useNavigate} from "react-router-dom";

const ChangePasswordForm = (
    {
        handleSubmit,
        register,
        isValid,
        errors,
        reset,
        submitRequestHandler
    }) => {
    const navigate = useNavigate()

    return (
        <form
            onSubmit={handleSubmit(submitRequestHandler)}
            className={"py-8 px-6 bg-white/60 border rounded-xl"}
        >
            <div className={"flex justify-center text-3xl font-medium mb-10"}>
                <h3>Change Password</h3>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex gap-2"}>
                    <FormInput
                        inputType={"password"}
                        registerName={"oldPassword"}
                        placeholder={"Old Pas$w0rd"}
                        register={register}
                        error={errors?.oldPassword?.message}
                        regexName={"password"}
                    />
                    <FormInput
                        inputType={"password"}
                        registerName={"newPassword"}
                        placeholder={"New Pas$w0rd"}
                        register={register}
                        error={errors?.newPassword?.message}
                        regexName={"password"}
                    />
                </div>
                <div className={"flex w-full gap-2 justify-end"}>
                    <Button
                        isActive={isValid}
                        text={"Save"}
                        type={"submit"}
                    />
                    <Button
                        text={"Cancel"}
                        classNames={"!text-emerald-500 bg-transparent border border-emerald-400 hover:!text-white hover:bg-emerald-400 transition-all"}
                        onClick={() => {
                            reset()
                            navigate(-1)
                        }}
                    />
                </div>
            </div>
        </form>
    );
};

export default ChangePasswordForm;