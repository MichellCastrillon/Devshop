import React from 'react';
import {Link} from 'react-router-dom'
import '../../style/App/Login.css'

function Login(){
    return(
        <div className="login">
            <div className="form-container">
                <form action="/" className="form">
                    <label for="email" className="label">Email address</label>
                    <input type="text" id="email" placeholder="minTic@example.com" className="input input-email"/>

                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>

                    <input type="submit" value="Log in" className="primary-button login-button"/>
                    <Link to="/">Forgot my password</Link>
                </form>
                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    );
}

export { Login }