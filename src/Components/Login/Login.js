import React from 'react';
import Auth from './use auth';

const Login = () => {
    const auth = Auth();
 
    return (
        <div>
            <h2>Welcome to Log in Component</h2>
            {
                auth.user ? <button onClick={auth.signOut}>Sign out</button> :
                    <button onClick={auth.signInWithGoogle}>Sign in With Google</button>
            }
        </div>
    );
};

export default Login;