import { Navigate, Route, Routes } from 'react-router-dom';
import { SigninunPage } from '../pages';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<SigninunPage />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};