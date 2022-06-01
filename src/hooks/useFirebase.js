import { useState } from "react";
import initializeFirebase from "../Components/Home/Login/Firebase/Firebase.init"

initializeFirebase();
const useFirebase= () =>{
    const [user, setUser]= useState({});


    return {
        user,
    }

}

export default useFirebase;