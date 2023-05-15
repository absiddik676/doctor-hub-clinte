import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebese.config';
export const  AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    const SignUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateNameAndPhoto = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authInfo = {
        user,
        SignUp,
        loading,
        login,
        updateNameAndPhoto,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;