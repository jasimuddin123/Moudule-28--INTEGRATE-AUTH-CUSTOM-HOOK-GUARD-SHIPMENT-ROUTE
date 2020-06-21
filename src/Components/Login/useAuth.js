import React from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from 'react';
import { useEffect } from 'react';




firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const auth = Auth();
        return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>

}

export const useAuth = () => useContext(AuthContext);

const getUser = user => {
    const { displayName, email, photoURL } = user;
    return{ name: displayName, email, photo: photoURL };

}

const Auth = () => {
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
               const signedInUser = getUser(res.user);
                setUser(signedInUser);
                return res.user;
            })

            .catch(err => {
                console.log(err);
                setUser(null);
                return err.mesage;
            })
    }

    const signOut = () => {
        firebase.auth().signOut().then(function () {
            setUser(null);
            // Sign-out successful.
        }).catch(function (error) {
            console.log(error);
        });
    }
    useEffect( ()=>{
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
                const currUser = getUser(usr);
                setUser(currUser)
              console.log(usr);
            } else {
              // No user is signed in.
            }
          });
    },[])
    return {
        user,
        signInWithGoogle,
        signOut
    }
}
// In This module discuss about React API contex 

export default Auth;