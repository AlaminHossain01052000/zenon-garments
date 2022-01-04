import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import ApplyInfo from '../ApplyInfo/ApplyInfo';
import Employee from '../Employee/Employee';
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
            <Link to="/home">
                <i title="Home" class="fas fa-arrow-left bg-red fs-5 text-success my-1"></i>

            </Link>
            <Container>

                <button onClick={handleGoToApply} className='btn-apply'>Apply Now</button>
                <h1 className='font-poppins text-success my-4'>Our Employees</h1>
                <Row>
                    {

                        employees.map(employee => <Employee employee={employee}></Employee>


                        )
                    }
                </Row>

                {/* else show this */}
            </Container>
        </div>


    );
};

export default AllCarrerInfo;
