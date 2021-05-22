import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/firebase';
import { Form, Button, Alert } from 'react-bootstrap';

import { useHistory } from 'react-router-dom'
import useAuth from '../../firebase/firebaseAuth'
function Login() {
    const [show, setShow] = useState(false);
    const history = useHistory()
    const { pending, isSignedIn, user } = useAuth()

    function onSignIn(e) {
        e.preventDefault()        
        firebase
            .auth()
            .signInWithEmailAndPassword(e.target.form[0].value, e.target.form[1].value)
            .then(res => console.log(res))
            .then(res => {
                // Reroute to '/'
                console.log(res)
                history.push('/')
            })
            .catch(error => setShow(true))
    }

    return (
        <div>
        <Alert style={show === true ? {display: 'block'} : {display: 'none'}} variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Login Error</Alert.Heading>
            <p>
            Please enter the correct email and password
            </p>
        </Alert>
        <div className="login-section mt-4">
            <h1>Welcome!</h1>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSignIn}>
                    Sign In
                </Button>
            </Form>
        </div>
        </div>
    )
}

export default Login;
