import React from 'react'
//import {firebase} from './firebase/Firebase'
import firebase from 'firebase/app'

function Login() {
const SignIn=()=>{
    var google= firebase.auth.GoogleAuthProvider()
    firebase.auth().SignInWithPopup(google)
    .then((re)=>{
        console.log(re)
    })
    .catch((err)=>{
        console.log(err )
    })
}
    return (
        <button onClick={SignIn}>Login</button>
    )
}

export default Login


