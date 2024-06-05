import React from 'react';
import {formRules} from "../../utils/formRules.js";

const FormSelect = (
    {
        register,
        registerName,
        regexName
    }) => {
    return (
        <select
            className={"py-2 px-4 mb-4"}
            {...register(registerName, formRules[regexName])}
        >
            <option value="None">None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    );
};

export default FormSelect;