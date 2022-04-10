import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h3>This is home page</h3>

            {
                user && <div>Name : {user.displayName}</div>
            }
        </div>
    );
};

export default Home;