import React from 'react'
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebaseConfig';
import { useStateValue } from '../$Data/stateProvider';
import { actionTypes } from '../$Data/reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const login = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result);
        })
        .catch((error) => alert(error));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="Facebook" />
                <Button type="submit" onClick={login}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
