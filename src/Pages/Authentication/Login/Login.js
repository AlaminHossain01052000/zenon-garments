import React, { useState } from 'react';
import useFirebase from './../../Hooks/useFirebase';

const Login = () => {

    const { googleSignIn, handleOldLogin } = useFirebase();

    const [logninData, setLoginData] = useState({})

    const handleLogin = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logninData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnsubmit = e => {
        handleOldLogin(logninData?.email, logninData?.password)

        e.preventDefault();
    }

    const handleGoogleSignUp = () => {
        googleSignIn();
    }


    return (
        <div className='mt-5'>
            <form onSubmit={handleOnsubmit}>
                <div className='w-50 mx-auto'>
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

                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <button type="submit" onClick={handleGoogleSignUp} className="btn btn-warning runded px-5  py-2 mt-5">Login With Google</button>
        </div>
    );
};

export default Login;