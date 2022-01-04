import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link as={Link} to="/admin/makeAdmin">Make Admin</Nav.Link>
                            <Nav.Link as={Link} to="/admin/manageAllOrders">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin/addAnEmployee">Add An Employee</Nav.Link>
                            <Nav.Link as={Link} to="/admin/allApplicant">See All Applicants</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default AdminMenu;