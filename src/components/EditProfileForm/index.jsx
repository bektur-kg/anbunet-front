import React, {useState} from 'react';
import {Button, FormInput, FormSelect, FormTextarea} from "../index.js";
import {useNavigate} from "react-router-dom";

const EditProfileForm = (
    {
        handleSubmit,
        register,
        isValid,
        errors,
        reset,
        setProfilePicture,
        submitRequestHandler
    }) => {
    const navigate = useNavigate()
    const [previewProfileImage, setPreviewProfileImage] = useState("")

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setProfilePicture(file)

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewProfileImage(reader.result)
            }
            reader.readAsDataURL(file)
        } else {
            setPreviewProfileImage(null)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(submitRequestHandler)}
            className={"py-8 px-6 bg-white/60 border rounded-xl"}>
            <div className={"flex justify-center text-3xl font-medium mb-10"}>
                <h3>Edit Profile</h3>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex justify-center my-4"}>
                    <div className={"w-80 flex flex-col items-center"}>
                        <input
                            className={"border w-full py-2 px-3 rounded"}
                            type={"file"}
                            accept={"image/*"}
                            onChange={handleFileChange}
                        />
                        {
                            previewProfileImage &&
                            <div className={"w-40 h-40 mt-2"}>
                                <img
                                    src={previewProfileImage}
                                    alt="profile picture"
                                    className={"w-full rounded-full border-2 shadow-2xl border-emerald-300 h-full object-cover"}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className={"flex gap-2"}>
                    <FormInput
                        inputType={"text"}
                        registerName={"fullName"}
                        placeholder={"New full name"}
                        register={register}
                        error={errors?.fullName?.message}
                        regexName={"fullName"}
                    />
                    <FormInput
                        inputType={"email"}
                        registerName={"email"}
                        placeholder={"New Email"}
                        register={register}
                        error={errors?.email?.message}
                        regexName={"email"}
                    />
                </div>
                <FormTextarea
                    registerName={"bio"}
                    placeholder={"Your biography"}
                    register={register}
                    error={errors?.bio?.message}
                    regexName={"bio"}
                />
                <FormSelect
                    regexName={"gender"}
                    register={register}
                    registerName={"gender"}
                />
                <div className={"flex w-full gap-2 justify-end"}>
                    <Button
                        isActive={isValid}
                        text={"Save"}
                        type={"submit"}
                    />
                    <Button
                        text={"Cancel"}
                        classNames={"text-emerald-400 bg-transparent border border-emerald-400 hover:text-white hover:bg-emerald-400 transition-all"}
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

export default EditProfileForm;