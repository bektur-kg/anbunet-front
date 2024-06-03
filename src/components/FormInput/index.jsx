import React from 'react';
import {formRules} from "../../utils/formRules.js";

const FormInput = (
    {
        inputType,
        placeholder,
        register,
        registerName,
        regexName,
        error
    }) => {
    return (
        <label className={"w-full mb-4 rounded"}>
            <input
                className={"border w-full py-2 px-3 rounded"}
                type={inputType}
                placeholder={placeholder}
                {...register(registerName, formRules[regexName])}
            />
            <span className={"text-red-400 text-sm"}>{error}</span>
        </label>
    );
};

export default FormInput;