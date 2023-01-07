import { createContext, FormEvent, ReactNode, useContext, useState } from "react";
import * as serverApi from './../services/ServerApi';


interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextReturnProps {
    isAuthenticated: boolean;
    isLoading: boolean;
    handleLoginSubmit: (e: FormEvent, username: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextReturnProps>({} as AuthContextReturnProps);

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    function handleLoginSubmit(e: FormEvent, username: string, password: string) {
        e.preventDefault();

        const retornoLogin = serverApi.login(username, password);
        retornoLogin
            .then(data => {
                if(data?.token) {
                    setIsAuthenticated(true)
                }
            })

    }


    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoading,
            handleLoginSubmit
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);