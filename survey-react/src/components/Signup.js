import React from "react";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import axios from 'axios';

const Signup = () => {
    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigation = useNavigate();
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
                    <input type="text" placeholder="First Name" id="first_name" onChange={(e) => {setFname(e.target.value);}}/><br/>
                    <input type="text" placeholder="Last Name" id="last_name" onChange={(e) => {setLname(e.target.value);}}/><br/>
                    <input type="text" placeholder="Email address" id="email" onChange={(e) => {setEmail(e.target.value);}}/><br/>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => {setPassword(e.target.value);}}/>
                    <div id="pass"><input type="checkbox" id="toggle" onClick={
                            function reveal() {
                                var x = document.getElementById("password");
                                if (x.type === "password") {
                                    x.type = "text";
                                } else {
                                    x.type = "password";
                                }
                                }}/>Show Password</div>
                    <button type="submit" id = "sign_up" className="btn btn-gray" onClick={
                        function onSubmit(e){
                        e.preventDefault();
                        
                        let data = new FormData();
                        
                        data.append('first_name', first_name);
                        data.append('last_name', last_name);
                        data.append('email', email);
                        data.append('password', password);
                        
                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/api/register',
                            data: data,
                        })
                        .then(function (response) {
                        if(response.data.message == "error"){
                            alert("email already used or incorrect email format")
                        }
                        
                        var token = response.data.authorisation.token
                        localStorage.setItem("jwt", token);
                        Navigation("/Surveys")  
                        })

                        .catch(function (error){
                        console.log(error);
                        })
        
                        }}>Sign up</button>
                </form>
            </div>
        </div>
    </div>
    
    
  );
};

export default Signup;