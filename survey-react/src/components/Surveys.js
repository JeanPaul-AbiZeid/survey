import React from "react";
import '../App.css';
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Surveys = () => {
    const Navigation = useNavigate();
    return (
      <div>
        <nav className="top-nav">
            <h1>S-Maker</h1>
            <ul className="links">
                <li>About Us</li>
                <li>Contact</li>
                <li>
                    <button className="btn-white" onClick={
                        function logout(){
                            localStorage.removeItem("jwt");
                            Navigation("/")
                        }
                    }>Log Out</button>
                </li>
            </ul>
        </nav>
        <div className="main-container">
            <h1>Available Surveys</h1>
            <div className="survey-container">
                <h3>Survey Name</h3>
            </div>
            <h1>Completed Surveys</h1>
            <div className="completed-survey">
                <h3>Survey Name</h3>
            </div>
        </div>
        
      </div>
    );
  };

export default Surveys;