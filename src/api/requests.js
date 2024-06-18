import axios from "axios"

const instance = axios.create({baseURL: "https://localhost:7199/api"})

export const requests = {
    register: (data) => instance.post("users/register", data),
    login: (data) => instance.post("users/login", data),
    getInterestingPosts: (page, quantity) => instance.get(`/popular-posts?page=${page}&quantity=${quantity}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
    }),
    createPost: (data) => instance.post("/posts", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    createStory: (data) => instance.post("/users/current/stories", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    createActual: (data) => instance.post("/actuals", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    addStoriesToActual: (actualId, data) => instance.post(`/actuals/${actualId}/stories`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getUserProfile: (userId) => instance.get(`users/${userId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getCurrentUserProfile: () => instance.get(`users/current`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    addLikeToPost: (postId) => instance.post(`posts/${postId}/likes`, null,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    createChat: (userId) => instance.post(`Chats`, {userId}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getChats: () => instance.get(`Chats/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    removeLikeFromPost: (postId) => instance.delete(`posts/${postId}/likes`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getUserSearch: (login) => instance.get(`users?login=${login}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getUserFollowings: (userId) => instance.get(`users/${userId}/followings`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getUserFollowers: (userId) => instance.get(`users/${userId}/followers`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getUserFollowedPosts: (page, quantity) => instance.get(`following-users/posts?page=${page}&quantity=${quantity}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getAllActualsByUserId: (userId) => instance.get(`users/${userId}/actuals`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getPostComments: (postId) => instance.get(`posts/${postId}/comments`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getFollowingStories: () => instance.get(`following-users/stories`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getUserStories: (userId) => instance.get(`users/${userId}/stories`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    getCurrentUserAvailableStories: () => instance.get(`users/current/available-stories`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }),
    updateUserProfile: (data) => instance.patch("users/current", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    updateUserPassword: (data) => instance.put("users/current/password", data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    updateUserProfilePicture: (data) => instance.put("users/current/profile-picture", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    sendComment: (postId, data) => instance.post(`posts/${postId}/comments`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    getAiGeneratedImage: (prompt) => instance.post("https://api.limewire.com/api/image/generation", {
        headers: {
            "Content-Type": "application/json",
            "X-Api-Version": "v1",
            "Accept": "application/json",
            "Authorization": `Bearer lmwr_sk_Lgti5u4Xrz_J6MaIZMzd3iug67kNOOB4s9Y7LPfqF59wnEDm`,
          },
          body: JSON.stringify({
            prompt: `${prompt}`,
            aspect_ratio: "1:1",
          }),
    }),
    getMyProfile: () => instance.get(`users/current`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    followUser: (userId) => instance.post(`users/${userId}/followers`, null, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
    unfollowUser: (userId) => instance.delete(`users/${userId}/followers`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
}