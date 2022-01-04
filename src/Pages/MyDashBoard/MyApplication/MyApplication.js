import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyApplication = () => {
    const [application, setApplication] = useState({})
    const { user } = useAuth();
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/applicants/${user.email}`)
            .then(res => res.json())
            .then(data => setApplication(data))
    }, [user])



    return (

        application ?
            <table className='mx-auto my-5'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#ff6b6b", border: "2px solid #222f3e" }} className="fw-bold text-white p-3 font-poppins">Date</th>
                        <th style={{ backgroundColor: "#ff6b6b", border: "2px solid #222f3e" }} className="font-poppins fw-bold text-white p-3">Status</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{application.starting_date}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{application.status}</td>


                        </tr>
                    }
                </tbody>
            </table>
            : <div>
                <h4 className='mt-5 text-danger text-center'>No application available. Apply
                    <Link className="ms-2" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }} to="/apply">Now</Link>
                </h4>
            </div>

    );


};

export default MyApplication;