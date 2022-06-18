import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Button from "./Button";

const Signup = () => {
  return (
    <div>
        <nav className="top-nav">
            <h1>S-Maker</h1>
            <ul className="links">
                <li>About Us</li>
                <li>Contact</li>
                <li>
                    <Link to="/"><Button text={"Log In"}/></Link>
                </li>
            </ul>
        </nav>
        <div className="main">
            <div className="form-container">
                <h1>New Account</h1>
                <form id="form">
                    <input type="text" placeholder="First Name" id="first_name"/><br/>
                    <input type="text" placeholder="Last Name" id="last_name"/><br/>
                    <input type="text" placeholder="Email address" id="email"/><br/>
                    <input type="password" placeholder="Password" id="password"/>
                    <div id="pass"><input type="checkbox" id="toggle"/>Show Password</div>
                    <input type="submit" id = "sign_up" className="btn btn-gray" value="Sign Up"/>
                </form>
            </div>
        </div>
    </div>
    
    
  );
};

export default Signup;