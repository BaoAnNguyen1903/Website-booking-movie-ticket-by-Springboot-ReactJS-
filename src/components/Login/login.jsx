import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>DECHEPHIM247</h2>
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="${googleLoginUrl}" role="button">
                        <i class="fab fa-google-plus-g"></i>G+
                    </a>
                </div>
                <span>or use your account</span>
                <input type="text" class="form-control" id="loginUsername" name="username" placeholder="Enter Username"
                   required></input>
                <input type="password" class="form-control" id="loginPassword" name="password" placeholder="Enter Password"
                   required></input>
                   
            </div>
        );
    }
}

export default Login;
