import React from "react";
import '../App.css';
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Survey = () => {
    const Navigation = useNavigate();
    return (
      <div>
        <nav className="top-nav">
            <h1>S-Maker</h1>
            <ul className="links">
                <li onClick={() => Navigation("/Surveys")}>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>
                    <button className="btn-white" onClick={
                        function logout(){
                            localStorage.clear();
                            Navigation("/")
                        }
                    }>Log Out</button>
                </li>
            </ul>
        </nav>
        
        
      </div>
    );
  };

export default Survey;