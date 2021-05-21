import React from 'react'
import firebase from '../../firebase/firebase';

function Login() {
    return (
        <button onClick={() => {
            console.log('hey')
            firebase
              .auth()
              .signInWithEmailAndPassword('test@gmail.com', 'test123')
              .then(res => console.log(res))
          }}>Test login</button>
    )
}

export default Login;
