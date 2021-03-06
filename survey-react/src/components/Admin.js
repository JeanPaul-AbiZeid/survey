import React, { useEffect, useState } from "react";
import '../App.css';
import Button from "./Button";
import Types from "./Types";
import { Link, useNavigate } from "react-router-dom";
import CreateQuest from "./CreateQuest";

const Admin = () => {
    
  const [types, setTypes] = useState([]);
  const [survey_name, setSurvey_name]= useState("");
  const [survey_questions, setSurvey_questions]= useState([]);
  const [questions, setQuestions] = useState([])
  

  function addQuestions(){
    setSurvey_questions((survey_questions) => ([...survey_questions, [<CreateQuest questions={questions} setQuestions={setQuestions}/>]]))
  }
  
  useEffect(() => {
    console.log(survey_questions)
    });
  

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
        
        <div className="survey">
          <h2>Create a Survey</h2>
          <input placeholder="Survey Title" onChange={(e) => setSurvey_name((survey_name) =>(e.target.value))}/>
          
          <button className="add-question add" onClick={addQuestions}>Add Question</button>
          {survey_questions}<br/>

          <button className="add add-question">Create</button>
        </div>
        
        
      </div>
    );
  };

export default Admin;