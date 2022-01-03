import React from 'react';
import useFirebase from './../Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href=" ">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href=" ">Home</a>
                            </li>
                        </ul>
                    </div>
                    {
                        user?.email ?
                            <button onClick={logOut}>Log Out</button> :
                            <button>login</button>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;