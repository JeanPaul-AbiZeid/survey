import React, { useEffect, useState } from "react";
import '../App.css';
import Button from "./Button";
import Types from "./Types";
import { Link, useNavigate } from "react-router-dom";
import CreateQuest from "./CreateQuest";

const Admin = () => {
    
  const [types, setTypes] = useState([]);
  // const [selected, setSelected] = useState(types[0]);
  const [survey_name, setSurvey_name]= useState("");
  const [survey_questions, setSurvey_questions]= useState([]);
  

  function addQuestions(){
    setSurvey_questions([...survey_questions, [<CreateQuest/>]])
  }

  // // const handleClick = () => {
  // //   setSurvey_questions(survey_questions => (survey_questions.push({id})))
  // // }
    
  

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
        
        
        <input placeholder="Survey Title"/>
        
        <button onClick={addQuestions}>Add Question</button>
        {survey_questions}
        
      </div>
    );
  };

export default Admin;