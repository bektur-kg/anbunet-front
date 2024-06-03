import {Navigate, Outlet} from "react-router-dom";
import {useIsLoggedIn} from "../hooks/index.js";

const PrivateRoutes = () => {
    const isLoggedIn = useIsLoggedIn()
    return isLoggedIn ? <Outlet/> : <Navigate to={'/login'}/>
}

export default PrivateRoutes;