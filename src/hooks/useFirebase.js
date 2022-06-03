import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Home/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);
    const [authError, setAuthError] = useState('');
    
    const auth = getAuth();

    /* ============ register part =========== */
    const registerUser = (user, password) => {
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
        
        .finally(()=>setIsLoding(false));
    };



    /* ============ login method =========== */ 
    const loginUser = (email, password) => {
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=>setIsLoding(false));
    };


    /* ============= useEffect part ============= */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoding(false);
        });
        return () => unsubscribe;
    }, []);



    /* ============ login part ================= */
    const logOut = () => {
        setIsLoding(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(()=>setIsLoding(false));
    };
    


    return {
        user,
        isLoding,
        authError,
        registerUser,
        loginUser,
        logOut,
    };

};

export default useFirebase;