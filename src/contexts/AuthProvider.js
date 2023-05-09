import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../authentication/firebase.config";
export const AuthContext=createContext();
const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const providerLogin= (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    };
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log("user observing");
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        };
    },[])
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }
    const verifyEmail =()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }
    const resetPassword =(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email);
    }
    const updateUser=(userInfo)=>{
        return updateProfile(user,userInfo)

    }
    const authInfo ={
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        providerLogin,
        verifyEmail,
        resetPassword
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
               {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;