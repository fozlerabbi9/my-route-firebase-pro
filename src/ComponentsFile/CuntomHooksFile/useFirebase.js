import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from '../../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    console.log(user);

    const googleProviderFun = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(user);
                console.log(user)
            })
    }
    const signOutFun = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return {
        user,
        signOutFun,
        googleProviderFun
    }
}

export default useFirebase;
