import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useFirebase();

    console.log(admin);

    const location = useLocation();
    if (admin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};

export default AdminRoute;