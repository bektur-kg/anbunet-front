export const useGetCurrentUser = () => {
    const user = {
        login: localStorage.getItem("login"),
        id: localStorage.getItem("id"),
    }

    return user
}