import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './DashboardMenu.css';
const DashboardMenu = () => {
    return (
        <div id="dashboard">
            <Navbar className="dashboard-navbar" expand="lg">
                <Container>
                    <h1 className='logo-font me-3'>Zenon</h1>
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