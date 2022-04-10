import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
// import useFirebase from '../CuntomHooksFile/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    // const {googleProviderFun} = useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'

    const googleSignInFun = () =>{
        signInWithGoogle()
        .then(()=>{
            navigate(from , {replace : true})
        })
    }
    return (
        <div>
            <h2>Please Login Here</h2>

            <div className='w-50 ms-5 form-style'>
                <p>Login First</p>
                <button className='button' onClick={googleSignInFun}>Login With Google</button>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;