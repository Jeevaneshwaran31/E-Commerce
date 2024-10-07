import { createContext, ReactNode, useState } from "react"

const AuthContextType = {
    isAuthenticated : false,
    login : () => {},
    logout : () => {}
}

export const AuthContext = createContext(AuthContextType);

const AuthProvider = ({children} : {children: ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = ()=> setIsAuthenticated(true);
    const logout = ()=> setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
