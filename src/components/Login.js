import React from 'react'
import Button from '@material-ui/core/Button';
import './Login.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../userSlice';
import { auth, googleProvider } from '../misc/firebase'
import db from '../misc/firebase'

export default function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(googleProvider).then(response =>
            db.collection('threads').add({
                uid: response.user.uid,
                photo: response.user.photoURL,
                email: response.user.email,
                name: response.user.displayName

            })
        )
            .catch(err => console.log(err.message));
        /* dispatch(loginUser(
            'walid'
        )) */
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="logo google" />
                <Button variant="contained" onClick={signIn}>
                    Se connecter avec google
                </Button>
            </div>
        </div >
    )
}
