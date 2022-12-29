import React from 'react';
import './Login.css';
import  loginimg  from "../../images/media.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
               <div className="loginLeft">
                <h3 className="loginLogo">Mrami</h3>
                <span className="loginDesc">Connect whit friends and the World With Mrami.{" "}</span>
                <img src={loginimg} alt="" className="logImg" />
                </div> 
               <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type='email' className="loginInput" />
                    <input placeholder="Password" type='password' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="forget-pass">Forget Password ?</span>
                    <Link to="/register">
                    <button className="singButton">Sing Up</button>
                    </Link>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Login;
