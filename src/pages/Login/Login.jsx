import React from 'react';
import './Login.css';
import  loginimg  from "../../images/media.png";

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
               <div className="loginLeft">
                <h3 className="loginLogo">Mrami</h3>
                <span className="loginDesc">Connect whit friends and the World With Mrami.{" "}</span>
                <img src={loginimg} alt="" className="loginimg" />
                </div> 
               <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password? </span>
                    <button className="loginRegesterButton">Create A New Account</button>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Login;
