import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Employee.css';
const Employee = ({ employee }) => {
    console.log(employee)
    return (
        <Col lg={4} md={6} sm={12} xs={12}>
            <Card className="mb-5 employee-card">
                <h5 className="my-2 font-roboto">       Name:         {employee.name}
                </h5>
                <h5 className="my-2 font-roboto">          Email:      {employee.email}
                </h5>
                <h5 className="my-2 font-roboto">           Position:     {employee.position}
                </h5>
                <h5 className="my-2 font-roboto">            Address:    {employee.address.city}
                </h5>
            </Card>

        </Col>
    );
};

export default Employee;