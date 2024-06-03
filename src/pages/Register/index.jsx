import React, {useState} from 'react'
import {LoginForm} from "../../components/index.js";
import {useForm} from "react-hook-form";
import {requests} from "../../api/requests.js";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({ mode: 'onChange' })
    const [responseError, setResponseError] = useState("");
    const navigate = useNavigate();

    const submitRequestHandler = ({login, password}) => {
        reset()
        const data = {
            login,
            password
        }

        requests.register(data)
            .then(res => {
                requests.login(data)
                    .then(res => {
                        localStorage.setItem("token", res.data.token)
                        navigate("/")
                        window.location.reload()
                    })
            })
            .catch(res => {
                setResponseError(res.response.data.description)
            })
    }

    return (
        <div className={"px-20 py-24"}>
            <LoginForm
                formTitle={"Register"}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                isValid={isValid}
                reset={reset}
                submitRequestHandler={submitRequestHandler}
            />
            <div className={"w-full flex justify-center mt-4"}>
                <p className={"text-red-400 text-xl"}>{responseError}</p>
            </div>
        </div>
    );
};

export default Register;