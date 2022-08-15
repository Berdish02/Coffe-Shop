import React from 'react';
import { useAuthState, } from 'react-firebase-hooks/auth';
import {signInWithPopup, signOut, setPersistence, browserSessionPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, googleProvider} from '../service/firebase';



export const api = {
    signInWithPopup, 
    setPersistence, 
    browserSessionPersistence, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    auth, 
    googleProvider, 
    useAuthState,
    signOut,
}

export const firebaseContext = React.createContext(api)

