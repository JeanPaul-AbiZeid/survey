import React from "react";
import '../App.css';
import Signup from './Signup'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <h1>Sign In</h1>
        <form>
            <input type="text" placeholder="Email address" id="email"/><br/>
            <input type="password" placeholder="Password" id="password"/>
            <div id="pass">
                <input type="checkbox" id="toggle"/>
                Show Password
            </div>
            <input type="submit" id = "login" class="btn btn-black" value="Log In"/>
            <h4>New account? <Link to="/Signup">Sign up</Link></h4>
        </form>
    </div>
  );
};

export default Login;