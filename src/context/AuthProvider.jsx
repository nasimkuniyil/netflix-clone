import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect, useContext } from "react"
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])


    async function initializeUser(user) {
        if(user){
            const uid = user.uid;
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
    }

    const value = {
        currentUser,
        userLoggedIn,
        errorMessage
    }

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider