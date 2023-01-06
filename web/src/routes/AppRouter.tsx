import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./";

type Status = 'checking' | 'authenticated' | 'no-authenticated';
const status: Status = 'no-authenticated';

export function AppRouter() {

    if (status === 'checking') return <div className="loading">Checking credentials...</div>

    return (
        <BrowserRouter>
            <Routes>
                {
                    status === 'authenticated'
                        ? <Route path='/*' element={<PrivateRoutes />} />
                        : <Route path='/*' element={<PublicRoutes />} />
                }

                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}