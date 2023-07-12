import { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({children} ) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   

    const ProviderLogin = (Provider) =>{
        setLoading(true)
        return signInWithPopup(auth, Provider);
    };

    const ProviderLog_out = () =>{
        setLoading(true)
        return signOut(auth);
    } ;

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, (userset) =>{
            setUser(userset)
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, loading, ProviderLogin, ProviderLog_out, createUser, signInWithEmail};
    return (
        <AuthContex.Provider value={authInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;