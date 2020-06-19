import React from 'react';
import Auth from './use auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    return (
        <div>
            <h2>Welcome to Log in Component</h2>
            <button onClick={auth.signInWithGoogle}>Sign in With Google</button>
        </div>
    );
};

export default Login;