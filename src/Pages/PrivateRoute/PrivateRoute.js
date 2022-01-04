import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase();
    const location = useLocation();
    if (user.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};

export default PrivateRoute;