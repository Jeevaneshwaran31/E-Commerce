import { createContext, ReactNode, useState } from "react"

const AuthContextType = {
    isAuthenticated : false,
    Login : () => {},
    Logout : () => {}
}

export const AuthContext = createContext(AuthContextType);

const AuthProvider = ({children} : {children: ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const Login = ()=> setIsAuthenticated(true);
    const Logout = ()=> setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{isAuthenticated, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
