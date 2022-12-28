import React from 'react';
import './Register.css';
import registerimg from "../../images/reges.jpeg";

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
               <div className="loginLeft">
                <h3 className="loginLogo">Mrami</h3>
                <span className="loginDesc">Connect whit friends and the World With Mrami.{" "}</span>
                <img src={registerimg} alt="" className="regImg" />
                </div> 
               <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="User Name" type='text' className="loginInput" />
                    <input placeholder="Email" type='email' className="loginInput" />
                    <input placeholder="Password" type='password' className="loginInput" />
                    <input placeholder="Password Again" type='password' className="loginInput" />
                    <button className="loginButton">Sing Up</button>
                    <button className="loginRegesterButton">Log In</button>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Register;
