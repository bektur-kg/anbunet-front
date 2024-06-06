import React, {useState} from 'react';
import {Logo, LoginForm} from "../../components";
import {useForm} from "react-hook-form";
import {requests} from "../../api/requests.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({ mode: 'onChange' })
    const [responseError, setResponseError] = useState("");
    const navigate = useNavigate()

    const submitRequestHandler = ({login, password}) => {
        const data = {
            login,
            password
        }

        requests.login(data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("login", login)
                navigate("/")
                window.location.reload()
            })
            .catch(res => {
                console.log(res)
                setResponseError(res.response?.data.description)
            }).finally(reset)
    }

    return (
        <div className={"px-20 py-24"}>
            <LoginForm
                formTitle={"Login"}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                isValid={isValid}
                reset={reset}
                submitRequestHandler={submitRequestHandler}
            />
            <div className={"w-full flex justify-center mt-4"}>
                <p className={"text-red-400 text-xl "}>{responseError}</p>
            </div>
        </div>
    );
};

export default Login;