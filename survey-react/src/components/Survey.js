import React, {useState, useEffect} from "react";
import '../App.css';
import Button from "./Button";
import Question from "./Question";
import { Link, useNavigate, useParams } from "react-router-dom";

const Survey = () => {
    const {id} = useParams()
    const Navigation = useNavigate();
    const [survey, setSurvey] = useState({});
    // console.log(survey)
    const url = "http://127.0.0.1:8000/api/getquestions/" + id;
    

    const fetchSurvey = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        //Accepts a function to perform on certain changes
        const getSurvey = async () => {
            const serverSurvey = await fetchSurvey();
            setSurvey(serverSurvey.survey);
        };
        getSurvey();
        }, []);

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
        <div className="main-container">
            <h1>{survey.name}</h1>
            {survey.questions && survey.questions.map((info) => (
                <Question 
                key = {info.id}
                id = {info.id}
                type = {info.type}
                text = {info.question}
                options = {info.options}
                />
            ))}
            
        </div>
        
        
      </div>
    );
  };

export default Survey;