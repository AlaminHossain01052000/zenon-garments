import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import initialiazeAuthentication from './../Authentication/Firebase/Firebase.init';


initialiazeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = (navigate, location) => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setError("");

                const newUser = { displayName: result.user.displayName, email: result.user.email };

                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                //redirecting
                const redirectUri = location?.state?.from || "/home";
                navigate(redirectUri);
            })
            .finally(() => setIsLoading(false))
    }

    //Create New User Using Eamil and Password
    const handleCreteNewUser = (email, password, name, navigate, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                const newUser = { displayName: name, email: email };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Set User Display Name

                }).catch((error) => {
                    // An error occurred At the time of setting user displayName

                });

                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                setIsLoading(false)
                //redirecting
                const redirectUri = location?.state?.from || "/home";
                navigate(redirectUri);

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleOldLogin = (email, password, navigate, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                //redirecting
                const redirectUri = location?.state?.from || "/home";
                navigate(redirectUri);
                setError('')
            })

            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])



    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('https://aqueous-reef-70969.herokuapp.com/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }
    useEffect(() => {

        fetch(`http://localhost:5000/users/admin?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)

            })
    }, [user.email])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        isLoading,
        error,
        admin,
        googleSignIn,
        handleCreteNewUser,
        handleOldLogin,
        logOut
    }
}


export default useFirebase;