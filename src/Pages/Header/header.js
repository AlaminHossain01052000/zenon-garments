import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Media/img/logo.png'
// import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <span className="navbar-brand mb-0 h1"><img style={{ width: "180px", cursor: 'pointer' }} src={`${logo}`} alt="logo" /></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home'>HOME</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/aboutUs'>ABOUT US</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/services'>SERVICES</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/projects'>PROJECTS</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/page'>PAGE</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/blog'>BLOG</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/contact_us'>CONTACT</Link >
                            </li>
                            {/* {user.email && */}
                            <li className="nav-item">
                                <Link to='/admin'>ADMIN</Link >
                            </li>
                            {/* } */}
                        </ul>
                        <form className="d-flex">
                            {/* <span className="userName">{user?.displayName}</span>
                            {
                                user.email ?
                                    <Link   to='/signIn' onClick={logOut}>SignOut</Link >
                                    : */}
                            <Link to='/signIn'>SIGN IN</Link >
                            {/* } */}
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;