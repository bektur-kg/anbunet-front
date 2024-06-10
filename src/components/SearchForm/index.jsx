import React from 'react';
import {Button, FormInput} from "../index.js";
import {Link} from "react-router-dom";

const SearchForm = (
    {
        formTitle,
        handleSubmit,
        register,
        isValid,
        errors,
        submitRequestHandler,
        pre_function_input
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
                        placeholder={"Username"}
                        register={register}
                        error={errors?.login?.message}
                        regexName={"login"}
                        pre_function={pre_function_input}
                    />
                </div>
                {/* <div>
                    <Button
                        isActive={isValid}
                        text={"Search"}
                        type={"submit"}
                    />
                </div> */}
            </form>
        </div>
    );
};

export default SearchForm;