import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../CuntomHooksFile/useFirebase';
import './AboutUs.css';

const auth = getAuth(app);

const AboutUs = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    // console.log(user)
    return (
        <div>
            <h2>this is about us page</h2>
            
            { user ? <h3>Hellow {user.displayName}</h3> : "" }

        </div>
    );
};

export default AboutUs;



