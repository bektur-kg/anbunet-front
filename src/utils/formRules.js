import {emailRegex, passwordRegex} from "./regex.js";

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
        maxLength: {
            value: 100,
            message: "Maximum length of description has to be less than 100"
        }
    },
    postFile: {required},
    storyFile: {required},
    actualName: {
        required,
        maxLength: {
            value: 15,
            message: "Maximum length of an actual has to be less than 16"
        }
    },
    profilePicture: {required},
    fullName: {
        maxLength: {
            value: 50,
            message: "Maximum length of full name has to be less than 50"
        }
    },
    email: {
        pattern: {
            value: emailRegex,
            message: "Wrong email address"
        }
    },
    bio: {
        maxLength: {
            value: 500,
            message: "Bio length has to me less than 500 "
        }
    }
}