import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleSignIn, handleOldLogin } = useAuth();

    const [logninData, setLoginData] = useState({})

    const handleLogin = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logninData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnsubmit = e => {
        handleOldLogin(logninData?.email, logninData?.password, navigate, location)

        e.preventDefault();
    }

    const handleGoogleSignUp = () => {
        googleSignIn(navigate, location);
    }


    return (
        <div className='mt-5'>
            <Link to="/home">
                <i title="Home" class="fas fa-arrow-left bg-red fs-5 text-success mb-5"></i>

            </Link>
            <form onSubmit={handleOnsubmit}>
                <div className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label mb-3">Email address</label>
                        <input type="email"
                            onBlur={handleLogin}
                            class="form-control"
                            name='email'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password1" class="form-label mb-3">Password</label>
                        <input type="password"
                            onBlur={handleLogin}
                            class="form-control"
                            name='password'
                        />
                    </div>

                </div>
                <button type="submit" class="btn-contact-submit mx-auto">Login</button>
            </form>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" onClick={handleGoogleSignUp} className="btn btn-warning text-white runded px-5  py-2 mt-5 mx-auto">Login With Google</button>
            </div>

            <p className='mt-3 text-danger fw-bold fs-5 text-center'>Don't Have An Account? Click <Link to="/register">Here</Link> To Register Now</p>
        </div>
    );
};

export default Login;