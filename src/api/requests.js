import axios from "axios";

const instance = axios.create({baseURL: "https://localhost:7199/"})

export const requests = {
    register: (data) => instance.post("/api/users/register", data),
    login: (data) => instance.post("/api/users/login", data),
    getInterestingPosts: (page, quantity) => instance.get(`/posts?page=${page}&quantity=${quantity}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }),
    createPost: (data) => instance.post("/posts", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getUserProfile: (userId) => instance.get(`api/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    updateUserProfile: (data) => instance.patch("/api/users/update", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    updateUserProfilePicture: (data) => instance.put("/api/users/update_profile_picture", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
}