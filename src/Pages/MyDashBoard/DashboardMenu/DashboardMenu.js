import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const DashboardMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link as={Link} to="/dashboard/myApplications">My Applications</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/addAReview">Add A Review</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default DashboardMenu;