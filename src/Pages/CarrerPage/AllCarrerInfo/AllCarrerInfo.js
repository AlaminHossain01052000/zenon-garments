import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import ApplyInfo from '../ApplyInfo/ApplyInfo';
import './AllCarrerInfo.css';
const AllCarrerInfo = () => {
    const [employees, setEmployees] = useState([]);
    const { admin } = useFirebase();
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000/employees")
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    console.log(employees)
    const handleGoToApply = () => {
        navigate("/apply");
    }
    return (
        <div>
            <button onClick={handleGoToApply} className='btn btn-primary'>Apply Now</button>
            <h1>Our Employees</h1>
            {

                employees.map(employee =>
                    <>

                        <div className='border my-3'>
                            <li>id:-{employee.factoyId}</li>
                            <li>name:-{employee.name}</li>
                            <li>email:-{employee.email}</li>
                            <li>position:-{employee.position}</li>
                            <li>Address:-{employee.address.city}</li>
                            <li>Phone:-{employee.phone}</li>
                        </div>




                    </>


                )
            }
            {/* else show this */}

        </div>


    );
};

export default AllCarrerInfo;
