import React, {useState} from 'react'
import {ChangePasswordForm, EditProfileForm} from "../../components"
import {useForm} from "react-hook-form"
import {requests} from "../../api/requests.js"
import {useNavigate} from "react-router-dom"
import {hasNonNullProperty} from "../../helpers"

const EditProfile = () => {
    const {
        register: registerProfile,
        handleSubmit: handleSubmitProfile,
        formState: {isValid: isValidProfileForm, errors: profileFormErrors},
        reset: resetProfileForm,
    } = useForm({mode: 'onChange'})

    console.log(isValidProfileForm)
    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        formState: {isValid: isValidPassword, errors: passwordErrors},
        reset: resetPasswordForm,
    } = useForm({mode: 'onChange'})

    const [profilePicture, setProfilePicture] = useState(null)
    const [responseErrors, setResponseErrors] = useState([])
    const navigate = useNavigate()

    const submitProfileFormRequestHandler = (formData) => {
        setResponseErrors([])
        const requestData = {
            email: formData.email ? formData.email : null,
            bio: formData.bio ? formData.bio : null,
            fullname: formData.fullName ? formData.fullName : null,
            gender: formData.gender && formData.gender !== "Gender" ? formData.gender : null,
        }

        if(hasNonNullProperty(requestData)){
            console.log(requestData)
            requests.updateUserProfile(requestData)
                .catch(res => setResponseErrors([...responseErrors, res.response.data.description]))
        }

        if(profilePicture){
            requests.updateUserProfilePicture({file: profilePicture})
                .catch(res => setResponseErrors(  [...responseErrors, res.response.data.description]))
        }

        resetProfileForm()
    }

    const changePasswordFormHandler = (formData) => {
        if(formData.oldPassword !== "" && formData.newPassword !== ""){
            const passwordData = {
                oldPassword: formData.oldPassword,
                newPassword: formData.newPassword
            }
            requests.updateUserPassword(passwordData)
                .catch(res => setResponseErrors(  [...responseErrors, res.response.data.description]))
        }

        resetPasswordForm()
    }

    return (
        <div className={"pt-20 px-12"}>
            <EditProfileForm
                handleSubmit={handleSubmitProfile}
                register={registerProfile}
                errors={profileFormErrors}
                isValid={isValidProfileForm}
                setProfilePicture={setProfilePicture}
                profilePicture={profilePicture}
                reset={resetProfileForm}
                submitRequestHandler={submitProfileFormRequestHandler}
            />
            <ul className={"my-4 flex flex-col items-center"}>
                {
                    responseErrors.map(i => (
                        <span
                            key={i}
                            className={"text-red-400 text-lg"}
                        >
                            {i}
                        </span>
                    ))
                }
            </ul>
            <ChangePasswordForm
                handleSubmit={handleSubmitPassword}
                register={registerPassword}
                errors={passwordErrors}
                isValid={isValidPassword}
                reset={resetPasswordForm}
                submitRequestHandler={changePasswordFormHandler}
            />
        </div>
    );
};

export default EditProfile;