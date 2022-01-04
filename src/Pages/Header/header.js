import React from 'react';
import useFirebase from './../Hooks/useFirebase';
import { Link } from 'react-router-dom';
import logo from '../../Media/img/logo.png';
import './Header.css';
const Header = () => {
    const { user, logOut, admin } = useFirebase();
    console.log(admin)
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img style={{ width: '14%' }} class="navbar-brand" src={`${logo}`} alt="Logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" style={{ justifyContent: 'space-between' }} id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/contact_us">Contact Us</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/about_us">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/register">Register</Link>
                            </li>
                            {user.email ? <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/all_career_info">Career</Link>
                            </li> : <></>}
                            {
                                admin && user.email ?
                                    <li class="nav-item">
                                        <Link class="nav-link" aria-current="page" to="/admin">Admin</Link>
                                    </li>
                                    : <></>

                            }
                            {
                                !admin && user.email ? <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/dashboard">My Dashboard</Link>
                                </li> : <></>
                            }


                        </ul>
                    </div>
                    {
                        user?.email ?
                            <button onClick={logOut}>Log Out</button> :
                            <li class="nav-item" style={{ listStyle: "none" }}>
                                <Link class="btn btn-primary" aria-current="page" to="/login">Login</Link>
                            </li>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;