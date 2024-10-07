import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../constants/constants";

function PrivateRoute() {
    const authType = useContext(AuthContext);
    const {isAuthenticated} = authType
  return (
    isAuthenticated ? <Outlet/> : <Navigate to={`${LOGIN}`} />
  )
}

export default PrivateRoute