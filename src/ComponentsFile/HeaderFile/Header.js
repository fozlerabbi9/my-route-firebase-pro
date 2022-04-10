import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
// import useFirebase from '../CuntomHooksFile/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth , signOut} from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    // const { user, signOutFun } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav>
                <li> <Link to="/">Home</Link>  </li>
                <li> <Link to="/aboutUs">About Us</Link>  </li>
                <li> <Link to="/order">Order</Link>  </li>
                <li> {
                    user?.uid ? <button onClick={()=>signOut(auth)}>Sign Out</button>
                        : <Link to="/login">Login</Link>
                }
                </li>

                <li> <Link to="/registation">Registatio</Link>  </li>
            </nav>
        </div>
    );
};

export default Header;