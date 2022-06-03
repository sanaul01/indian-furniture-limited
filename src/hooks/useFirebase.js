import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Home/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();



    /* ============ register part =========== */
    const registerUser = (user, password) => {
        createUserWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };



    /* ============ login method =========== */ 
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };


    /* ============= useEffect part ============= */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser();
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, []);



    /* ============ login part ================= */
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    };


    return {
        user,
        registerUser,
        loginUser,
        logOut,
    };

};

export default useFirebase;