import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Orders = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h3>This is orders Page</h3>

            {
                user && <div>
                    <h2>Name : {user.displayName}</h2>
                    <p>Email : {user.email}</p>
                </div>
            }
        </div>
    );
};

export default Orders;