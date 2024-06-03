const useIsLoggedIn = () => !!localStorage.getItem("token")

export default useIsLoggedIn;