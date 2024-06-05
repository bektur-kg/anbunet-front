import React from 'react';
import {formRules} from "../../utils/formRules.js";

const FormTextarea = (
    {
        placeholder,
        register,
        registerName,
        regexName,
        error
    }) => {
    return (
        <label className={"w-full mb-4 rounded"}>
            <textarea
                className={"border w-full py-3 px-4 min-h-28 rounded overflow-y-auto custom-scrollbar"}
                placeholder={placeholder}
                {...register(registerName, formRules[regexName])}
            />
            <span className={"text-red-400 text-sm"}>{error}</span>
        </label>
    );
};

export default FormTextarea;