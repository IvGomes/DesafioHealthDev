import { createContext, FormEvent, ReactNode, useContext, useState } from "react";

import * as serverApi from './../services/ServerApi';


interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextReturnProps {
    isAuthenticated: boolean;
    isLoading: boolean;
    handleLoginSubmit: (e: FormEvent, username: string, password: string) => void;
    persistLogin: () => void;
    handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextReturnProps>({} as AuthContextReturnProps);

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    function persistLogin() {
        const fromStorage = sessionStorage.getItem("datalogin");

        if (fromStorage) {
            const parsedFromStorage: DataResponseAuthUser = JSON.parse(fromStorage);

            if (parsedFromStorage.token) {
                setIsAuthenticated(true);
            }
        }
    }

    function handleLoginSubmit(e: FormEvent, username: string, password: string) {
        e.preventDefault();

        const retornoLogin = serverApi.login(username, password);
        retornoLogin
            .then(data => {
                if (data?.token) {
                    return data
                } else {
                    throw 'Problemas durante tentativa de login'
                }
            })
            .then(data => {
                serverApi.readUserGeneralData(data.token)
                    .then(response => {
                        const userData = JSON.stringify(response);
                        sessionStorage.setItem('generalFormData', userData);
                    })
            })
            .then(data => {
                setIsAuthenticated(true)
            })
            .catch((error) => { console.error(error) })
    }

    function handleLogout() {
        console.log("logout")
        sessionStorage.removeItem("datalogin");
        sessionStorage.removeItem("generalFormData");
        sessionStorage.removeItem("addressFormData");
        sessionStorage.removeItem("passwordFormData");
        sessionStorage.removeItem("professionalFormData");
        window.location.reload();
    }


    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoading,
            handleLoginSubmit,
            persistLogin,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);