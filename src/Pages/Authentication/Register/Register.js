import React, { useState } from 'react';
import useFirebase from './../../Hooks/useFirebase';

const Register = () => {
    const [logninData, setLoginData] = useState({})
    const { user, googleSignIn, handleCreteNewUser } = useFirebase();



    const handleLogin = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logninData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleOnsubmit = () => {
        if (logninData?.password !== logninData?.password2) {
            alert('your password did not match')
        }
        handleCreteNewUser(logninData.email, logninData.password, logninData?.name)
    }


    const handleGoogleSignUp = () => {
        googleSignIn();

    }


    return (
        <div className='mt-5'>
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
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <button type="submit" onClick={handleGoogleSignUp} className="btn btn-warning runded px-5  py-2 mt-5">Login With Google</button>

            {user?.email && <h4>Register Successfully done</h4>}
        </div >
    );
};

export default Register;