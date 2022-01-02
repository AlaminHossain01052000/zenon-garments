import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialiazeAuthentication from './../Authentication/Firebase/Firebase.init';


initialiazeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .finally(() => setIsLoading(false))
    }

    //Create New User Using Eamil and Password
    const handleCreteNewUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                const user = { email, displayName: name }
                setUser(user);
                //save user to the database
                saveUser(email, name, "POST");
                //send namae to fireabase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { });
                //redirecting
                history.replace('/')

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const handleOldLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                //redirecting
                const destination = location?.state?.from || '/';
                history.replace(destination);
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



    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://aqueous-reef-70969.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

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
        googleSignIn,
        handleCreteNewUser,
        handleOldLogin,
        logOut
    }
}


export default useFirebase;