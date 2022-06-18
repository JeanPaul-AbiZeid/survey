import React from "react";
import '../App.css';
import Signup from './Signup'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
        <div className="form-container">
            <h1>Sign In</h1>
            <form id="form">
                <input type="text" placeholder="Email address" id="email"/><br/>
                <input type="password" placeholder="Password" id="password"/>
                <div id="pass">
                    <input type="checkbox" id="toggle"/>
                    Show Password
                </div>
                <input type="submit" id = "login" class="btn btn-gray" value="Log In"/>
                <h4>New account? <Link to="/Signup">Sign up</Link></h4>
            </form>
        </div>
    </div>
    
  );
};

export default Login;