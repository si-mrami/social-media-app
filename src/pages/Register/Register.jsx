import React from 'react';
import './Register.css';
import registerimg from "../../images/reges.jpeg";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register'>
            <div className="registerWrapper">
               <div className="registerLeft">
                <h3 className="registerLogo">Mrami</h3>
                <span className="registerDesc">Connect whit friends and the World With Mrami.{" "}</span>
                <img src={registerimg} alt="" className="regImg" />
                </div> 
               <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="User Name" type='text' className="registerInput" />
                    <input placeholder="Email" type='email' className="registerInput" />
                    <input placeholder="Password" type='password' className="registerInput" />
                    <input placeholder="Password Again" type='password' className="registerInput" />
                    <button className="registerButton">Sing Up</button>
                    <Link to="/login">
                    <button className="LoginButton">Log In</button>
                    </Link>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Register;
