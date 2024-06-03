import {passwordRegex} from "./regex.js";

const required = 'Required field'

export const formRules = {
    login: {required},
    password: {
        required,
        pattern: {
            value: passwordRegex,
            message: "Minimum eight characters, at least one letter and one number"
        }
    },
    postDescription: {

    },
    postFile: {required}
}