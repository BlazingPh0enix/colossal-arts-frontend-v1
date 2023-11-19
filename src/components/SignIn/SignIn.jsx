import React, { useState } from 'react';
import './SignIn.css';
import '../../index.css';
import email_icon from '../assets/email.png';
import pass_icon from '../assets/padlock.png';
import user_icon from '../assets/user.png';
import canvas from '../assets/canvas.png';

export const SignIn = () =>{

    const [isSignUp, setIsSignUp] = useState(false);

    const handleNewUser = () =>{
        setIsSignUp(!isSignUp);
    }
    return(
        <div class="main">
            <div class="canvas-board">
                <img src={canvas}/>
            </div>
            <div class="form">
                {isSignUp ? <div id='inputs' class="userName">
                    <img id='userIcon' src={user_icon}/>
                    <input type='text' placeholder='Name'/>
                </div> : <div></div>}
                <div id='inputs' class="userMail">
                    <img id='emailIcon' src={email_icon}/>
                    <input type='email' placeholder='Email'/>
                </div>
                <div id='inputs' class="userPass">
                    <img id='passIcon' src={pass_icon}/>
                    <input type='password' placeholder='Password'/>
                </div>
                <div class="forgotPass">
                    <a href='#'>Forgot Password?</a>
                </div>
                <div class="logInSignUp">
                    <button>{isSignUp ? 'Sign Up' : 'Log In'}</button>
                </div>
                {isSignUp ? <div class="currentUser">
                    Have an account? <a href="#" onClick={handleNewUser}>Sign In</a>
                </div> : <div class="newUser">
                    New User? <a href="#" onClick={handleNewUser}>Register here</a>
                </div>}
            </div>
        </div>
    )
}