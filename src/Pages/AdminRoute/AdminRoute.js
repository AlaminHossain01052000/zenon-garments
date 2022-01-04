import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { admin } = useAuth();



    const location = useLocation();
    if (admin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};

export default AdminRoute;