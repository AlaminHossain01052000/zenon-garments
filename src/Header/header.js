import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">NEWS</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <DehazeIcon />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news/Covid-19'>Covid-19</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news/Entertainment'>Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news/Travel'>Travel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news/Business'>Business</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news/Sports'>Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news/Others'>Others</NavLink>
                            </li>
                            {user.email &&
                                <li className="nav-item">
                                    <NavLink to='/profile'>Profile</NavLink>
                                </li>
                            }
                        </ul>
                        <form className="d-flex">
                            <span className="userName">{user?.displayName}</span>
                            {
                                user.email ?
                                    <NavLink to='/signIn' onClick={logOut}>SignOut</NavLink>
                                    :
                                    <NavLink to='/signIn'>SignIn</NavLink>
                            }
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;