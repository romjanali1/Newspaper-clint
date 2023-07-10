import { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";

export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({children} ) => {
   const [user, setUser] = useState(null);
   

    const ProviderLogin = (Provider) =>{
        return signInWithPopup(auth, Provider);
    };

    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, (userset) =>{
            setUser(userset)
        });
        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, ProviderLogin};
    return (
        <AuthContex.Provider value={authInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;