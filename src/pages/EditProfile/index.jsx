import React, {useState} from 'react';
import {EditProfileForm} from "../../components"
import {useForm} from "react-hook-form";
import {requests} from "../../api/requests.js";
import login from "../Login/index.jsx";

const EditProfile = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({mode: 'onChange'})
    const [profilePicture, setProfilePicture] = useState(null)

    const submitRequestHandler = (formData) => {
        const requestData = {
            email: formData.email ? formData.email : null,
            bio: formData.bio ? formData.bio : null,
            fullname: formData.fullName ? formData.fullName : null,
            gender: formData.gender ? formData.gender : null,
        }

        requests.updateUserProfilePicture({file: profilePicture})
            .then()

        requests.updateUserProfile(requestData)
            .then()
    }

    return (
        <div className={"pt-20 px-12"}>
            <EditProfileForm
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                isValid={isValid}
                setProfilePicture={setProfilePicture}
                profilePicture={profilePicture}
                reset={reset}
                submitRequestHandler={submitRequestHandler}
            />
        </div>
    );
};

export default EditProfile;