import React from "react";
import '../App.css';

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';



const Login = () => {
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
            </ul>
        </nav>
        <div className="main">
            <div className="form-container">
                <h1>Sign In</h1>
                <form id="form">
                    <input type="text" placeholder="Email address" id="email" onChange={(e) => {setEmail(e.target.value);}}/><br/>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => {setPassword(e.target.value);}}/>
                    <div id="pass">
                        <input type="checkbox" id="toggle"/>
                        Show Password
                    </div>
                    <button type="submit" className="btn btn-gray" onClick={
                        function onSubmit(e){
                        e.preventDefault();
                        
                        let data = new FormData();
  
                        data.append('email', email);
                        data.append('password', password);
                        
                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/api/login',
                            data: data,
                          })
                          .then(function (response) {
                            var token = response.data.authorisation.token
                            localStorage.setItem("jwt", token);
                            response.data.user.type === 1 ? Navigation("/Surveys") : Navigation("/Admin")
                            
                          })
                          .catch(function (error){
                              if(error.response.data.message === "Unauthorized"){
                                  alert("Incorrect email or password");
                              }
                              else{
                                  alert(error.response.data.message);
                              }
                          })
                        }}
                    >Log in</button>
                    
                    <h4>New account? <Link to="/Signup">Sign up</Link></h4>
                </form>
            </div>
        </div>
    </div>
    
    
  );
};

export default Login;