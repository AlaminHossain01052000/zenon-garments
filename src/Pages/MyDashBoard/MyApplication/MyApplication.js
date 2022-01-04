import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const MyApplication = () => {
    const [application, setApplication] = useState({})
    const { user } = useFirebase();
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/applicants/${user.email}`)
            .then(res => res.json())
            .then(data => setApplication(data))
    }, [user])
    return (
        <div>
            {application.email}
            {application.status}
        </div>
    );
};

export default MyApplication;