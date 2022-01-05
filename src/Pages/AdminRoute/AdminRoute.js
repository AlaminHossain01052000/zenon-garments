import React from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }


    if (admin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};

export default AdminRoute;