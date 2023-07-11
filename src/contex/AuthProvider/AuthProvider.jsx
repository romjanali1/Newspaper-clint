import { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({children} ) => {
   const [user, setUser] = useState(null);
   

    const ProviderLogin = (Provider) =>{
        return signInWithPopup(auth, Provider);
    };

    const ProviderLog_out = () =>{
        return signOut(auth);
    } ;

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInWithEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect( () =>{
     const unsubscribe = onAuthStateChanged(auth, (userset) =>{
            setUser(userset)
        });
        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, ProviderLogin, ProviderLog_out, createUser, signInWithEmail};
    return (
        <AuthContex.Provider value={authInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider;