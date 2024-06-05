import axios from "axios";

const instance = axios.create({baseURL: "https://localhost:7199/api/"})

export const requests = {
    register: (data) => instance.post("users/register", data),
    login: (data) => instance.post("users/login", data),
    getInterestingPosts: (page, quantity) => instance.get(`/posts?page=${page}&quantity=${quantity}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }),
    createPost: (data) => instance.post("/posts", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getUserProfile: (userId) => instance.get(`users/${userId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getUserSearch: (login) => instance.get(`users?login=${login}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getUserFollowings: (login) => instance.get(`users?login=${login}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getUserFollowers: (login) => instance.get(`users?login=${login}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
}