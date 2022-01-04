import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [logninData, setLoginData] = useState({})
    const { user, googleSignIn, handleCreteNewUser } = useAuth();



    const handleLogin = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logninData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleOnsubmit = (e) => {
        e.preventDefault();
        if (logninData?.password !== logninData?.password2) {
            alert('your password did not match')
        }
        else {
            handleCreteNewUser(logninData.email, logninData.password, logninData?.name, navigate, location)
        }

    }


    const handleGoogleSignUp = () => {
        googleSignIn(navigate, location);

    }


    return (
        <div className='mt-5 w-75 mx-auto'>
            <Link to="/home">
                <i title="Home" class="fas fa-arrow-left bg-red fs-5 text-success mb-5"></i>

            </Link>
            <form onSubmit={handleOnsubmit}>
                <div className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Your Name</label>
                        <input type="name"
                            onBlur={handleLogin}
                            class="form-control"
                            name='name'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email"
                            onBlur={handleLogin}
                            class="form-control"
                            name='email'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password1" class="form-label">Password</label>
                        <input type="password"
                            onBlur={handleLogin}
                            class="form-control"
                            name='password'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password2" class="form-label">Confirm Password</label>
                        <input type="password"
                            onBlur={handleLogin}
                            class="form-control"
                            name='password2'
                        />
                    </div>
                </div>
                <button type="submit" class="btn-contact-submit mx-auto">Register</button>
            </form>
            <button type="submit" onClick={handleGoogleSignUp} className="btn btn-warning runded px-5  py-2 mt-5">Login With Google</button>
            <p className='mt-3 text-danger fw-bold fs-5'>Already Registerd? Click <Link to="/login">Here</Link> to Login</p>

        </div >
    );
};

export default Register;