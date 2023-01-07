import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { PrivateRoutes, PublicRoutes } from "./";


export function AppRouter() {
    const {isLoading, isAuthenticated, persistLogin} = useAuthContext();

    if (isLoading) return <div>Checking credentials...</div>

    useEffect(() => {
        persistLogin();
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {
                    isAuthenticated
                        ? <Route path='/*' element={<PrivateRoutes />} />
                        : <Route path='/*' element={<PublicRoutes />} />
                }

                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}