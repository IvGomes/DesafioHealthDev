import { Navigate, Route, Routes } from 'react-router-dom';
import { ManagementPage } from './../pages';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ManagementPage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};