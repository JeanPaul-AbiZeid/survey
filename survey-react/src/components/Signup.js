import React from "react";
import '../App.css';

const Signup = () => {
  return (
    <div>
        <h1>New Account</h1>
        <form>
            <input type="text" placeholder="First Name" id="first_name"/><br/>
            <input type="text" placeholder="Last Name" id="last_name"/><br/>
            <input type="text" placeholder="Email address" id="email"/><br/>
            <input type="password" placeholder="Password" id="password"/>
            <div id="pass"><input type="checkbox" id="toggle"/>Show Password</div>
            <input type="submit" id = "sign_up" class="btn btn-black" value="Sign Up"/>
        </form>
    </div>
  );
};

export default Signup;