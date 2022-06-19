import React, { useEffect, useState } from "react";
import '../App.css';
import Button from "./Button";
import Types from "./Types";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
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
                            localStorage.clear();
                            Navigation("/")
                        }
                    }>Log Out</button>
                </li>
            </ul>
        </nav>
        
        <Types types={types} setSelected={setSelected}/>
        <button>Add Question</button>
        
      </div>
    );
  };

export default Admin;