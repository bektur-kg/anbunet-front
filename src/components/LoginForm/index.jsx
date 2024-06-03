import React from 'react';
import {Button, FormInput} from "../index.js";
import {Link} from "react-router-dom";

const LoginForm = (
    {
        formTitle,
        handleSubmit,
        register,
        isValid,
        errors,
        submitRequestHandler
    }) => {
    return (
        <div className={"border py-10 px-5 rounded bg-white/65"}>
            <form
                onSubmit={handleSubmit(submitRequestHandler)}
                className={"flex flex-col justify-between items-center"}
            >
                <div className={"w-full flex justify-center"}>
                    <h2 className={"text-3xl font-medium mb-14"}>{formTitle}</h2>
                </div>
                <div className={"w-full flex flex-col"}>
                    <FormInput
                        inputType={"string"}
                        registerName={"login"}
                        placeholder={"Your login"}
                        register={register}
                        error={errors?.login?.message}
                        regexName={"login"}
                    />
                    <FormInput
                        inputType={"password"}
                        registerName={"password"}
                        placeholder={"Your Pas$w0rd"}
                        register={register}
                        error={errors?.password?.message}
                        regexName={"password"}
                    />
                </div>
                <div>
                    <Button
                        isActive={isValid}
                        text={"Submit"}
                        type={"submit"}
                    />
                </div>
                <Link
                    className={"text-blue-400 hover:text-blue-600 hover:underline mt-4"}
                    to={formTitle === "Login" ? "/register" : "/login"}
                >{formTitle === "Login" ? "Go to register new account." : "Log into an account"}</Link>
            </form>
        </div>
    );
};

export default LoginForm;